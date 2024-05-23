import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="/aboutus">
              <i className="fas fa-users"></i> About Us
            </a>
          </li>
          <li>
            <Link to="/howitworks">
              <i className="fas fa-lightbulb"></i> How it Works
            </Link>
          </li>
          <li>
            <a href="/faq">
              <i className="fas fa-question"></i> FAQ
            </a>
          </li>
          <li>
            <a href="/#contact">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="/blog">
              <i className="fas fa-newspaper"></i> Blog
            </a>
          </li>
          <li>
            <a href="/visionandmission">
              <i className="fas fa-eye"></i> Vision & Mission
            </a>
          </li>
          <li>
            <Link to="/privacypolicy">
              <i className="fas fa-lock"></i> Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/termsandconditions">
              <i className="fas fa-file-contract"></i> Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <ul className="social-media-links">
          <li>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <span className="copyright">
        © 2024 StartConnect-Hub. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
