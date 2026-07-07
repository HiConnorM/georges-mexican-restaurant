export default function Contacts() {
  return (
    <section id="Contacts" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="contacts-wrapper-section">
          <div className="contacts-left-column">
            <h2
              data-w-id="4122a5e8-e485-81ed-877d-a6cb523674aa"
              style={{ opacity: 0 }}
              className="title-contacts"
            >
              George&#39;s Mexican Restaurant.
            </h2>
            <div
              data-w-id="9ef4f31b-9c5f-b32d-33a6-db05020cf8a6"
              style={{ opacity: 0 }}
              className="address-wrapper"
            >
              <h4>
                1461 N. Causeway Blvd
                <br />
                Mandeville, LA 70471
              </h4>
              <p>Located in the heart of Mandeville.</p>
            </div>
            <div
              data-w-id="3143c901-429e-b413-be81-3103c344d2b2"
              style={{ opacity: 0 }}
              className="work-time-wrapper"
            >
              <h4>Sunday - Thursday: 11:00 AM - 9:00 PM</h4>
              <h4>Friday - Saturday: 11:00 AM - 10:00 PM</h4>
            </div>
            <div
              data-w-id="94723d85-4e4d-7b27-4073-64f524dcd943"
              style={{ opacity: 0 }}
              className="contacts-button-wrapper"
            >
              <a href="tel:+19856264342" className="secondary-button w-inline-block">
                <div className="clip">
                  <div className="button-text-wrap">
                    <div className="text-button">Phone: (985) 626-4342</div>
                  </div>
                  <div className="button-text-wrap button-text-bottom">
                    <div className="text-button">(985) 626-4342</div>
                  </div>
                </div>
                <div className="line-button"></div>
              </a>
              <a href="tel:+19856264342" className="secondary-button w-inline-block">
                <div className="clip">
                  <div className="button-text-wrap"></div>
                  <div className="button-text-wrap button-text-bottom">
                    <div className="text-button">Phone: (985) 626-4342</div>
                  </div>
                </div>
                <div className="line-button"></div>
              </a>
            </div>
          </div>
          <div
            data-w-id="07ff855e-6f67-0d9f-9f3c-26938b41834a"
            style={{ opacity: 0 }}
            className="contacts-right-column"
          >
            <img
              src="/images/51.webp"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px, 100vw"
              srcSet="/images/51-p-500.webp 500w, /images/51-p-800.webp 800w, /images/51.webp 1080w"
              alt=""
              className="image-contacts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
