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
        <div
          className="row"
        >
          <div className="footer-col">
            <div className="needHelpCss">
              <div className="footer-section-title" >
                Need Help
              </div>
              <div className="footer-section-list" >
                <div>
                  <NavLink to="/#contact" onClick={() => scrollToContact()}>
                      Contact Us
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#accordian" onClick={() => scrollToFAQ()}>
                    FAQ's
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#tesimonials" onClick={() => scrollToTestimonials()}>
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
              <div className="footer-section-title" >
                Company
              </div>
              <div className="footer-section-list" >
                <div>
                <NavLink to="/#about" onClick={() => scrollToAbout()}>
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
              <div className="footer-section-title" >
                More info
              </div>

              <div className="footer-section-list" >
                <div><NavLink to="/termsandconditions">
                Terms and Conditions
                </NavLink>
                 </div>
                <div>
                  <NavLink to ="/privacypolicy">Privacy Policy</NavLink></div>
                <div>
                  <NavLink to="/visionandmission">Mission and Vision</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="socialSitesCss">
              <div className="footer-section-title">
                let's connect
              </div>
              <div className="social-sites-list">
                <div>
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="facebook"
                  >
                    <i className="fab fa-facebook icon-styles" ></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="twitter"
                  >
                    <i className="icon-styles"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="linkedin"
                  >
                    <i className="fab fa-linkedin icon-styles" ></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="instagram"
                  >
                    <i className="fab fa-instagram icon-styles"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="copyright">
        © {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
