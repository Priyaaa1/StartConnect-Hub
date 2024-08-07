import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    setLastUpdatedDate(formattedDate);
  }, []);

  return (
    <PolicyWrapper>
      <div>
        <h1>Privacy Policy</h1>
        <section>
          <p>Last updated: {lastUpdatedDate}</p>
          <p>Welcome to StartConnect Hub! We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices regarding your personal information, please contact us at <a href="mailto:startconnecthub@gmail.com"> startconnecthub@gmail.com</a>.</p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>We collect personal information that you provide to us, such as your name, email address, profile information, and any other information you choose to provide when registering for our services, creating or updating your profile, or interacting with our platform.</p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>We use personal information collected via our platform for a variety of business purposes described below. We process your personal information for these purposes based on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <ul>
            <li><strong>To provide and maintain our services:</strong> We use your information to provide you with the services you request, including maintaining your user profile and facilitating connections between startups and investors.</li>
            <li><strong>To improve our services:</strong> We analyze how users interact with our platform to improve our services and develop new features.</li>
            <li><strong>To communicate with you:</strong> We may send you updates, newsletters, and other information about your account or our services.</li>
            <li><strong>To comply with legal obligations:</strong> We may process your data to comply with legal requirements or respond to lawful requests from public authorities.</li>
          </ul>
        </section>
        <section>
          <h2>Sharing Your Information</h2>
          <p>We may process or share your data based on the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
          </ul>
        </section>
        <section>
          <h2>Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </section>
        <section>
          <h2>Your Data Protection Rights</h2>
          <p>You have certain rights under data protection laws regarding your personal information. These may include the right to access, correct, update, or delete your personal information. If you wish to exercise any of these rights, please contact us at <a href="mailto:startconnecthub@gmail.com"> startconnecthub@gmail.com</a>.</p>
        </section>
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of our platform after any such changes constitutes your acceptance of the new terms.</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or comments about this policy, you may email us at <a href="mailto:startconnecthub@gmail.com"> startconnecthub@gmail.com</a></p>
        </section>
      </div>
    </PolicyWrapper>
  );
};

  // color: #333;
const PolicyWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-top: 80px;
  }

  h2 {
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: left;
    margin-bottom: 15px;
  }

  p {
    margin: 10px 0;
    text-align: left;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }
`;

export default PrivacyPolicy;
