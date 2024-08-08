import { React, useEffect } from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaBullhorn } from 'react-icons/fa';
import visionImage from '../assets/vision.png';
import missionImage from '../assets/mission.jpg';

const VisionAndMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <VisionMissionWrapper>
      <section>
        <ContentWrapper>
          <ImageWrapper>
            <img src={visionImage} alt="Vision" />
          </ImageWrapper>
          <TextWrapper>
            <HeadingWithIcon>
              <FaLightbulb className="icon" />
              <h1>Our Vision</h1>
            </HeadingWithIcon>
            <p>
              At StartConnect-Hub, our vision is to be the premier platform that connects innovative startups with visionary investors globally. We aim to cultivate a dynamic and supportive ecosystem where groundbreaking ideas can flourish and lead to transformative change.
            </p>
            <p>
              By providing unparalleled access to resources, mentorship, and investment opportunities, we strive to empower entrepreneurs to realize their full potential and drive economic growth and innovation.
            </p>
            <p>
              We envision a future where every startup has the opportunity to succeed, regardless of geographical location, and where investors can seamlessly discover and support projects that align with their values and goals.
            </p>
            <p>
              Our platform will be the catalyst for a more inclusive and diverse entrepreneurial landscape, fostering a community where creativity and ambition are the driving forces.
            </p>
          </TextWrapper>
        </ContentWrapper>
      </section>
      <section>
        <ContentWrapper>
          <TextWrapper>
            <HeadingWithIcon>
              <FaBullhorn className="icon" />
              <h1>Our Mission</h1>
            </HeadingWithIcon>
            <p>
              Our mission is to bridge the gap between startups and investors by providing a comprehensive platform that fosters collaboration, innovation, and growth.
            </p>
            <p>
              We are committed to supporting startups at every stage of their journey by offering resources, connections, and tools they need to succeed.
            </p>
            <p>
              For investors, we strive to provide access to a diverse portfolio of promising startups, enabling them to make informed investment decisions.
            </p>
          </TextWrapper>
          <ImageWrapper>
            <img src={missionImage} alt="Mission" />
          </ImageWrapper>
        </ContentWrapper>
      </section>
    </VisionMissionWrapper>
  );
};

const VisionMissionWrapper = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Outfit', sans-serif;
  background: var(--background); /* Use CSS variable for background */
  color: var(--text-color); /* Use CSS variable for text color */
  
  section {
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 8px;
    background: var(--section-background); /* Use CSS variable for section background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    margin-top: 80px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
    }
  }
`;

const HeadingWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the heading */
  margin-bottom: 20px;
  text-align: center;

  h1 {
    font-size: 2.4rem;
    margin-left: 15px;
    font-weight: 700;
    color: var(--heading-color); /* Use CSS variable for heading color */
  }

  .icon {
    font-size: 2.4rem;
    color: var(--icon-color); /* Use CSS variable for icon color */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TextWrapper = styled.div`
  flex: 2;

  p {
    background: var(--paragraph-background); /* Use CSS variable for paragraph background */
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    text-align: justify;
  }
`;

export default VisionAndMission;
