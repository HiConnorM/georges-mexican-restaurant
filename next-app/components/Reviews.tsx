interface Review {
  heading: string;
  quote: string;
  author: string;
  ratingClass: string;
  image: { src: string; srcSet: string; sizes: string };
}

const REVIEWS: Review[] = [
  {
    heading: "What our customers say",
    quote:
      "“Mrs. Egla makes you feel like George's is your home away from home. It's not like you're just eating at a restaurant, but like you're eating at your aunts house. It's amazing.”",
    author: "– Riley B.",
    ratingClass: "text-primary",
    image: {
      src: "/images/11th.png",
      srcSet: "/images/11th-p-500.png 500w, /images/11th-p-800.png 800w, /images/11th.png 1080w",
      sizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px",
    },
  },
  {
    heading: "What our clients say",
    quote:
      '"A truly exceptional meal! The flavors were perfectly balanced, and each course surprised and delighted us!"',
    author: "– Sarah L.",
    ratingClass: "text-span-3",
    image: {
      src: "/images/3.png",
      srcSet:
        "/images/3-p-500.png 500w, /images/3-p-800.png 800w, /images/3-p-1080.png 1080w, /images/3.png 1440w",
      sizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px",
    },
  },
  {
    heading: "What our clients say",
    quote:
      "“The presentation, taste, and service were outstanding, making it a night to remember. Really recommend!”",
    author: "– Jess D.",
    ratingClass: "text-span-3",
    image: {
      src: "/images/58.png",
      srcSet: "/images/58-p-500.png 500w, /images/58-p-800.png 800w, /images/58.png 1080w",
      sizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px",
    },
  },
];

function Stars() {
  return (
    <div className="stars-wrap">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src="/images/Star-1.svg" loading="lazy" alt="Icon" />
      ))}
    </div>
  );
}

export default function Reviews({ reviews = REVIEWS }: { reviews?: Review[] }) {
  return (
    <section id="Reviews" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div
          data-delay="4000"
          data-animation="cross"
          className="reviews-slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="mask-6 w-slider-mask">
            {reviews.map((review) => (
              <div key={review.author} className="reviews-slider-slide-item w-slide">
                <div className="reviews-slider-item-container">
                  <div className="slider-content-container">
                    <div>
                      <h6>{review.heading}</h6>
                      <p className="review-quote">{review.quote}</p>
                      <p>{review.author}</p>
                    </div>
                    <div className="slider-content-buttons">
                      <Stars />
                      <p className="stars-description">
                        <span className={review.ratingClass}>5.0 /</span> 1,230 reviews
                      </p>
                    </div>
                  </div>
                  <div className="slider-image-container">
                    <img
                      src={review.image.src}
                      loading="lazy"
                      sizes={review.image.sizes}
                      alt=""
                      srcSet={review.image.srcSet}
                      className="reviews-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-left-arrow w-slider-arrow-left">
            <div className="left-arrow-slider"></div>
          </div>
          <div className="slider-right-arrow w-slider-arrow-right">
            <div className="right-arrow-slider"></div>
          </div>
          <div className="slide-nav w-slider-nav w-round"></div>
        </div>
      </div>
    </section>
  );
}
