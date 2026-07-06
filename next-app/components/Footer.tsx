export default function Footer() {
  return (
    <div className="footer">
      <div className="base-container w-container">
        <div className="footer-wrapper">
          <div className="footer-divider"></div>
          <div className="footer-top-content">
            <div className="footer-top-left-content">
              <div className="footer-links-block">
                <div className="footer-links-wrapper">
                  <p className="footer-links-title">Explore</p>
                  <a href="/reservations" className="footer-link">
                    Book a table
                  </a>
                  <a href="/menu" className="footer-link">
                    Menu
                  </a>
                  <a href="/gallery" className="footer-link">
                    News
                  </a>
                </div>
                <div className="footer-links-wrapper">
                  <p className="footer-links-title">Socials</p>
                  <a
                    href="https://www.instagram.com/georgesmexicanrestaurant"
                    target="_blank"
                    className="footer-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/georgesmexicanrestaurant/"
                    target="_blank"
                    className="footer-link"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <a href="/" aria-current="page" className="footer-brand w-nav-brand w--current">
                <img src="/images/scarf_edited-1.avif" loading="lazy" alt="" className="footer-logo" />
              </a>
            </div>
            <div className="footer-top-right-content">
              <div className="footer-heading-wrapper">
                <h2 className="heading-4">Savor the flavors of Mexican Cuisine.</h2>
                <a href="/menu" className="primary-button w-button">
                  View all menu
                </a>
              </div>
              <a href="#" className="link-to-top">
                Back to top
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">
            © MOSO LLC. All Rights Reserved.{" "}
            <a href="/templates/licensing" className="licensing-footer-link">
              Licensing
            </a>
          </div>
        </div>
      </div>
      <div className="promotion-labels-wrapper">
        <div className="promotion-label-left"></div>
      </div>
    </div>
  );
}
