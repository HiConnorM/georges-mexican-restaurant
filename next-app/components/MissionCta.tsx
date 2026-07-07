export default function MissionCta() {
  return (
    <section className="section without-space">
      <div className="w-layout-blockcontainer base-container w-container">
        <div
          data-w-id="70765cde-bf07-f347-a7fc-25be95b01ef6"
          style={{ opacity: 0 }}
          className="mission-wrapper"
        >
          <img
            src="/images/June-2025-2.webp"
            loading="lazy"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            srcSet="/images/June-2025-2-p-500.webp 500w, /images/June-2025-2-p-800.webp 800w, /images/June-2025-2.webp 1080w"
            alt=""
            className="image-mission"
          />
          <div className="mission-overlay"></div>
          <div className="mission-content-wrapper">
            <img
              src="/images/scarf_edited-1.avif"
              loading="lazy"
              width={216}
              alt=""
              className="logo-image-mission"
            />
            <div className="mission-text-content">
              <h2 className="text-light">
                Our mission is to bring people together through the joy of food.
              </h2>
              <p className="paragraph-mission">
                We are dedicated to crafting memorable dining experiences that celebrate authentic
                flavors, fresh ingredients, and culinary artistry.
              </p>
              <a href="/reservations" className="primary-button-light w-button">
                Book a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
