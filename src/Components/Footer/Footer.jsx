import { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo2.png";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Visitors from "../Visitors";
import { AiFillHome, AiFillInfoCircle, AiFillPhone, AiFillQuestionCircle, AiFillLock, AiFillFileText } from "react-icons/ai";
import { BiBook, BiSupport, BiCommentDetail, BiBriefcase, BiGroup } from "react-icons/bi";
import GoogleTranslateComponent from "../GoogleTranslate/GoogleTranslate";

const Footer = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    

    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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

  const SubscriptionForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage("Thank you for subscribing!");
      setEmail("");
    };

    return (
      <div className="subscription-form">
        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="subscription-message">{message}</p>}
      </div>
    );
  };

  return (
    <div className="footer">
      <div className="footer-container footer-container-md">
        <div className="footer-1">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="Start Connect hub logo" className="footer-logo" />
            </a>
          </div>
          <div className="footer-title">Start Connect hub</div>
          <a href="https://github.com/Priyaaa1/StartConnect-Hub" className="star-us">Star us ⭐</a>
          <div className="footer-text">
            <Visitors />
          </div>
        </div>
        <div className="footer-half footer-sections">
          <div className="footer-2">
            <p className="footer-section-title">Company</p>
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#about", "about")}><AiFillInfoCircle className="footer-icon" /> About Us</a>
              </li>
              <NavLink to="/blogs">
                <li className="footer-link"><BiBook className="footer-icon" /> Blogs</li>
              </NavLink>
              <a href="https://github.com/Priyaaa1/StartConnect-Hub" target="_blank" rel="noopener noreferrer">
                <li className="footer-link"><BiSupport className="footer-icon" /> Collaboration</li>
              </a>
              <li className="footer-link"><AiFillPhone className="footer-icon" /> Media</li>
            </ul>



            {/* <div id="translate-container">
              <div id="google_translate_element"></div>
            </div> */}
            <GoogleTranslateComponent />



          </div>
          <div className="footer-2">
            <p className="footer-section-title">Need Help</p>
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#contact", "contact")}><AiFillPhone className="footer-icon" /> Contact Us</a>
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#testimonials", "testimonials")}><BiCommentDetail className="footer-icon" /> Testimonials</a>
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#accordian", "accordian")}><AiFillQuestionCircle className="footer-icon" /> FAQ</a>
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/howitworks", "howitworks")}><AiFillHome className="footer-icon" /> How it Works</a>
              </li>
              <NavLink to="/feedback">
                <li className="footer-link"><BiCommentDetail className="footer-icon" /> Feedback</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">More Info</p>
            <ul className="footer-links">
              <NavLink to="/privacypolicy">
                <li className="footer-link"><AiFillLock className="footer-icon" /> Privacy Policy</li>
              </NavLink>
              <NavLink to="/termsandconditions">
                <li className="footer-link"><AiFillFileText className="footer-icon" /> Terms & Conditions</li>
              </NavLink>
              <NavLink to="/licensing">
                <li className="footer-link"><BiBook className="footer-icon" /> Licensing</li>
              </NavLink>
              <NavLink to="/visionandmission">
                <li className="footer-link"><AiFillQuestionCircle className="footer-icon" /> Vision and Mission</li>
              </NavLink>
              <li className="footer-link"><BiBriefcase className="footer-icon" /> Career</li>
              <NavLink to="/contributor">
                <li className="footer-link"><BiGroup className="footer-icon" /> Our Contributors</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">Let&rsquo;s Connect</p>
            <div className="footer-icons footer-icons-md">
              <a href="https://linkedin.com/yourpage" target="_blank" rel="noreferrer">
                <FaLinkedin style={{ fontSize: "25px" }} />
              </a>
              <a href="https://github.com/Priyaaa1/StartConnect-Hub" className="github" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
                <FaFacebook style={{ fontSize: "25px" }} />
              </a>
              <a href="https://twitter.com/yourpage" target="_blank" rel="noreferrer">
                <FaTwitter style={{ fontSize: "25px" }} />
              </a>
              <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
                <FaInstagram style={{ fontSize: "25px" }} />
              </a>
            </div>
            <SubscriptionForm />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-link">
          &copy; {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
