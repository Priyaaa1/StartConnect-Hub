import React from 'react';
import "./About.css";
import about_img from "../../assets/about1.jpg";
import { useSelector } from 'react-redux';


const About = () => {
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="About Image" className="about-img" data-aos="slide-right" />
      </div>
      <div className="about-right" id="heading" data-aos="slide-left">
        <h2 className={`about-heading ${theme}`}>Bridging the gap between ideas and investments</h2>
        <div className="about-right-div2">
          <p>
            At StartConnectHub, our mission is to create a thriving ecosystem
            where entrepreneurs and investors can come together to turn ideas
            into reality. We understand the challenges that startups face, from
            securing funding to navigating the complexities of the business
            world. With our platform, entrepreneurs can bring their visions to
            life and take their businesses to new heights.
          </p>
          <p>
            Our commitment to fostering innovation and collaboration drives
            everything we do. We believe that by providing the right resources
            and support, we can empower individuals to pursue their passions and
            create lasting change. Whether you're an entrepreneur with a
            groundbreaking idea or an investor looking for the next big
            opportunity, StartConnectHub is here to help you succeed. Join us
            and become part of a community that's dedicated to shaping the
            future of entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

