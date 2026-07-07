import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WfPageId from "../../components/WfPageId";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Specials & Events | George's Mexican Restaurant | Mandeville, LA",
  description: "See what&#x27;s happening at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 weekly specials, live music, happy hour, margarita nights, and community events.",
  alternates: { canonical: "https://georgesmexicanrestaurant.com/gallery" },
  openGraph: {
    title: "Specials & Events | George's Mexican Restaurant | Mandeville, LA",
    description: "See what&#x27;s happening at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 weekly specials, live music, happy hour, margarita nights, and community events.",
    type: "website",
    url: "https://georgesmexicanrestaurant.com/gallery",
    siteName: "George's Mexican Restaurant",
    locale: "en_US",
    images: ["https://georgesmexicanrestaurant.com/images/OSWALD.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specials & Events | George's Mexican Restaurant | Mandeville, LA",
    description: "See what&#x27;s happening at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 weekly specials, live music, happy hour, margarita nights, and community events.",
  },
};

export default function Page() {
  return (
    <>
      <WfPageId id="6834324a9b3021f11167f799" />
      <BreadcrumbSchema name="Specials & Events" path="/gallery" />
      <Navbar currentPath="/gallery" />
        <div id="Hero-section" className="section blog-grid-banner">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 data-w-id="3648c7fb-4012-52e6-9b48-fd38b6d8146b" style={{ opacity: "0" }} className="banner-title">Specials &amp; Events</h1>
              <p data-w-id="3648c7fb-4012-52e6-9b48-fd38b6d8146d" style={{ opacity: "0" }} className="banner-description">We love giving you more reasons to pull up a chair.<br />Our specials and events bring the best of Honduran and Mexican flavors and culture right here to Mandeville.</p>
            </div>
          </div>
        </div>
        <section id="News" className="section without-bottom-spacing">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="blog-section-wrapper">
              <div data-w-id="a58ee156-ace7-ebdd-adeb-cb59c2fe4348" style={{ opacity: "0" }} className="blog-title-wrap-center">
                <h2 className="heading-2">Check out latest updates.</h2>
              </div>
            </div>
          </div>
        </section>
        <section id="Contacts" className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="contacts-wrapper-section">
              <section id="Book-a-table" className="section without-bottom-spacing">
                <div className="w-layout-blockcontainer base-container w-container">
                  <div className="w-layout-grid container-2">
                    <div id="w-node-e4b9a35b-4b8f-1c4c-c8b9-a3a54d01157b-4d011576" data-w-id="e4b9a35b-4b8f-1c4c-c8b9-a3a54d01157b" className="w-layout-blockcontainer form-reservation-wrapper w-container">
                      <div data-w-id="f48e6fef-8073-e650-e3e4-5025a2528fcd" className="form-reservation-wrapper">
                        <div>
                          <div>
                            <h6>We are waiting for you</h6>
                            <h2 className="heading-reservation">Reserve your table.</h2>
                            <p>Join us at George&#x27;s for an unforgettable dining experience. Book your table today!</p>
                          </div>
                          {/* TODO: This Webflow form has no backend after static export — submissions go nowhere. Wire it to a real POST endpoint (e.g. Formspree) before relying on it. */}
                          <div className="form-block-reservation w-form">
                            <form id="wf-form-Reservation-Form" name="wf-form-Reservation-Form" data-name="Reservation Form" method="get" data-wf-page-id="6834324a9b3021f11167f799" data-wf-element-id="f48e6fef-8073-e650-e3e4-5025a2528fd7">
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
                    <div id="w-node-deada979-f161-d7fd-2957-dcc6762381a9-4d011576" className="w-layout-blockcontainer div-block-100 w-container"><img src="/images/55.webp" loading="lazy" width="572" height="Auto" alt="" srcSet="/images/55-p-500.webp 500w, /images/55-p-800.webp 800w, /images/55.webp 1080w" sizes="(max-width: 767px) 100vw, 572px" className="image-52" /></div>
                  </div>
                </div>
              </section>
              <div data-w-id="76f53b3d-c773-f308-b6f2-9968c1791a85" style={{ opacity: "0" }} className="contacts-right-column"><img src="/images/50.webp" loading="lazy" alt="" className="image-contacts" /></div>
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
                      <a href="/gallery" aria-current="page" className="footer-link w--current">News</a>
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
