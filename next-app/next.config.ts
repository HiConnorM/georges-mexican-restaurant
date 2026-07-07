import type { NextConfig } from "next";

const YEAR = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  // The pages intentionally use the exported Webflow markup with plain <img>
  // tags and manual srcset attributes so they render identically to the
  // static site. next/image can be adopted page by page later.
  async headers() {
    return [
      // Exported Webflow assets only change together with a redeploy, so let
      // browsers and the CDN cache them for a year.
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: YEAR }] },
      { source: "/fonts/:path*", headers: [{ key: "Cache-Control", value: YEAR }] },
      { source: "/css/:path*", headers: [{ key: "Cache-Control", value: YEAR }] },
      { source: "/js/:path*", headers: [{ key: "Cache-Control", value: YEAR }] },
    ];
  },
};

export default nextConfig;
