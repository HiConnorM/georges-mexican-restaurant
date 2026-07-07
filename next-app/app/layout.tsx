import type { Metadata, Viewport } from "next";
import WebflowRuntime from "../components/WebflowRuntime";

export const metadata: Metadata = {
  metadataBase: new URL("https://georgesmexicanrestaurant.com"),
  title: "George's Mexican Restaurant | Mandeville, LA",
  description:
    "Authentic Mexican cuisine in Mandeville, Louisiana for over 40 years. Fresh tacos, margaritas, live music, weekly specials, events, and catering.",
  alternates: { canonical: "https://georgesmexicanrestaurant.com/" },
  openGraph: {
    title: "George's Mexican Restaurant | Mandeville, LA",
    description:
      "Authentic Mexican cuisine in Mandeville, Louisiana for over 40 years. Fresh tacos, margaritas, live music, weekly specials, events, and catering.",
    type: "website",
    images: ["https://georgesmexicanrestaurant.com/images/OSWALD.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "George's Mexican Restaurant | Mandeville, LA",
    description:
      "Authentic Mexican cuisine in Mandeville, Louisiana for over 40 years. Fresh tacos, margaritas, live music, weekly specials, events, and catering.",
  },
  icons: {
    shortcut: "/images/favicon.png",
    apple: "/images/webclip.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-wf-page / data-wf-site let the exported webflow.js runtime find this
    // page's interactions (scroll/load animations, sliders, nav). The static
    // w-mod-js class replaces Webflow's inline UA sniffing script; without it
    // the interaction CSS never engages.
    <html
      lang="en"
      data-wf-page="6834324a9b3021f11167f791"
      data-wf-site="6834324a9b3021f11167f750"
      className="w-mod-js"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link rel="stylesheet" href="/css/georges-mexican-honduran-restaurant.webflow.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Third-party origins used on every page: jQuery CDN, Webflow asset
            CDN (GSAP), GloriaFood widget, Vimeo background video. */}
        <link rel="preconnect" href="https://d3e54v103j8qbb.cloudfront.net" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://www.fbgcdn.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        {/* Same families/variants the Webflow export requests through webfont.js,
            loaded as a plain stylesheet so server rendering stays deterministic. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CAlmarai:300,400,500,600,700%7CInstrument+Serif:300,400,500,600,700%7CInter+Tight:300,400,500,600,700&display=swap"
        />
        {/* GloriaFood ordering/reservation widget (same tag as the static site) */}
        <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async />
      </head>
      <body>
        {children}
        <WebflowRuntime />
      </body>
    </html>
  );
}
