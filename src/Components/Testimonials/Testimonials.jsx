import { useRef, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Testimonial.css";
import { useSelector } from 'react-redux';

function Testimonials() {
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";
  const cardTheme = useSelector((state) => state.theme.value) ? "cardTheme-dark" : "light";
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = Array.from(carousel.children);

    // Clone items for infinite scroll
    items.forEach(item => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    // Adjust scroll position
    const adjustScroll = () => {
      carousel.scrollLeft = carousel.scrollWidth / 2;
    };

    adjustScroll();

    const autoSlideInterval = setInterval(() => {
      const cardWidth = carousel.querySelector(".card").offsetWidth;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft + carousel.clientWidth >= maxScrollLeft) {
        carousel.scrollLeft = carousel.scrollWidth / 2 - cardWidth; // Smooth transition
      } else {
        carousel.scrollLeft += cardWidth;
      }
    }, 3000);

    const handleScroll = () => {
      const cardWidth = carousel.querySelector(".card").offsetWidth;
      const maxScrollLeft = carousel.scrollWidth / 2 - cardWidth;

      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth / 2;
      } else if (carousel.scrollLeft >= maxScrollLeft) {
        carousel.scrollLeft = 0;
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(autoSlideInterval);
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.querySelector(".card").offsetWidth;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    carousel.scrollLeft += scrollAmount;
  };

  return (
    <>
      <div className={`wrapper ${theme}`} id="testimonials">
        <h3 className="testimonial_head">TESTIMONIALS</h3>
        <div>
          <i
            id="left"
            className="fa-solid fa-angle-left"
            onClick={() => scrollCarousel("left")}
          ></i>
          <ul className="carousel" ref={carouselRef}>
            <li className={`card ${cardTheme}`}>
              <div className="img1">
                <img src="user-1.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Blanche Pearson</h2>
                <span className="text">
                  StartConnectHub transformed my idea into a thriving business. The platform provided the perfect blend of resources and networking opportunities.StartConnectHub's intuitive interface and supportive community.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img1">
                <img src="user-2.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Noah</h2>
                <span className="text">
                  Connecting with investors was seamless and rewarding. Thanks to StartConnectHub, I found the perfect partner who believed in my vision and helped me scale my startup to new heights.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-3.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Mia</h2>
                <span className="text">
                  Innovative platform for turning dreams into reality. StartConnectHub's intuitive interface and supportive community made it easy for me to navigate the startup ecosystem and find success.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-4.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>James Khosravi</h2>
                <span className="text">
                  Empowering entrepreneurs to achieve their goals. StartConnectHub provided the tools and connections I needed to take my startup from an idea to a fully operational business.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-5.jpg" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Sophia</h2>
                <span className="text">
                  Investors found my next big opportunity here. StartConnectHub made it possible to connect with the right people at the right time, leading to successful partnerships that have driven.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-6.jpg" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Donald Horton</h2>
                <span className="text">
                  A community dedicated to shaping the future. StartConnectHub is more than just a platform; it's a vibrant community of innovators and investors working together to create the next generation of successful startups.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-4.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Ella Richardson</h2>
                <span className="text">
                  StartConnectHub provided me with invaluable mentorship and guidance, helping me avoid common pitfalls and fast-track my startup's growth.
                </span>
              </div>
            </li>
            <li className={`card ${cardTheme}`}>
              <div className="img">
                <img src="user-1.png" alt="img" draggable="false" />
              </div>
              <div className="info">
                <h2>Liam Bennett</h2>
                <span className="text">
                  The networking opportunities on StartConnectHub are unmatched. I was able to connect with industry leaders who provided crucial insights and support for my startup.
                </span>
              </div>
            </li>
          </ul>
          <i
            id="right"
            className="fa-solid fa-angle-right"
            onClick={() => scrollCarousel("right")}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
