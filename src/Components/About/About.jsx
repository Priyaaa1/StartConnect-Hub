import React from "react";
import communityGif from '../../assets/about-community.gif';
import missionImg from '../../assets/about-ourmission.jpg';
import thirdGif from '../../assets/about-third.gif';
import "./About.css";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";

  return (
    <div className={`about ${theme}`} id="about">
      <div className="about-content">
        <div className="about-heading-container" data-aos="fade-up">
          <h2 className="about-heading">About StarConnect</h2>
          <p className="about-subtitle">
            Bridging the gap between ideas and investments
          </p>
        </div>

        <div className="about-sections">
          <div className="about-section" data-aos="fade-right">
            <div className="about-image-container">
              <img
                /*src="src/assets/about-ourmission.jpg"*/
                src={missionImg}
                alt="Mission"
                className="about-img"
              />
            </div>
            <div className="about-text-container">
              <h3>Our Mission</h3>
              <p>
                At StartConnectHub, our mission is to create a thriving ecosystem
                where entrepreneurs and investors can come together to turn ideas
                into reality. We understand the challenges that startups face,
                from securing funding to navigating the complexities of the
                business world. With our platform, entrepreneurs can bring their
                visions to life and take their businesses to new heights.
              </p>
            </div>
          </div>

          <div className="about-section" data-aos="fade-left">
          <div className="about-image-container">
              <img
                /*src="src/assets/about-community.gif"*/
                src={communityGif}
                alt="Commitment"
                className="about-img"
              />
            </div>
            <div className="about-text-container">
              <h3>Our Commitment</h3>
              <p>
                Our commitment to fostering innovation and collaboration drives
                everything we do. We believe that by providing the right resources
                and support, we can empower individuals to pursue their passions
                and create lasting change. Whether you're an entrepreneur with a
                groundbreaking idea or an investor looking for the next big
                opportunity, StartConnectHub is here to help you succeed.
              </p>
            </div>
          </div>

          <div className="about-section" data-aos="fade-up">
            <div className="about-image-container">
              <img
              /*src="src/assets/about-third.gif"*/
                src={thirdGif}
                alt="Community"
                className="about-img"
              />
            </div>
            <br />
            <div className="about-text-container">
              <h3>Join Our Community</h3>
              <p>
                Join us and become part of a community that's dedicated to shaping
                the future of entrepreneurship. Together, we can bridge the gap
                between ideas and investments and create a brighter future for
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
