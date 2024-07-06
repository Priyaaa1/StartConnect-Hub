import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h2`
  color: #333;
`;

const Image = styled.img`
  align-items: center;
  width: 200px;
  border-radius: 50% ;
`;

const button = styled.button`
  background-color: #ff6600;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
`;

const InvestLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const SectionHeading = styled.h3`
  color: #555;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const HopePhoenix = () => {
  return (
    <Content>
      <Heading>Welcome To Hope Phoenix!</Heading>
      <Image src="project-4.jpg" alt="Hope Phoenix" className="logImg" />
      <br />
      <button className="invest">
        <InvestLink href="#">Invest</InvestLink>
      </button>
      <br />
      <SectionHeading>Problem We Solve</SectionHeading>
      <p>
        Traditional gift-giving often lacks personalization and impact, while many artisans struggle to reach a
        broader market. Hope Phoenix is a socially conscious startup dedicated to revolutionizing the gifting
        experience while supporting artisans and charitable causes worldwide.
      </p>
      <br />
      <SectionHeading>Target Customers</SectionHeading>
      <p>
        Our target customers include socially conscious consumers, gift-givers seeking unique and thoughtful
        presents, and individuals passionate about supporting artisans and charitable causes.
      </p>
      <br />
      <SectionHeading>Description</SectionHeading>
      <p>We offer a range of products and services, including:</p>
      <List>
        <li>Curated gift boxes featuring handmade artisanal items from around the world</li>
        <li>Customizable gift options, allowing customers to personalize their selections</li>
        <li>Subscription-based gift box services for recurring gifting needs</li>
        <li>
          Collaboration with nonprofits and charities, with a portion of proceeds donated to support their
          missions
        </li>
        <li>Virtual gifting experiences and digital gift cards for remote celebrations</li>
      </List>
      <br />

      <SectionHeading>Meet the Founders</SectionHeading>
      <List>
        <li>
          Sumitra Kaul - Founder and CEO, with a background in social entrepreneurship and a passion for
          supporting artisans and nonprofits.
        </li>
        <li>
          JankiBen - Co-founder and COO, an experienced business strategist with expertise in supply chain
          management and sustainable sourcing.
        </li>
      </List>
      <br />
      <SectionHeading>Risks and Challenges</SectionHeading>
      <p>
        Key risks and challenges include sourcing high-quality artisanal products, maintaining ethical and
        sustainable supply chains, competing with established gift retailers, and effectively communicating our brand values to consumers.
      </p>
      <br />
      <SectionHeading>Milestones</SectionHeading>
      <List>
        <li>Launch of Hope Phoenix website and online store</li>
        <li>Establishment of partnerships with artisan cooperatives and charitable organizations</li>
        <li>Expansion of product offerings and customization options based on customer feedback</li>
        <li>
          Recognition in media and industry publications for our innovative approach to gifting and social impact
        </li>
        <li>
          Impact assessment reports showcasing the positive outcomes of our partnerships and charitable
          contributions
        </li>
      </List>
      
    </Content>
  );
};

export default HopePhoenix;
