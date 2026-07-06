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
  }, []);

  return null;
}
