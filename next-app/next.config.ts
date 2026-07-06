import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The homepage intentionally uses the exported Webflow markup with plain
  // <img> tags and manual srcset attributes so it renders byte-for-byte like
  // the static site. next/image can be adopted page by page later.
};

export default nextConfig;
