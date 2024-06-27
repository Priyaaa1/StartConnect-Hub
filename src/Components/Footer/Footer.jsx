import { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  const handleNavigation = (path, section) => {
    navigate(path);
    setTimeout(() => scrollToSection(section), 0);
  };

  return (
    <div className="footer">
      <div className="footer-container footer-container-md">
        <div className="footer-1">
          <div className="footer-title">Start Connect hub</div>
        </div>
        <div className="footer-half footer-sections">
          <div className="footer-2">
            <p className="footer-section-title">Company</p>
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#about", "about")}>
                  About Us
                </a>
              </li>
              <li className="footer-link">Blogs</li>
              <a
                href="https://github.com/Priyaaa1/StartConnect-Hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="footer-link">Collaboration</li>
              </a>
              <li className="footer-link">Media</li>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">Need Help</p>
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#contact", "contact")}>
                  Contact Us
                </a>
              </li>
              <li className="footer-link">
                <a
                  onClick={() =>
                    handleNavigation("/#testimonials", "testimonials")
                  }
                >
                  Testimonials
                </a>
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#accordian", "accordian")}>
                  FAQ
                </a>
              </li>
              <li className="footer-link">
                <a
                  onClick={() => handleNavigation("/howitworks", "howitworks")}
                >
                  How it Works
                </a>
              </li>
              <NavLink to="/feedback">
                <li className="footer-link">Feedback</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">More Info</p>
            <ul className="footer-links">
              <NavLink to="/privacypolicy">
                <li className="footer-link">Privacy Policy</li>
              </NavLink>
              <NavLink to="/termsandconditions">
                <li className="footer-link">Terms & Conditions</li>
              </NavLink>
              <NavLink to="/licensing">
                <li className="footer-link">Licensing</li>
              </NavLink>
              <NavLink to="/visionandmission">
                <li className="footer-link">Vision and Mission</li>
              </NavLink>
              <li className="footer-link">Career</li>
            </ul>
          </div>

          <div className="footer-2">
            <p className="footer-section-title">Let's Connect</p>
            <div className="footer-icons footer-icons-md">
              <a
                href="https://linkedin.com/yourpage"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" style={{ fontSize: "25px" }} />
              </a>
              <a
                href="https://github.com/Priyaaa1/StartConnect-Hub"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook" style={{ fontSize: "25px" }} />
              </a>
              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  class="fa-brands fa-x-twitter"
                  style={{ fontSize: "25px" }}
                />
              </a>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-link">
          &copy; 2024 StartConnect-Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
