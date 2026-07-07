import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Reviews from "../components/Reviews";
import SpecialsEvents from "../components/SpecialsEvents";
import ReservationCta from "../components/ReservationCta";
import ChefQuote from "../components/ChefQuote";
import MissionCta from "../components/MissionCta";
import GalleryPreview from "../components/GalleryPreview";
import Contacts from "../components/Contacts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

// Initial-state rules for the Webflow interactions on this page, copied from
// the exported index.html <head>. They hide/transform elements until the
// Webflow runtime plays its load/scroll animations. The per-item rules for the
// "Why Choose" panels were removed — those panels are now a self-contained
// accordion (see SpecialsEvents.tsx); only the section wrapper's scroll-in
// fade remains.
const interactionStyles = `
@media (min-width:768px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="e31dfb9c-90df-bde6-663e-4a88a33aa39b"] {opacity:0}
}
`;

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://georgesmexicanrestaurant.com/#restaurant",
  name: "George's Mexican Restaurant",
  alternateName: "George's Mexican & Honduran Restaurant",
  description:
    "Family-owned restaurant serving authentic Mexican and Honduran cuisine in Mandeville, Louisiana for over 40 years. Fresh tacos, fajitas, margaritas, weekly specials, live music, catering, and online ordering for pickup.",
  url: "https://georgesmexicanrestaurant.com/",
  image: "https://georgesmexicanrestaurant.com/images/OSWALD.webp",
  logo: "https://georgesmexicanrestaurant.com/images/Untitled-design-3.svg",
  servesCuisine: ["Mexican", "Honduran", "Tex-Mex"],
  telephone: "+19856264342",
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1461 N. Causeway Blvd",
    addressLocality: "Mandeville",
    addressRegion: "LA",
    postalCode: "70471",
    addressCountry: "US",
  },
  areaServed: ["Mandeville LA", "Covington LA", "Northshore", "St. Tammany Parish"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  hasMenu: "https://georgesmexicanrestaurant.com/menu",
  acceptsReservations: "https://georgesmexicanrestaurant.com/reservations",
  // Mirrors the rating shown in the on-page reviews slider.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1230",
  },
  potentialAction: [
    {
      "@type": "OrderAction",
      target: "https://www.restaurantlogin.com/api/fb/_q4xrw",
      deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    },
    {
      "@type": "ReserveAction",
      target: "https://georgesmexicanrestaurant.com/reservations",
      result: { "@type": "FoodEstablishmentReservation", name: "Table reservation" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/georgesmexicanrestaurant/",
    "https://www.instagram.com/georgesmexicanrestaurant",
  ],
};

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: interactionStyles }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Navbar />
      <Hero />
      <section id="Menu" className="section without-bottom-spacing"></section>
      <AboutUs />
      <Reviews />
      <SpecialsEvents />
      <ReservationCta />
      <ChefQuote />
      <MissionCta />
      <GalleryPreview />
      <Contacts />
      <Newsletter />
      <Footer />
      <div className="icon-style-guide"></div>
    </>
  );
}
