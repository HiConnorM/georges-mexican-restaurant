import WfPageId from "../components/WfPageId";

export default function NotFound() {
  return (
    <>
      <WfPageId id="6834324a9b3021f11167f798" />
      <div
        data-w-id="d557342f-eb05-abe7-b966-14ad84602e70"
        style={{ opacity: 0 }}
        className="_404-logo-wrapper"
      >
        {/* The export shipped the template's "La Mansa" logo (Group-1.svg) here;
            swapped for George's actual logo. */}
        <a href="/" className="_404-logo w-nav-brand">
          <img src="/images/Untitled-design-3.svg" loading="lazy" alt="George's Mexican Restaurant" height={48} className="image-logo-404" />
        </a>
      </div>
      <div className="utility-page-wrap">
        <div
          data-w-id="5eff3932-b145-52df-9c43-a03c9901f096"
          style={{ opacity: 0 }}
          className="_404-content-wrapper"
        >
          <div className="_404-numbers">404</div>
          <h2 className="text-center">Something’s not right.</h2>
          <p className="_404-paragraph">We can’t find the page your are looking for. </p>
          <a href="/" className="primary-button">
            Back to homepage
          </a>
        </div>
      </div>
    </>
  );
}
