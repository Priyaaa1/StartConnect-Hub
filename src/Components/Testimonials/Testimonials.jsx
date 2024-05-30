import { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Testimonial.css";
function Testimonials() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.querySelector(".card").offsetWidth;

    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    if (
      direction === "right" &&
      carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.scrollLeft = 0;
    } else if (direction === "left" && carousel.scrollLeft === 0) {
      carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };
  return (
    <>
        <div className="wrapper" id="testimonials">
        <h3 class="testimonial_head">TESTIMONIALS</h3>
        <div>
        <i
          id="left"
          className="fa-solid fa-angle-left"
          onClick={() => scrollCarousel("left")}
        ></i>
        <ul className="carousel" ref={carouselRef}>
          <li className="card">
            <div className="img1">
              <img src="user-1.png" alt="img" draggable="false" />
            </div>
            <div className="info">
              <h2>Blanche Pearson</h2>
              <span className="text">
                StartConnectHub transformed my idea into a thriving business
              </span>
            </div>
          </li>
          <li className="card">
            <div className="img1">
              <img src="user-2.png" alt="img" draggable="false" />
            </div>
            <div className="info">
            <h2>Noah</h2>
            <span className="text">
              Connecting with investors was seamless and rewarding.
            </span>
            </div>
          </li>
          
          <li className="card">
            <div className="img">
              <img src="user-3.png" alt="img" draggable="false" />
            </div>
            <div className="info">
            <h2>Mia</h2>
            <span className="text">
              Innovative platform for turning dreams into reality.
            </span>
            </div>
          </li>
          <li className="card">
            <div className="img">
              <img src="user-4.png" alt="img" draggable="false" />
            </div>
            <div className="info">
            <h2>James Khosravi</h2>
            <span className="text">
              Empowering entrepreneurs to achieve their goals
            </span></div>
          </li>
          <li className="card">
            <div className="img">
              <img src="user-5.jpg" alt="img" draggable="false" />
            </div>
            <div className="info">
            <h2>Sophia</h2>
            <span className="text">
              Investors found my next big opportunity here.
            </span></div>
          </li>
          <li className="card">
            <div className="img">
              <img src="user-6.jpg" alt="img" draggable="false" />
            </div>
            <div className="info">
            <h2>Donald Horton</h2>
            <span className="text">
              A community dedicated to shaping the future.
            </span></div>
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
