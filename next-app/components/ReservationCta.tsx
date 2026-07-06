/** "Reserve your table" section with the exported Webflow reservation form.
 *  TODO: This Webflow form has no backend after static export — submissions go
 *  nowhere. Wire it to a real POST endpoint (e.g. Formspree) before relying on
 *  it. The phone CTA and the homepage hero's GloriaFood button do work. */
export default function ReservationCta() {
  return (
    <section id="Book-a-table" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="w-layout-grid container-2">
          <div
            id="w-node-e4b9a35b-4b8f-1c4c-c8b9-a3a54d01157b-4d011576"
            data-w-id="e4b9a35b-4b8f-1c4c-c8b9-a3a54d01157b"
            className="w-layout-blockcontainer form-reservation-wrapper w-container"
          >
            <div data-w-id="f48e6fef-8073-e650-e3e4-5025a2528fcd" className="form-reservation-wrapper">
              <div>
                <div>
                  <h6>We are waiting for you</h6>
                  <h2 className="heading-reservation">Reserve your table.</h2>
                  <p>
                    Join us at George&#39;s for an unforgettable dining experience. Book your table
                    today!
                  </p>
                </div>
                <div className="form-block-reservation w-form">
                  <form
                    id="wf-form-Reservation-Form"
                    name="wf-form-Reservation-Form"
                    data-name="Reservation Form"
                    method="get"
                    data-wf-page-id="6834324a9b3021f11167f791"
                    data-wf-element-id="f48e6fef-8073-e650-e3e4-5025a2528fd7"
                  >
                    <div className="inputs-wrapper">
                      <div className="input-item-wrapper">
                        <label htmlFor="name-2" className="label">
                          Name*
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder="Your name"
                          type="text"
                          id="name-2"
                          required
                        />
                      </div>
                      <div className="input-item-wrapper">
                        <label htmlFor="Phone-2" className="label">
                          Phone*
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="Phone-2"
                          data-name="Phone 2"
                          placeholder="Phone number"
                          type="tel"
                          id="Phone-2"
                          required
                        />
                      </div>
                    </div>
                    <div className="inputs-wrapper-bottom">
                      <div className="input-item-wrapper">
                        <label htmlFor="Number-of-guests-2" className="label">
                          Number of guests*
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="Number-of-guests-2"
                          data-name="Number Of Guests 2"
                          placeholder="Guests"
                          type="text"
                          id="Number-of-guests-2"
                          required
                        />
                      </div>
                      <div className="input-item-wrapper">
                        <label htmlFor="Date-2" className="label">
                          Date*
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="Date-2"
                          data-name="Date 2"
                          placeholder="Date"
                          type="text"
                          id="Date-2"
                          required
                        />
                      </div>
                      <div className="input-item-wrapper">
                        <label htmlFor="Time-2" className="label">
                          Time*
                        </label>
                        <input
                          className="text-field w-input"
                          maxLength={256}
                          name="Time-2"
                          data-name="Time 2"
                          placeholder="Time"
                          type="text"
                          id="Time-2"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="primary-button w-button"
                      value="Submit reservation"
                    />
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
                <p className="paragraph-bottom-reservation">
                  For same-day reservations or special requests, feel free to give us a call!
                </p>
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
          <div
            id="w-node-deada979-f161-d7fd-2957-dcc6762381a9-4d011576"
            className="w-layout-blockcontainer div-block-100 w-container"
          >
            <img
              src="/images/55.png"
              loading="lazy"
              width={572}
              alt=""
              srcSet="/images/55-p-500.png 500w, /images/55-p-800.png 800w, /images/55.png 1080w"
              sizes="(max-width: 767px) 100vw, 572px"
              className="image-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
