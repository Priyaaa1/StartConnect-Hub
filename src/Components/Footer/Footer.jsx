import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  const scrollToTestimonials = () => {
    scroller.scrollTo("testimonials", {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  const scrollToFAQ = () => {
    scroller.scrollTo("accordian", {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="row">
          <div className="footer-col">
            <div className="needHelpCss">
              <div className="footer-title">Need Help</div>
              <div className="footer-links">
                <div>
                  <NavLink to="/#contact" onClick={scrollToContact}>
                    Contact Us
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#accordian" onClick={scrollToFAQ}>
                    FAQ's
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#tesimonials" onClick={scrollToTestimonials}>
                    Testimonials
                  </NavLink>
                </div>
                <div>Career</div>
                <div>Sitemap</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="companyCss">
              <div className="footer-title">Company</div>
              <div className="footer-links">
                <div>
                  <NavLink to="/#about" onClick={scrollToAbout}>
                    About Us
                  </NavLink>
                </div>
                <div>The StartConnect-Hub Blog</div>
                <div>Collaboration</div>
                <div>Media</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="moreInfoCss">
              <div className="footer-title">More info</div>
              <div className="footer-links">
                <div>Terms and Conditions</div>
                <div>Privacy Policy</div>
                <div>Mission and Vision</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="socialSitesCss">
              <div className="footer-title">let's connect</div>
              <div className="social-icons">
                <div>
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div>
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

      <div className="copyright">
        © {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
