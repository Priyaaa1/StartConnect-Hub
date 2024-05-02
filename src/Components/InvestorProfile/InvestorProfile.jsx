import React from 'react';
import './InvestorProfile.css';

const InvestorProfile = () => {
  const investorData = {
    id: 'INV1234',
    firmName: 'ABC Ventures',
    description: 'We are a venture capital firm specializing in early-stage startups.',
    location: 'New York, USA',
    investmentSize: '$1M - $10M',
    contactInfo: {
      email: 'info@abcventures.com',
      phone: '+1 (123) 456-7890',
      website: 'https://www.abcventures.com',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/company/abcventures',
      twitter: 'https://twitter.com/abcventures',
    },
    riskAppetite: 'Moderate to high',
    fundingCriteria: 'Technology startups with strong growth potential',
    availability: 'Open to new investment opportunities',
  };

  return (
    <div className="investor-profile">
      <h2>Investor Profile</h2>
      <div className="profile-details">
        <p><strong>Investor ID:</strong> {investorData.id}</p>
        <p><strong>Firm Name:</strong> {investorData.firmName}</p>
        <p><strong>Description:</strong> {investorData.description}</p>
        <p><strong>Location:</strong> {investorData.location}</p>
        <p><strong>Investment Size:</strong> {investorData.investmentSize}</p>
        <p><strong>Contact Info:</strong> Email: {investorData.contactInfo.email}, Phone: {investorData.contactInfo.phone}, Website: <a href={investorData.contactInfo.website}>{investorData.contactInfo.website}</a></p>
        <p><strong>Social Media:</strong> LinkedIn: <a href={investorData.socialMedia.linkedin}>LinkedIn</a>, Twitter: <a href={investorData.socialMedia.twitter}>Twitter</a></p>
        <p><strong>Risk Appetite:</strong> {investorData.riskAppetite}</p>
        <p><strong>Funding Criteria:</strong> {investorData.fundingCriteria}</p>
        <p><strong>Availability:</strong> {investorData.availability}</p>
      </div>
    </div>
  );
};

export default InvestorProfile;
