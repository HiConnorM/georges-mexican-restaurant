export const GLORIAFOOD = {
  cuid: "49ec8691-e2c1-4043-b886-8a8c19f5906f",
  ruid: "d6301514-288d-4a01-a526-e110819d299f",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=1461%20N.%20Causeway%20Blvd%2C%20Mandeville%2C%20LA%2070471";

/** Full-viewport Vimeo background hero with the GloriaFood order/reservation
 *  buttons and the address banner. */
export default function Hero() {
  return (
    <div className="video-background-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="banner-wrapper-home-1">
          <div
            data-w-id="4720ee21-f97a-bc2a-1e4f-0cc258c7b7fb"
            style={{ opacity: 0 }}
            className="heading-banner-wrapper"
          >
            <h1 className="text-light mobile">
              AUTHENTIC <br />
              MEXICAN CUISINE
            </h1>
          </div>
          <div className="bottom-content-banner-wrapper">
            <div className="left-column-banner-wrapper">
              <p
                data-w-id="152a9806-1977-f010-8517-05ce7f67963b"
                style={{ opacity: 0 }}
                className="paragraph-banner-home-1"
              >
                Explore our menu with fresh, flavorful dishes that celebrate our culinary
                traditions over 40 years.
              </p>
              <div
                data-w-id="1600598f-3a3d-9911-9397-1268947741c8"
                style={{ opacity: 0 }}
                className="banner-button-wrapper"
              >
                <div className="code-embed w-embed">
                  <span
                    className="glf-button"
                    data-glf-cuid={GLORIAFOOD.cuid}
                    data-glf-ruid={GLORIAFOOD.ruid}
                  >
                    See MENU &amp; Order
                  </span>
                  <span
                    className="glf-button reservation"
                    data-glf-cuid={GLORIAFOOD.cuid}
                    data-glf-ruid={GLORIAFOOD.ruid}
                    data-glf-reservation="true"
                  >
                    Table Reservation
                  </span>
                </div>
              </div>
            </div>
            <div
              data-w-id="a7b29de6-7d30-183d-8b62-3498227c4375"
              style={{ opacity: 0 }}
              className="address-link-wrap"
            >
              <a href={MAPS_URL} target="_blank" className="address-banner-link">
                1461 N. Causeway Blvd
                <br />
                Mandeville, LA 70471
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="video-wrapper">
        <div className="video-embed w-embed w-iframe">
          <iframe
            src="https://player.vimeo.com/video/1125311834?background=1&quality=1080p"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
