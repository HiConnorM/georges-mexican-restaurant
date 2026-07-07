import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WfPageId from "../../components/WfPageId";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reservations | George's Mexican Restaurant | Mandeville, LA",
  description: "Reserve a table at George&#x27;s Mexican Restaurant in Mandeville, LA. Authentic Mexican and Honduran cuisine, margaritas, live music, and weekly specials.",
  alternates: { canonical: "https://georgesmexicanrestaurant.com/reservations" },
  openGraph: {
    title: "Reservations | George's Mexican Restaurant | Mandeville, LA",
    description: "Reserve a table at George&#x27;s Mexican Restaurant in Mandeville, LA. Authentic Mexican and Honduran cuisine, margaritas, live music, and weekly specials.",
    type: "website",
    url: "https://georgesmexicanrestaurant.com/reservations",
    siteName: "George's Mexican Restaurant",
    locale: "en_US",
    images: ["https://georgesmexicanrestaurant.com/images/OSWALD.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reservations | George's Mexican Restaurant | Mandeville, LA",
    description: "Reserve a table at George&#x27;s Mexican Restaurant in Mandeville, LA. Authentic Mexican and Honduran cuisine, margaritas, live music, and weekly specials.",
  },
};

export default function Page() {
  return (
    <>
      <WfPageId id="68806e809578707174464576" />
      <BreadcrumbSchema name="Reservations" path="/reservations" />
      <Navbar currentPath="/reservations" />
        <div id="Hero-section" className="section blog-grid-banner-copy">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 data-w-id="ad054068-1324-d2ac-9761-121433eb9b65" style={{ opacity: "0" }} className="banner-title">Reserve a Spot</h1>
              <p data-w-id="ad054068-1324-d2ac-9761-121433eb9b67" style={{ opacity: "0" }} className="banner-description">Reserve your party </p>
            </div>
          </div>
        </div>
        <section id="Book-a-table" className="section without-bottom-spacing">
          <section></section>
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="reservation-section-wrapper">
              <div id="w-node-_6c794274-06f8-debc-5968-11afaa080f98-74464576" data-w-id="6c794274-06f8-debc-5968-11afaa080f98" style={{ opacity: "0" }} className="reservation-image-wrapper"><img sizes="240px" srcSet="/images/55-p-500.webp 500w, /images/55-p-800.webp 800w, /images/55.webp 1080w" alt="" src="/images/55.webp" loading="lazy" className="image-reservation" /></div>
              <div id="w-node-_6c794274-06f8-debc-5968-11afaa080f9a-74464576" data-w-id="6c794274-06f8-debc-5968-11afaa080f9a" style={{ opacity: "0" }} className="form-reservation-wrapper">
                <div>
                  <div>
                    <h6>We are waiting for you</h6>
                    <h2 className="heading-reservation">Reserve your table.</h2>
                    <p>Join us at George&#x27;s for an unforgettable dining experience. Book your table today!</p>
                  </div>
                  {/* The Webflow form had no backend after static export; replaced with the GloriaFood reservation widget already used on the homepage hero (ewm2.js is loaded in this page's head). */}
                  <div className="code-embed w-embed"><span className="glf-button reservation" data-glf-cuid="49ec8691-e2c1-4043-b886-8a8c19f5906f" data-glf-ruid="d6301514-288d-4a01-a526-e110819d299f" data-glf-reservation="true">Table Reservation</span></div>
                </div>
                <div className="reservation-bottom-content">
                  <p className="paragraph-bottom-reservation">For same-day reservations or special requests, feel free to give us a call!</p>
                  <div className="button-wrapper">
                    <a href="tel:+19856264342" className="secondary-button w-inline-block">
                      <div className="clip">
                        <div className="button-text-wrap">
                          <div className="text-button">(985) 626-4342</div>
                        </div>
                        <div className="button-text-wrap button-text-bottom">
                          <div className="text-button">(985) 626-4342</div>
                        </div>
                      </div>
                      <div className="line-button"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Contacts" className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="contacts-wrapper-section">
              <div className="contacts-left-column">
                <h2 data-w-id="f2beb868-289e-2965-5278-30f592ddf1e8" style={{ opacity: "0" }} className="title-contacts">George&#x27;s Mexican Restaurant.</h2>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1ea" style={{ opacity: "0" }} className="address-wrapper">
                  <h4>1461 N Causeway Blvd, <br />Mandeville, LA 70471</h4>
                  <p>Located in the heart of Mandeville</p>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1ef" style={{ opacity: "0" }} className="work-time-wrapper">
                  <h4>Sunday -Thursday: <span className="text-span-time">11:00 AM - 9:00 PM</span></h4>
                  <h4>Friday - Saturday: <span className="text-span-time">10:00 AM - 11:00 PM</span></h4>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1f8" style={{ opacity: "0" }} className="contacts-button-wrapper">
                  <a href="tel:+19856264342" className="secondary-button w-inline-block">
                    <div className="clip">
                      <div className="button-text-wrap">
                        <div className="text-button">(985) 626-4342</div>
                      </div>
                      <div className="button-text-wrap button-text-bottom">
                        <div className="text-button">(985) 626-4342</div>
                      </div>
                    </div>
                    <div className="line-button"></div>
                  </a>
                </div>
              </div>
              <div data-w-id="f2beb868-289e-2965-5278-30f592ddf20b" style={{ opacity: "0" }} className="contacts-right-column"><img src="/images/51.webp" loading="lazy" sizes="240px" srcSet="/images/51-p-500.webp 500w, /images/51-p-800.webp 800w, /images/51.webp 1080w" alt="" className="image-contacts" /></div>
            </div>
          </div>
        </section>
        <div className="footer">
          <div className="base-container w-container">
            <div className="footer-wrapper">
              <div className="footer-divider"></div>
              <div className="footer-top-content">
                <div className="footer-top-left-content">
                  <div className="footer-links-block">
                    <div className="footer-links-wrapper">
                      <p className="footer-links-title">Explore</p>
                      <a href="/reservations" aria-current="page" className="footer-link w--current">Book a table</a>
                      <a href="/menu" className="footer-link">Menu</a>
                      <a href="/gallery" className="footer-link">News</a>
                    </div>
                    <div className="footer-links-wrapper">
                      <p className="footer-links-title">Socials</p>
                      <a href="https://www.instagram.com/georgesmexicanrestaurant" target="_blank" className="footer-link">Instagram</a>
                      <a href="https://www.facebook.com/georgesmexicanrestaurant/" target="_blank" className="footer-link">Facebook</a>
                    </div>
                  </div>
                  <a href="/" className="footer-brand w-nav-brand"><img loading="lazy" height="Auto" alt="" src="/images/scarf_edited-1.avif" className="footer-logo" /></a>
                </div>
                <div className="footer-top-right-content">
                  <div className="footer-heading-wrapper">
                    <h2>Savor the flavors of Mexico</h2>
                    <a href="/menu" className="primary-button w-button">View all menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-wrapper">
              <div className="footer-copyright">© MOSO LLC. All Rights Reserved. <a href="/templates/licensing" className="licensing-footer-link">Licensing</a>
              </div>
            </div>
          </div>
          <div className="promotion-labels-wrapper">
            <div className="promotion-label-left"></div>
          </div>
        </div>
    </>
  );
}
