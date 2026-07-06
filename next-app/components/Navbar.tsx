const hamburgerStyles = `
.hamburger_12_wrap {
  --thickness: 0.2rem;
  --gap: 0.8rem;
  --rotate: 45;
  --width: 100%;
}
.hamburger_12_wrap:hover .hamburger_12_line {
  width: 65%;
}
.hamburger_12_wrap:hover .hamburger_12_line:first-child {
  width: 85%;
}
.hamburger_12_wrap:hover .hamburger_12_line:last-child {
  width: 100%;
}
.w--open .hamburger_12_line {
  width: 100% !important;
  transform: scaleX(0);
}
.w--open .hamburger_12_line:first-child {
  transform: translateY(calc(var(--thickness) + var(--gap))) rotate(calc(var(--rotate) * 3 * 1deg));
}
.w--open .hamburger_12_line:last-child {
  transform: translateY(calc(var(--thickness) * -1 + var(--gap) * -1)) rotate(calc(var(--rotate) * 1deg));
}
`;

export const ORDER_ONLINE_URL = "https://www.restaurantlogin.com/api/fb/_q4xrw";

const NAV_LINKS = [
  { href: "/menu", label: "Menu", wrapper: "is-1" },
  { href: "#About-us", label: "About", wrapper: "is-1" },
  { href: "/gallery", label: "Events", wrapper: "is-1" },
  { href: "/catering", label: "Catering", wrapper: "is-2" },
  { href: "/reservations", label: "Reservations", wrapper: "is-3" },
];

export default function Navbar() {
  return (
    <div
      data-animation="default"
      className="navbar w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="abfcf9f2-279d-dc11-2d82-4b2872cc13b5"
      role="banner"
      data-duration="400"
      id="Navbar"
      data-doc-height="1"
    >
      <div className="nav-container w-container">
        <div className="nav-menu-wrapper">
          <a href="/" aria-current="page" className="brand w-nav-brand w--current">
            <img src="/images/Untitled-design-3.svg" loading="lazy" alt="" className="image-logo" />
          </a>
          <div className="div-block-52">
            <nav role="navigation" className="navbar_menu w-nav-menu">
              <div className="navbar_menu-inner">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className={`nav_link-wrapper ${link.wrapper}`}>
                    <a href={link.href} className="nav_link">
                      {link.label}
                    </a>
                  </div>
                ))}
                <div className="navbar_menu-buttons is-4">
                  <a href={ORDER_ONLINE_URL} className="button is-secondary w-button">
                    Order Online
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="nav_button w-nav-button">
            <div className="hamburger_12_wrap">
              <div className="hamburger_12_line"></div>
              <div className="hamburger_embed w-embed">
                <style dangerouslySetInnerHTML={{ __html: hamburgerStyles }} />
              </div>
              <div className="hamburger_12_line"></div>
              <div className="hamburger_12_line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
