import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WfPageId from "../../components/WfPageId";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | George's Mexican Restaurant | Mandeville, LA",
  description: "Family-owned for over 40 years, George&#x27;s Mexican Restaurant serves authentic Mexican and Honduran cuisine in the heart of Mandeville, Louisiana.",
  alternates: { canonical: "https://georgesmexicanrestaurant.com/about-us" },
  openGraph: {
    title: "About Us | George's Mexican Restaurant | Mandeville, LA",
    description: "Family-owned for over 40 years, George&#x27;s Mexican Restaurant serves authentic Mexican and Honduran cuisine in the heart of Mandeville, Louisiana.",
    type: "website",
    url: "https://georgesmexicanrestaurant.com/about-us",
    siteName: "George's Mexican Restaurant",
    locale: "en_US",
    images: ["https://georgesmexicanrestaurant.com/images/OSWALD.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | George's Mexican Restaurant | Mandeville, LA",
    description: "Family-owned for over 40 years, George&#x27;s Mexican Restaurant serves authentic Mexican and Honduran cuisine in the heart of Mandeville, Louisiana.",
  },
};

export default function Page() {
  return (
    <>
      <WfPageId id="68806e1333c996417972a062" />
      <BreadcrumbSchema name="About Us" path="/about-us" />
      <Navbar currentPath="/about-us" />
        <div id="Hero-section" className="section blog-grid-banner-copy">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 data-w-id="ad054068-1324-d2ac-9761-121433eb9b65" style={{ opacity: "0" }} className="banner-title">About Us</h1>
              <p data-w-id="ad054068-1324-d2ac-9761-121433eb9b67" style={{ opacity: "0" }} className="banner-description">Explore Our Seasonal Dishes, Created with Passion and Fresh Ingredients</p>
            </div>
          </div>
        </div>
        <section id="Menu" className="section without-bottom-spacing">
          <div className="w-layout-blockcontainer base-container w-container"></div>
        </section>
        <section id="Book-a-table" className="section without-bottom-spacing">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="reservation-section-wrapper">
              <div id="w-node-_6c794274-06f8-debc-5968-11afaa080f98-7972a062" data-w-id="6c794274-06f8-debc-5968-11afaa080f98" style={{ opacity: "0" }} className="reservation-image-wrapper"><img sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" srcSet="/images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp 500w, /images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp 800w, /images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp 1080w, /images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp 1600w, /images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp 1920w" alt="Image" src="/images/Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining_1Joyful-Mediterranean-Latina-Woman-Enjoying-Casual-Dining.webp" loading="lazy" className="image-reservation" /></div>
              <div id="w-node-_6c794274-06f8-debc-5968-11afaa080f9a-7972a062" data-w-id="6c794274-06f8-debc-5968-11afaa080f9a" style={{ opacity: "0" }} className="form-reservation-wrapper">
                <div>
                  <div>
                    <h6>We are waiting for you</h6>
                    <h2 className="heading-reservation">Reserve your table.</h2>
                    <p>Join us at George&#x27;s for an unforgettable dining experience. Book your table today!</p>
                  </div>
                  {/* TODO: This Webflow form has no backend after static export — submissions go nowhere. Wire it to a real POST endpoint (e.g. Formspree) before relying on it. */}
                  <div className="form-block-reservation w-form">
                    <form id="wf-form-Reservation-Form" name="wf-form-Reservation-Form" data-name="Reservation Form" method="get" data-wf-page-id="68806e1333c996417972a062" data-wf-element-id="6c794274-06f8-debc-5968-11afaa080fa4">
                      <div className="inputs-wrapper">
                        <div className="input-item-wrapper"><label htmlFor="name-2" className="label">Name*</label><input className="text-field w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Your name" type="text" id="name-2" required /></div>
                        <div className="input-item-wrapper"><label htmlFor="Phone-2" className="label">Phone*</label><input className="text-field w-input" maxLength={256} name="Phone-2" data-name="Phone 2" placeholder="Phone number" type="tel" id="Phone-2" required /></div>
                      </div>
                      <div className="inputs-wrapper-bottom">
                        <div className="input-item-wrapper"><label htmlFor="Number-of-guests-2" className="label">Number of guests*</label><input className="text-field w-input" maxLength={256} name="Number-of-guests-2" data-name="Number Of Guests 2" placeholder="Guests" type="text" id="Number-of-guests-2" required /></div>
                        <div className="input-item-wrapper"><label htmlFor="Date-2" className="label">Date*</label><input className="text-field w-input" maxLength={256} name="Date-2" data-name="Date 2" placeholder="Date" type="text" id="Date-2" required /></div>
                        <div className="input-item-wrapper"><label htmlFor="Time-2" className="label">Time*</label><input className="text-field w-input" maxLength={256} name="Time-2" data-name="Time 2" placeholder="Time" type="text" id="Time-2" required /></div>
                      </div><input type="submit" data-wait="Please wait..." className="primary-button w-button" value="Submit reservation" />
                    </form>
                    <div className="success-message align-left w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message align-left w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
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
                  <h4>1461 N. Causeway Blvd<br />Mandeville, LA 70471</h4>
                  <p>Located in the heart of Downtown, near Central Park</p>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1ef" style={{ opacity: "0" }} className="work-time-wrapper">
                  <h4>Monday - Friday: <span className="text-span-time">11:00 AM - 10:00 PM</span></h4>
                  <h4>Saturday - Sunday: <span className="text-span-time">10:00 AM - 11:00 PM</span></h4>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1f8" style={{ opacity: "0" }} className="contacts-button-wrapper">
                  <a href="mailto:example@lamansa.com" className="secondary-button w-inline-block">
                    <div className="clip">
                      <div className="button-text-wrap">
                        <div className="text-button">example@lamansa.com</div>
                      </div>
                      <div className="button-text-wrap button-text-bottom">
                        <div className="text-button">example@lamansa.com</div>
                      </div>
                    </div>
                    <div className="line-button"></div>
                  </a>
                  <a href="tel:+19856264342" className="secondary-button w-inline-block">
                    <div className="clip">
                      <div className="button-text-wrap">
                        <div className="text-button">Phone: (985) 626-4342</div>
                      </div>
                      <div className="button-text-wrap button-text-bottom">
                        <div className="text-button">Phone: (985) 626-4342</div>
                      </div>
                    </div>
                    <div className="line-button"></div>
                  </a>
                </div>
              </div>
              <div data-w-id="f2beb868-289e-2965-5278-30f592ddf20b" style={{ opacity: "0" }} className="contacts-right-column"><img src="/images/Cozy-Modern-Bar-Exterior-at-Dusk_1Cozy-Modern-Bar-Exterior-at-Dusk.webp" loading="lazy" alt="Image" className="image-contacts" /></div>
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
                      <a href="/reservations" className="footer-link">Book a table</a>
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
