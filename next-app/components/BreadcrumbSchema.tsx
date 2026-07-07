const BASE = "https://georgesmexicanrestaurant.com";

/** BreadcrumbList JSON-LD for interior pages (no visual output). */
export default function BreadcrumbSchema({ name, path }: { name: string; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name, item: `${BASE}${path}` },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
