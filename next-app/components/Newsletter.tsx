/** Newsletter signup.
 *  TODO: This Webflow form has no backend after static export — submissions go
 *  nowhere. Wire it to a real POST endpoint (e.g. Formspree) before relying on
 *  it. */
export default function Newsletter() {
  return (
    <section id="Newsletter" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="hewsletter-title-wrapper">
          <h6 data-w-id="6d25c0e5-2e5b-8e18-a7e2-ae132509754e" style={{ opacity: 0 }}>
            Newsletter
          </h6>
          <h2
            data-w-id="5c05fa99-8f32-0a5c-9908-d0df271b4849"
            style={{ opacity: 0 }}
            className="heading-newsletter"
          >
            Stay in the loop with all things George&#39;s!
          </h2>
          <p data-w-id="695188c0-433b-ad0b-b5f7-599573aca2c5" style={{ opacity: 0 }}>
            Sign up for our newsletter to receive the latest news, exclusive offers, and updates on
            our seasonal menu.
          </p>
        </div>
        <div
          data-w-id="b727ee62-2c04-a47e-55f7-056c2a5ae35f"
          style={{ opacity: 0 }}
          className="newsletter-form-wrapper"
        >
          <div className="form-block-newsletter w-form">
            <form
              id="wf-form-Email-Form-Newsletter"
              name="wf-form-Email-Form-Newsletter"
              data-name="Email Form Newsletter"
              method="get"
              className="form-newsletter"
              data-wf-page-id="6834324a9b3021f11167f791"
              data-wf-element-id="00842883-ca58-1b87-d0e4-4e67b0b6257c"
            >
              <input
                className="text-field-newsletter w-input"
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder="Email address"
                type="email"
                id="email"
                required
              />
              <input
                type="submit"
                data-wait="Please wait..."
                className="primary-button w-button"
                value="Subscribe"
              />
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
