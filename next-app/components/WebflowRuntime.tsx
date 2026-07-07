"use client";

import { useEffect } from "react";

/**
 * Loads the exported Webflow runtime after React hydration so the two never
 * fight over the DOM. Order matters: webflow.js expects jQuery to exist, and
 * GSAP loads last exactly like the static export did.
 */
const SCRIPTS = [
  "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6834324a9b3021f11167f750",
  "/js/webflow.js",
  "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js",
];

let loaded = false;

export default function WebflowRuntime() {
  useEffect(() => {
    if (loaded) return;
    loaded = true;

    if ("ontouchstart" in window || (window as unknown as { DocumentTouch?: unknown }).DocumentTouch) {
      document.documentElement.className += " w-mod-touch";
    }

    const loadSequentially = (index: number) => {
      if (index >= SCRIPTS.length) return;
      const script = document.createElement("script");
      script.src = SCRIPTS[index];
      script.onload = () => loadSequentially(index + 1);
      document.body.appendChild(script);
    };
    loadSequentially(0);

    // Smooth-scroll for same-page anchor links (e.g. the homepage "About" ->
    // #About-us). Webflow's mobile nav moves the menu into a .w-nav-overlay
    // outside React's root and closes it on tap, swallowing the anchor jump —
    // so a React onClick never fires and nothing scrolls. A capture-phase
    // document listener catches the click wherever Webflow parked the link;
    // we let Webflow close the menu, then scroll once it has begun animating.
    const onAnchorClick = (e: Event) => {
      const link = (e.target as HTMLElement).closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const hash = link.getAttribute("href") || "";
      if (hash.length < 2) return; // bare "#" (lightbox / back-to-top) — ignore
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      // On mobile the tap also closes the nav, and Webflow locks body scroll
      // for the ~400ms close animation — scrolling during that window is lost.
      // Poll until the menu button is no longer open (immediate on desktop),
      // then scroll.
      const navButton = document.querySelector(".w-nav-button");
      let tries = 0;
      const scrollWhenClosed = () => {
        if (navButton?.classList.contains("w--open") && tries < 30) {
          tries += 1;
          window.setTimeout(scrollWhenClosed, 40);
          return;
        }
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", hash);
      };
      scrollWhenClosed();
    };
    document.addEventListener("click", onAnchorClick, true);
    return () => document.removeEventListener("click", onAnchorClick, true);
  }, []);

  return null;
}
