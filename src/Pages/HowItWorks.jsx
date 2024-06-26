import {React,useEffect} from 'react';
import styled from 'styled-components';


const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HowItWorksWrapper>
      <section>
        <h1>How It Works</h1>
        <p>Welcome to StartConnect-Hub! Our platform is designed to streamline the process of connecting startups with investors. Here's a step-by-step guide on how our platform works:</p>
      </section>
      <section>
        <h2>For Startups</h2>
        <ol>
          <li>
            <strong>Sign Up:</strong> Create an account on StartConnect-Hub by providing basic information about your startup. Once registered, you can complete your profile with detailed information about your team, product, market, and financials.
          </li>
          <li>
            <strong>Create a Pitch:</strong> Use our tools to create a compelling pitch for your startup. Highlight your unique value proposition, market opportunity, business model, and growth potential. You can also upload videos, presentations, and other supporting materials.
          </li>
          <li>
            <strong>Get Discovered:</strong> Our advanced matching algorithms and search functionalities ensure that your startup gets discovered by investors who are looking for opportunities in your industry and stage of development.
          </li>
          <li>
            <strong>Engage with Investors:</strong> Receive inquiries and investment proposals from interested investors. You can communicate directly through our platform to schedule meetings, negotiate terms, and discuss potential partnerships.
          </li>
          <li>
            <strong>Secure Funding:</strong> Once you've reached an agreement, you can finalize the investment through our secure platform. We provide the necessary tools to manage and document the investment process.
          </li>
        </ol>
      </section>
      <section>
        <h2>For Investors</h2>
        <ol>
          <li>
            <strong>Sign Up:</strong> Create an investor account on StartConnect-Hub. Provide details about your investment preferences, including industries, stages, and investment size.
          </li>
          <li>
            <strong>Explore Opportunities:</strong> Browse through a curated list of startups that match your investment criteria. Use filters and search options to find startups that align with your interests.
          </li>
          <li>
            <strong>Evaluate Startups:</strong> Access detailed information about each startup, including pitch materials, financial data, and team profiles. You can also view their engagement metrics and growth potential.
          </li>
          <li>
            <strong>Initiate Contact:</strong> Express your interest in a startup by sending a message or a formal investment proposal through our platform. Schedule meetings and discussions to learn more about the startup's vision and goals.
          </li>
          <li>
            <strong>Invest:</strong> Once you've decided to invest, you can complete the transaction through our secure platform. We provide the necessary tools to manage the investment process and ensure transparency.
          </li>
        </ol>
      </section>
      <section>
        <h2>Platform Features</h2>
        <ul>
          <li>
            <strong>Advanced Matching:</strong> Our algorithms match startups with the most suitable investors based on their profiles and preferences.
          </li>
          <li>
            <strong>Secure Communication:</strong> All communications between startups and investors are encrypted and secure, ensuring privacy and confidentiality.
          </li>
          <li>
            <strong>Comprehensive Profiles:</strong> Both startups and investors can create detailed profiles that showcase their strengths, goals, and requirements.
          </li>
          <li>
            <strong>Resource Center:</strong> Access a wealth of resources, including articles, webinars, and tools, to help you navigate the startup and investment landscape.
          </li>
          <li>
            <strong>Analytics and Insights:</strong> Gain valuable insights into market trends, investment opportunities, and startup performance through our analytics tools.
          </li>
        </ul>
      </section>
      <section>
        <h2>Get Started Today!</h2>
        <p>Join StartConnect-Hub and become part of a thriving community of entrepreneurs and investors. Whether you're looking to fund your startup or find the next big investment opportunity, our platform provides the tools and support you need to succeed.</p>
      </section>
    </HowItWorksWrapper>
  );
};

const HowItWorksWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-top: 80px;
  }

  strong {
    color:rgb(84,114,228);
  }

  h2 {
    font-size: 2rem;
    margin-top: 20px;
    justify-content: left;
    padding: 0;
    margin-top: 0px;
  }

  p {
    margin: 10px 0;
    text-align: left;
  }

  ol, ul {
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }

  section {
    margin-bottom: 0px;
  }
`;

export default HowItWorks;
