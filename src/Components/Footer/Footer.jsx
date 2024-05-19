import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            letterSpacing: 0.5,
          }}
        >
          <div className="footer-col">
            <div className="needHelpCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                Need Help
              </div>
              <div style={{ marginTop: 10 }}>
                <div>Contact us</div>
                <div>FAQ's</div>
                <div>Career</div>
                <div>Sitemap</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="companyCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                Company
              </div>

              <div style={{ marginTop: 10 }}>
                <div>About us</div>
                <div>The StartConnect-Hub Blog</div>
                <div>Collaboration</div>
                <div>Media</div>
                
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="moreInfoCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                More info
              </div>

              <div style={{ marginTop: 10 }}>
                <div>Terms and Conditions</div>
                <div>Privacy Policy</div>
                <div>Mission and Vision</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="socialSitesCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                lets be friends
              </div>
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "space-around",
                  width: "50%",
                }}
              >
                <div>
                  {" "}
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>

                <div>
                  {" "}
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="https://linkedin.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="https://instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="/about-us">
              <i className="fas fa-users"></i> About Us
            </a>
          </li>
          <li>
            <a href="/how-it-works">
              <i className="fas fa-lightbulb"></i> How it Works
            </a>
          </li>
          <li>
            <a href="/faq">
              <i className="fas fa-question"></i> FAQ
            </a>
          </li>
          <li>
            <a href="/contact">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </li>
          <li>
            <a href="/blog">
              <i className="fas fa-newspaper"></i> Blog
            </a>
          </li>
          <li>
            <a href="/vision-mission">
              <i className="fas fa-eye"></i> Vision & Mission
            </a>
          </li>
          <li>
            <a href="/privacy-policy">
              <i className="fas fa-lock"></i> Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-conditions">
              <i className="fas fa-file-contract"></i> Terms & Conditions
            </a>
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
      */}
      <span
        className="copyright"
        
      >
        © 2024 StartConnect-Hub. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
