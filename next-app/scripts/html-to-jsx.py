#!/usr/bin/env python3
"""Convert a Webflow-exported HTML page into a Next.js App Router page.tsx.

Keeps the exported markup verbatim (classes, data-w-id attributes, inline
lightbox JSON) so the page renders identically under the shared Webflow CSS +
runtime, while swapping the navbar for the shared <Navbar/> component and
rewriting asset/page URLs to Next.js conventions.

Usage: python3 scripts/html-to-jsx.py <source.html> <route>   # e.g. menu.html /menu
"""
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
APP_DIR = Path(__file__).resolve().parent.parent / "app"

PAGE_LINKS = {
    "index.html": "/",
    "menu.html": "/menu",
    "about-us.html": "/about-us",
    "catering.html": "/catering",
    "reservations.html": "/reservations",
    "gallery.html": "/gallery",
    "templates/licensing.html": "/templates/licensing",
}

ATTR_RENAMES = {
    "class": "className", "srcset": "srcSet", "for": "htmlFor",
    "maxlength": "maxLength", "tabindex": "tabIndex", "frameborder": "frameBorder",
    "allowfullscreen": "allowFullScreen", "autocomplete": "autoComplete",
    "novalidate": "noValidate", "colspan": "colSpan", "rowspan": "rowSpan",
    "crossorigin": "crossOrigin", "readonly": "readOnly",
    "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin", "fill-rule": "fillRule",
    "clip-rule": "clipRule", "stop-color": "stopColor", "stop-opacity": "stopOpacity",
    "clip-path": "clipPath", "fill-opacity": "fillOpacity",
}
BOOLEAN_ATTRS = ["required", "checked", "disabled", "selected", "defer", "async",
                 "muted", "loop", "controls"]
VOID_ELEMENTS = "img|input|br|hr|source|embed|area|base|col|track|wbr"


def balanced_div(s, start):
    """Return end index (exclusive) of the <div> block starting at `start`."""
    depth, i = 0, start
    tag = re.compile(r"<div\b|</div>")
    while True:
        m = tag.search(s, i)
        if not m:
            raise ValueError("unbalanced div")
        if m.group(0) == "</div>":
            depth -= 1
            i = m.end()
            if depth == 0:
                return i
        else:
            depth += 1
            i = m.end()


def css_to_jsx_object(css):
    props = []
    for decl in css.split(";"):
        decl = decl.strip()
        if not decl or ":" not in decl:
            continue
        prop, value = decl.split(":", 1)
        prop = prop.strip()
        js = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), prop)
        props.append(f"{js}: {json.dumps(value.strip())}")
    return "{{ " + ", ".join(props) + " }}"


def convert(html_body, placeholders):
    def stash(jsx):
        token = f"@@PH{len(placeholders)}@@"
        placeholders.append(jsx)
        return token

    # 1. Inline <script>/<style> blocks -> dangerouslySetInnerHTML
    def script_repl(m):
        attrs, content = m.group(1), m.group(2)
        attrs = attrs.replace('class="', 'className="')
        return stash(f"<script{attrs} dangerouslySetInnerHTML={{{{ __html: {json.dumps(content)} }}}} />")

    html_body = re.sub(r"<script([^>]*)>(.*?)</script>", script_repl, html_body, flags=re.S)
    html_body = re.sub(
        r"<style([^>]*)>(.*?)</style>",
        lambda m: stash(f"<style{m.group(1)} dangerouslySetInnerHTML={{{{ __html: {json.dumps(m.group(2))} }}}} />"),
        html_body, flags=re.S)

    # 2. style="..." attributes -> style={{...}}
    html_body = re.sub(r'style="([^"]*)"',
                       lambda m: stash(f"style={css_to_jsx_object(m.group(1))}"),
                       html_body)

    # 3. Comments
    html_body = re.sub(r"<!--(.*?)-->", lambda m: stash("{/* " + m.group(1).strip().replace("*/", "*​/") + " */}"), html_body, flags=re.S)

    # 4. Escape stray braces in text
    html_body = html_body.replace("{", "@@LB@@").replace("}", "@@RB@@")

    # 5. Attribute renames (word boundary + '=')
    for old, new in ATTR_RENAMES.items():
        html_body = re.sub(rf'(\s){re.escape(old)}=', rf"\1{new}=", html_body)

    # 6. Boolean attributes: required="" -> required
    for attr in BOOLEAN_ATTRS:
        jsx_attr = ATTR_RENAMES.get(attr, attr)
        html_body = re.sub(rf'(\s){jsx_attr}=""', rf"\1{jsx_attr}", html_body)
        html_body = re.sub(rf'(\s){jsx_attr}="{attr}"', rf"\1{jsx_attr}", html_body)

    # 6b. Numeric-only props
    html_body = re.sub(r'(\s)(maxLength|tabIndex|colSpan|rowSpan)="(\d+)"', r"\1\2={\3}", html_body)

    # 7. Self-close void elements
    html_body = re.sub(rf"<({VOID_ELEMENTS})\b([^>]*?)\s*/?>", r"<\1\2 />", html_body)

    # 8. URL rewrites
    html_body = re.sub(r'(src|href)="images/', r'\1="/images/', html_body)
    html_body = re.sub(r'(srcSet=")images/', r"\1/images/", html_body)
    html_body = re.sub(r', images/', r", /images/", html_body)
    for page, route in PAGE_LINKS.items():
        html_body = html_body.replace(f'href="{page}#', f'href="{route}#')
        html_body = html_body.replace(f'href="{page}"', f'href="{route}"')

    # 9. Restore placeholders and brace escapes
    for idx, jsx in enumerate(placeholders):
        html_body = html_body.replace(f"@@PH{idx}@@", jsx)
    html_body = html_body.replace("@@LB@@", "{'{'}").replace("@@RB@@", "{'}'}")
    return html_body


def head_meta(head, name=None, prop=None):
    if name:
        m = re.search(rf'<meta content="([^"]*)" name="{name}">', head)
    else:
        m = re.search(rf'<meta content="([^"]*)" property="{prop}">', head)
    return m.group(1) if m else None


def main():
    src, route = sys.argv[1], sys.argv[2]
    html = (REPO_ROOT / src).read_text(encoding="utf-8")

    page_id = re.search(r'data-wf-page="([^"]+)"', html).group(1)
    head = html[: html.index("</head>")]
    body = html[html.index("<body>") + 6 : html.rindex("</body>")]

    title = re.search(r"<title>(.*?)</title>", head).group(1)
    description = head_meta(head, name="description")
    og_image = head_meta(head, prop="og:image")
    canonical_m = re.search(r'<link href="([^"]+)" rel="canonical">', head)
    canonical = canonical_m.group(1) if canonical_m else None

    # Per-page interaction CSS from <head> (initial states for animations)
    head_style_m = re.search(r"<style>(.*?)</style>", head, flags=re.S)
    head_style = head_style_m.group(1) if head_style_m else None

    # Drop the Webflow runtime <script src> tags (loaded by WebflowRuntime)
    body = re.sub(r'\s*<script src="[^"]*"[^>]*></script>', "", body)

    # Swap the exported navbar for the shared component
    nav_start = body.index('<div data-animation="default" class="navbar w-nav"')
    nav_end = balanced_div(body, nav_start)
    body = body[:nav_start] + "@@NAVBAR@@" + body[nav_end:]

    placeholders = []
    jsx = convert(body, placeholders)
    jsx = jsx.replace("@@NAVBAR@@", f'<Navbar currentPath="{route}" />')
    jsx = "\n".join("      " + line for line in jsx.strip().splitlines())

    esc_title = title.replace("&#x27;", "'").replace("&amp;", "&")
    meta_lines = [f"  title: {json.dumps(esc_title)},"]
    if description:
        meta_lines.append(f"  description: {json.dumps(description)},")
    if canonical:
        meta_lines.append(f"  alternates: {{ canonical: {json.dumps(canonical)} }},")
    if description:
        og = f"""  openGraph: {{
    title: {json.dumps(esc_title)},
    description: {json.dumps(description)},
    type: "website",{f'''
    images: [{json.dumps(og_image)}],''' if og_image else ''}
  }},
  twitter: {{
    card: "summary_large_image",
    title: {json.dumps(esc_title)},
    description: {json.dumps(description)},
  }},"""
        meta_lines.append(og)
    metadata = "\n".join(meta_lines)

    style_block = ""
    style_decl = ""
    if head_style:
        style_decl = f"\nconst interactionStyles = {json.dumps(head_style)};\n"
        style_block = '\n      <style dangerouslySetInnerHTML={{ __html: interactionStyles }} />'

    out = f"""import type {{ Metadata }} from "next";
import Navbar from "../../components/Navbar";
import WfPageId from "../../components/WfPageId";

export const metadata: Metadata = {{
{metadata}
}};
{style_decl}
export default function Page() {{
  return (
    <>
      <WfPageId id={json.dumps(page_id)} />{style_block}
{jsx}
    </>
  );
}}
"""
    out_dir = APP_DIR / route.lstrip("/")
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "page.tsx").write_text(out, encoding="utf-8")
    print(f"wrote {out_dir / 'page.tsx'} ({len(out)} bytes) from {src}")


if __name__ == "__main__":
    main()
