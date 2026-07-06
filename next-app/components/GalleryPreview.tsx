interface GallerySlide {
  linkClass: string;
  src: string;
  srcSet: string;
  sizes: string;
  lightbox: {
    _id: string;
    fileName: string;
    fileSize: number;
    width: number;
    height: number;
  };
}

const SLIDES: GallerySlide[] = [
  {
    linkClass: "lightbox-link-slide-1",
    src: "/images/OSWALD.png",
    srcSet:
      "/images/OSWALD-p-500.png 500w, /images/OSWALD-p-800.png 800w, /images/OSWALD-p-1080.png 1080w, /images/OSWALD.png 1366w",
    sizes: "100vw",
    lightbox: { _id: "672ca1fd3227aecb6d6740bb", fileName: "OSWALD.png", fileSize: 2430305, width: 1366, height: 768 },
  },
  {
    linkClass: "lightbox-link-slide-2",
    src: "/images/OSWALD-1.png",
    srcSet:
      "/images/OSWALD-1-p-500.png 500w, /images/OSWALD-1-p-800.png 800w, /images/OSWALD-1-p-1080.png 1080w, /images/OSWALD-1.png 1366w",
    sizes: "100vw",
    lightbox: { _id: "672ca1fe14f7d1012d656e10", fileName: "OSWALD-1.png", fileSize: 2188221, width: 1366, height: 768 },
  },
  {
    linkClass: "lightbox-link-slide-3",
    src: "/images/Georges-Website-7.png",
    srcSet:
      "/images/Georges-Website-7-p-500.png 500w, /images/Georges-Website-7-p-800.png 800w, /images/Georges-Website-7-p-1080.png 1080w, /images/Georges-Website-7-p-1600.png 1600w, /images/Georges-Website-7.png 1821w",
    sizes: "100vw",
    lightbox: { _id: "672ca1fff52419d567949b7e", fileName: "Georges-Website-7.png", fileSize: 3389842, width: 1821, height: 960 },
  },
  {
    linkClass: "lightbox-link-slide-4",
    src: "/images/3.png",
    srcSet:
      "/images/3-p-500.png 500w, /images/3-p-800.png 800w, /images/3-p-1080.png 1080w, /images/3.png 1440w",
    sizes: "(max-width: 1439px) 100vw, 1440px",
    lightbox: { _id: "672ca1fd8899ecbc4bd74dce", fileName: "3.png", fileSize: 2391068, width: 1440, height: 810 },
  },
  {
    linkClass: "lightbox-link-slide-5",
    src: "/images/Georges-Website-5.png",
    srcSet:
      "/images/Georges-Website-5-p-500.png 500w, /images/Georges-Website-5-p-800.png 800w, /images/Georges-Website-5-p-1080.png 1080w, /images/Georges-Website-5-p-1600.png 1600w, /images/Georges-Website-5.png 1708w",
    sizes: "100vw",
    lightbox: { _id: "672ca1fd3a73d79af28d8f00", fileName: "Georges-Website-5.png", fileSize: 3947975, width: 1708, height: 1003 },
  },
];

/** Autoplaying gallery slider. Each slide opens a Webflow lightbox whose
 *  config lives in the embedded w-json script tag (read by webflow.js). */
export default function GalleryPreview({ slides = SLIDES }: { slides?: GallerySlide[] }) {
  return (
    <section id="Gallery" className="section without-bottom-spacing">
      <div className="gallery-title-wrapper">
        <div
          data-w-id="ba1fc44e-bb42-4bba-5453-d03e162eb646"
          style={{ opacity: 0 }}
          className="gallery-title"
        >
          Gallery.
        </div>
      </div>
      <div
        data-w-id="22b42323-16df-581c-ecc4-b33231ba109c"
        style={{ opacity: 0 }}
        className="slider-gallery-wrap"
      >
        <div
          data-delay="10"
          data-animation="slide"
          className="slider-gallery w-slider"
          data-autoplay="true"
          data-easing="ease-out-expo"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="1"
          data-nav-spacing="3"
          data-duration="1800"
          data-infinite="true"
        >
          <div className="mask-gallery w-slider-mask">
            {slides.map((slide) => (
              <div key={slide.lightbox._id} className="slide w-slide">
                <a href="#" className={`${slide.linkClass} w-inline-block w-lightbox`}>
                  <img
                    src={slide.src}
                    loading="lazy"
                    sizes={slide.sizes}
                    srcSet={slide.srcSet}
                    alt=""
                    className="gallery-image-lightbox"
                  />
                  <script
                    type="application/json"
                    className="w-json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        items: [
                          {
                            _id: slide.lightbox._id,
                            origFileName: slide.lightbox.fileName,
                            fileName: slide.lightbox.fileName,
                            fileSize: slide.lightbox.fileSize,
                            height: slide.lightbox.height,
                            url: slide.src.replace(/^\//, ""),
                            width: slide.lightbox.width,
                            type: "image",
                          },
                        ],
                        group: "Gallery",
                      }),
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="left-arrow-gallery w-slider-arrow-left">
            <div className="right-arrow-slider-gallery"></div>
          </div>
          <div className="right-arrow-gallery w-slider-arrow-right">
            <div className="right-arrow-slider-gallery"></div>
          </div>
          <div className="slide-navigation w-slider-nav w-round"></div>
        </div>
      </div>
    </section>
  );
}
