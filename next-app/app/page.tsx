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
// Webflow runtime plays its load/scroll animations.
const interactionStyles = `
@media (min-width:992px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="c2e3971d-3986-c39f-6e8d-f377f5b39c55"] {display:none;-webkit-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="619003ed-0d4d-07ca-85e8-cf90d0f3ae3f"] {-webkit-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);opacity:0;display:none}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="4ec5fbcd-a76e-e215-1d33-5f7f7facab76"] {opacity:1;-webkit-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="61134700-75a6-c877-3f83-4cf3e7b36271"] {color:rgb(255,250,244);background-color:rgb(26,56,60)}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="e31dfb9c-90df-bde6-663e-4a88a33aa39b"] {opacity:0}
}
@media (max-width:991px) and (min-width:768px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="c2e3971d-3986-c39f-6e8d-f377f5b39c55"] {display:none;-webkit-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="619003ed-0d4d-07ca-85e8-cf90d0f3ae3f"] {-webkit-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,20px,0) scale3d(0.8,0.8,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);opacity:0;display:none}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="4ec5fbcd-a76e-e215-1d33-5f7f7facab76"] {opacity:1;-webkit-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0px,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="61134700-75a6-c877-3f83-4cf3e7b36271"] {color:rgb(255,250,244);background-color:rgb(26,56,60)}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="e31dfb9c-90df-bde6-663e-4a88a33aa39b"] {opacity:0}
}
@media (max-width:767px) and (min-width:480px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="18e54b9c-05ca-a197-e30e-5d5da9c63ddc"] {opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="99b6f7de-38be-fac3-afc9-aeccb5dfcf1c"] {opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f1e2858a-4468-28e1-cb4a-18d305075bd1"] {opacity:0}
}
@media (max-width:479px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="18e54b9c-05ca-a197-e30e-5d5da9c63ddc"] {opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="99b6f7de-38be-fac3-afc9-aeccb5dfcf1c"] {opacity:0}
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f1e2858a-4468-28e1-cb4a-18d305075bd1"] {opacity:0}
}
`;

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "George's Mexican Restaurant",
  url: "https://georgesmexicanrestaurant.com/",
  image: "https://georgesmexicanrestaurant.com/images/OSWALD.webp",
  servesCuisine: ["Mexican", "Honduran"],
  telephone: "+19856264342",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1461 N. Causeway Blvd",
    addressLocality: "Mandeville",
    addressRegion: "LA",
    postalCode: "70471",
    addressCountry: "US",
  },
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
