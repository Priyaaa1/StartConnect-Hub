import { useEffect, useState } from "react"; // Import hooks from React
import "./Footer.css"; // Import CSS for styling
import logo from "../../assets/logo2.png"; // Import the logo image
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink and useNavigate for navigation
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling
import Visitors from "../Visitors"; // Import Visitors component

const Footer = () => {
  const [sticky, setSticky] = useState(false); // State to track sticky footer
  const [mobileMenu, setMobileMenu] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Effect to handle scroll event for sticky footer
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200); // Set sticky based on scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle mobile menu state
  };

  // Function to scroll to a section smoothly
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  // Function to handle navigation and scrolling
  const handleNavigation = (path, section) => {
    navigate(path); // Navigate to the specified path
    setTimeout(() => scrollToSection(section), 0); // Scroll to the section after navigation
  };

  // Component for the subscription form
  const SubscriptionForm = () => {
    const [email, setEmail] = useState(""); // State for email input
    const [message, setMessage] = useState(""); // State for success message

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      // Add your subscription logic here (e.g., API call to subscribe the email)
      setMessage("Thank you for subscribing!"); // Set success message
      setEmail(""); // Clear email input
    };

    return (
      <div className="subscription-form">
        <h3>Subscribe to our Newsletter</h3> {/* Form heading */}
        <form onSubmit={handleSubmit}> {/* Form submission handler */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            placeholder="Enter your email"
            required // Make input required
          />
          <button type="submit">Subscribe</button> {/* Submit button */}
        </form>
        {message && <p className="subscription-message">{message}</p>} {/* Display success message if available */}
      </div>
    );
  };

  return (
    <div className="footer">
      <div className="footer-container footer-container-md">
        {/* Top section of the footer */}
        <div className="footer-1">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="Start Connect hub logo" className="footer-logo" /> {/* Logo image */}
            </a>
          </div>
          <div className="footer-title">Start Connect hub</div> {/* Footer title */}
          <a href="https://github.com/Priyaaa1/StartConnect-Hub" className="star-us">Star us ⭐</a> {/* GitHub star link */}
          <div className="footer-text">
            <Visitors /> {/* Visitors component */}
          </div>
        </div>
        <div className="footer-half footer-sections">
          {/* Footer sections */}
          <div className="footer-2">
            <p className="footer-section-title">Company</p> {/* Section title */}
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#about", "about")}>About Us</a> {/* Navigation link */}
              </li>
              <NavLink to="/blogs">
                <li className="footer-link">Blogs</li> {/* Blogs link */}
              </NavLink>
              <a href="https://github.com/Priyaaa1/StartConnect-Hub" target="_blank" rel="noopener noreferrer">
                <li className="footer-link">Collaboration</li> {/* Collaboration link */}
              </a>
              <li className="footer-link">Media</li> {/* Media link */}
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">Need Help</p> {/* Section title */}
            <ul className="footer-links">
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#contact", "contact")}>Contact Us</a> {/* Contact link */}
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#testimonials", "testimonials")}>Testimonials</a> {/* Testimonials link */}
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/#accordian", "accordian")}>FAQ</a> {/* FAQ link */}
              </li>
              <li className="footer-link">
                <a onClick={() => handleNavigation("/howitworks", "howitworks")}>How it Works</a> {/* How it Works link */}
              </li>
              <NavLink to="/feedback">
                <li className="footer-link">Feedback</li> {/* Feedback link */}
              </NavLink>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">More Info</p> {/* Section title */}
            <ul className="footer-links">
              <NavLink to="/privacypolicy">
                <li className="footer-link">Privacy Policy</li> {/* Privacy Policy link */}
              </NavLink>
              <NavLink to="/termsandconditions">
                <li className="footer-link">Terms & Conditions</li> {/* Terms & Conditions link */}
              </NavLink>
              <NavLink to="/licensing">
                <li className="footer-link">Licensing</li> {/* Licensing link */}
              </NavLink>
              <NavLink to="/visionandmission">
                <li className="footer-link">Vision and Mission</li> {/* Vision and Mission link */}
              </NavLink>
              <li className="footer-link">Career</li> {/* Career link */}
              <NavLink to="/contributor">
                <li className="footer-link">Our Contributors</li> {/* Contributors link */}
              </NavLink>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-section-title">Let&rsquo;s Connect</p> {/* Section title */}
            <div className="footer-icons footer-icons-md">
              {/* Social media icons */}
              <a href="https://linkedin.com/yourpage" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" style={{ fontSize: "25px" }} />
              </a>
              <a href="https://github.com/Priyaaa1/StartConnect-Hub" className="github" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook" style={{ fontSize: "25px" }} />
              </a>
              <a href="https://twitter.com/yourpage" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter" style={{ fontSize: "25px" }} />
              </a>
              <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" style={{ fontSize: "25px" }} />
              </a>
            </div>
            <SubscriptionForm /> {/* Render subscription form */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-link">
          &copy; {new Date().getFullYear()} StartConnect-Hub. All rights reserved. {/* Footer bottom text */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
