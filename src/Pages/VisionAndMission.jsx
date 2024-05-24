import React from 'react';
import styled from 'styled-components';

const VisionAndMission = () => {
  return (
    <VisionMissionWrapper>
      <section>
        <h1>Our Vision</h1>
        <p>
          At StartConnect-Hub, our vision is to be the premier platform that connects innovative startups with visionary investors globally. We aim to cultivate a dynamic and supportive ecosystem where groundbreaking ideas can flourish and lead to transformative change. By providing unparalleled access to resources, mentorship, and investment opportunities, we strive to empower entrepreneurs to realize their full potential and drive economic growth and innovation.
        </p>
        <p>
          We envision a future where every startup has the opportunity to succeed, regardless of geographical location, and where investors can seamlessly discover and support projects that align with their values and goals. Our platform will be the catalyst for a more inclusive and diverse entrepreneurial landscape, fostering a community where creativity and ambition are the driving forces.
        </p>
      </section>
      <section>
        <h1>Our Mission</h1>
        <p>
          Our mission is to bridge the gap between startups and investors by
          providing a comprehensive platform that fosters collaboration,
          innovation, and growth. We are committed to supporting startups at
          every stage of their journey by offering resources, connections, and
          tools they need to succeed. For investors, we strive to provide access
          to a diverse portfolio of promising startups, enabling them to make
          informed investment decisions.
        </p>
      </section>
    </VisionMissionWrapper>
  );
};

const VisionMissionWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-top: 80px;
    color: #000080;
  }

  p {
    margin: 10px 0;
    text-align: left;
    
  }

  section {
    margin-bottom: 40px;
  }
`;

export default VisionAndMission;
