const INSTAGRAM_EVENTS_URL =
  "https://www.instagram.com/georgesmexicanrestaurant?fbclid=IwY2xjawQZn5JleHRuA2FlbQIxMABicmlkETFvNTVjSXpBTEszMWt3NnVZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrZKAW_lYiaFpQagfbZZf2GiDLPyry-7Zlm7dKOrrriYe03JuuOoXExNQBpg_aem_2EEDQO37Z2GWnsl_UiKrng";

/** The "Why Choose George's" section: hover-to-reveal columns for weekly
 *  specials, events, and catering. Reveal behavior comes from the Webflow
 *  runtime via the data-w-id attributes. */
export default function SpecialsEvents() {
  return (
    <section id="Why-La-Mansa" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div data-w-id="e31dfb9c-90df-bde6-663e-4a88a33aa39b" className="benefits-wrapper">
          <h6 data-w-id="3a90a3cf-3bd2-f27d-d395-bb6a0340bfe2" style={{ opacity: 0 }}>
            Why Choose George&#39;s mexican restaurant?
          </h6>
          <div className="benefits-items">
            <div data-w-id="18e54b9c-05ca-a197-e30e-5d5da9c63ddc" className="benefit-item-first">
              <div data-w-id="fbaac203-6b01-98af-c147-a83bc880e366" className="benefit-name-first">
                Specials
              </div>
              <div
                data-w-id="619003ed-0d4d-07ca-85e8-cf90d0f3ae3f"
                className="benefit-item-description first-description"
              >
                <p>
                  <strong>ALL DAY, EVERY DAY </strong>
                  <br />
                  2-for-1 Draft Beer
                  <br />
                  <br />
                  <strong>MONDAY </strong> <br />
                  - Happy Hour (2pm-5pm) <br />
                  <br />
                  <strong>TUESDAY</strong> <br />
                  - Unlimited $5.50 house margaritas after 5:00pm{" "}
                  <em>(with minimum purchase of $10.50)</em>
                  <br />
                  - Happy Hour (2pm-5pm) <br />
                  <br />
                  <strong>WEDNESDAY</strong>
                  <br /> -<em> </em>Kids eat FREE <br />
                  <em>(with purchase of adult entree) </em>
                  <br />
                  - 50% off bottled wine <br />
                  - 2 for 1 frozen flavored margaritas
                  <br />
                  - Happy Hour (2pm-5pm) <br />
                  <br />
                  <strong>THURSDAY</strong> <br />
                  - Happy Hour (2pm-5pm) <br />
                  <br />
                  <strong>FRIDAY</strong> <br />
                  - Happy Hour (2pm-5pm) <br />
                </p>
              </div>
            </div>
            <div data-w-id="99b6f7de-38be-fac3-afc9-aeccb5dfcf1c" className="benefit-item-second">
              <div data-w-id="61134700-75a6-c877-3f83-4cf3e7b36271" className="benefit-name-second">
                Events
              </div>
              <div
                data-w-id="4ec5fbcd-a76e-e215-1d33-5f7f7facab76"
                className="benefit-item-description second-description"
              >
                <p>
                  Follow us on{" "}
                  <a href="https://www.facebook.com/georgesmexicanrestaurant/">Facebook</a> or{" "}
                  <a href={INSTAGRAM_EVENTS_URL}>Instagram</a> for the latest events, live music
                  announcements, and pop-ups <br /> <br /> <strong>MONDAY</strong>
                  <br />
                  - Chess Club (4pm)
                  <br />
                  <br />
                  <strong>TUESDAY</strong> <br />
                  - Live Music (6pm-9pm) <br />
                  <br />
                  <strong>FRIDAY</strong> <br />
                  - Live Music (6pm-9pm)
                  <br />
                  - Happy Hour (2pm-5pm) <br />
                  <br />
                  <strong>SATURDAY</strong>
                  <br />
                  - Live Music (6pm-9pm)
                  <br />
                </p>
              </div>
            </div>
            <div data-w-id="f1e2858a-4468-28e1-cb4a-18d305075bd1" className="benefit-item-third">
              <a
                data-w-id="59ecf86b-43b0-099e-e64b-c3b2c7ff53e8"
                href="#"
                className="benefit-s-name-third"
              >
                Catering
              </a>
              <div
                data-w-id="c2e3971d-3986-c39f-6e8d-f377f5b39c55"
                className="benefit-item-description third-description"
              >
                <p>
                  Planning a party, office lunch, or family celebration?
                  <br />
                  <br />
                  George’s offers catering and private event options featuring our most popular
                  dishes, fresh margaritas, and crowd-favorite appetizers.
                  <br />
                  <br />
                  From small gatherings to larger celebrations, our team will help you create a
                  delicious and memorable experience for your guests. <br />
                  <br />
                  Explore our catering menu or <a href="tel:+19856264342">contact us</a> to start
                  planning your event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
