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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            letterSpacing: 0.5,
          }}
        >
          <div className="footer-col">
            <div className="needHelpCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" , marginTop: 15}}>
                Need Help
              </div>
              <div style={{ marginTop: 10 }}>
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
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                Company
              </div>
{/* <div> */}
              <div style={{ marginTop: 10 }}>
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
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                More info
              </div>

              <div style={{ marginTop: 10 }}>
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
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                let's connect
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
                    rel="noopener noreferrer" className="facebook"
                  >
                    <i className="fab fa-facebook" style={{fontSize:"25px"}}></i>
                  </a>
                </div>

                <div>
                  {" "}
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="twitter"
                  >
                    <i ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></i>
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="https://linkedin.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="linkedin"
                  >
                    <i className="fab fa-linkedin" style={{fontSize:"25px"}}></i>
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="https://instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer" className="instagram"
                  >
                    <i className="fab fa-instagram" style={{fontSize:"25px"}}></i>
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
