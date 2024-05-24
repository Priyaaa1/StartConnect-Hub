import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../../App";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <NavLink to="/about">
              <i className="fas fa-users"></i> About us
            </NavLink>
          </li>
          <li>
          <NavLink to="/howitworks">
              <i className="fas fa-lightbulb"></i> How it Works 
          </NavLink>
          </li>
          <li>
          <NavLink to="/faq">
              <i className="fas fa-question"></i> FAQ
          </NavLink>
          </li>
          <li>
          <NavLink to="/contactus">
              <i className="fas fa-envelope"></i> Contact us
          </NavLink>
          </li>
          <li>
          <NavLink to="/blog">
              <i className="fas fa-newspaper"></i> Blog
          </NavLink>
          </li>
          <li>
          <NavLink to="/Vision and mission">
              <i className="fas fa-eye"></i> Vision & Mission
          </NavLink>
          </li>
          <li>
          <NavLink to="/Privacy Policy">
              <i className="fas fa-lock"></i> Privacy Policy
          </NavLink>
          </li>
          <li>
          <NavLink to="/Terms and Conditions">
              <i className="fas fa-file-contract"></i> Terms & Conditions
          </NavLink>
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
              <i className="fab fa-twitter"></i>
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
      <span className="copyright">© 2024 StartConnect-Hub. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
