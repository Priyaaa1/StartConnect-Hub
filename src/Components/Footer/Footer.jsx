import { useEffect, useState } from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const theme = "footer-light";
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

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  return (
    <div className={`footer ${theme}`}>
      <div className='footer-container footer-container-md'>
        <div className='footer-1'>
          <div className='footer-title'>
            {sticky ? (
              <>
                <span>Start Connect Hub</span>
              </>
            ) : (
              <>
                <span>Start</span>
                <span> Connect</span>
                <span> Hub</span>
              </>
            )}
          </div>
        </div>
        <div className='footer-half footer-sections'>
          <div className='footer-2'>
            <p className='footer-section-title'>Company</p>
            <ul className='footer-links'>
              <NavLink to="/#about" onClick={() => scrollToSection("about")}>
                <li className='footer-link'><a href='/about'>About Us</a></li>
              </NavLink>
              <li className='footer-link'>Blogs</li>
              <a href="https://github.com/Priyaaa1/StartConnect-Hub" target="_blank" rel="noopener noreferrer">
                <li className='footer-link'>Collaboration</li>
              </a>
              <li className='footer-link'>Media</li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Need Help</p>
            <ul className='footer-links'>
              <NavLink to="/#contact" onClick={() => scrollToSection("contact")}>
                <li className='footer-link'>Contact Us</li>
              </NavLink>
              <NavLink to="/#testimonials" onClick={() => scrollToSection("testimonials")}>
                <li className='footer-link'>Testimonials</li>
              </NavLink>
              <li className='footer-link'>Sitemap</li>
              <NavLink to="/howitworks" onClick={() => scrollToSection("howitworks")}>
              <li className='footer-link'>How it Works</li>
              </NavLink>
              <NavLink to="/#accordian" onClick={() => scrollToSection("accordian")}>
                <li className='footer-link'>FAQ</li>
              </NavLink>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>More Info</p>
            <ul className='footer-links'>
              <NavLink to="/privacypolicy"><li className='footer-link'>Privacy Policy</li></NavLink>
              <NavLink to="/termsandconditions"><li className='footer-link'>Terms & Conditions</li></NavLink>
              <NavLink to="/visionandmission"><li className='footer-link'>Vision and Mission</li></NavLink>
              <li className='footer-link'>Career</li>
            </ul>
          </div>
          <div className='footer-2'>
          <p className='footer-section-title'>Let's Connect</p>
          <br></br>
          <div className='footer-icons footer-icons-md'>
            <a href="https://linkedin.com/yourpage" target="_blank" rel='noreferrer'>
              <i className="fab fa-linkedin icons" style={{ fontSize: "25px" , marginRight:"10px"}}/>
            </a>
            <a href="https://github.com/Priyaaa1/StartConnect-Hub" className='github icons' target="_blank" rel='noreferrer'>
              <FaGithub style={{ fontSize: "25px" , marginRight:"10px",}}/>
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel='noreferrer'>
              <i className="fab fa-facebook icons" style={{ fontSize: "25px" , marginRight:"10px",}}/>
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel='noreferrer'>
              <i><FaXTwitter className='x' style={{ fontSize: "25px" , marginRight:"10px"}}/></i>
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel='noreferrer'>
              <i className="fab fa-instagram icons" style={{ fontSize: "25px" , marginRight:"10px"}}/>
            </a>
          </div>
        </div>
        </div>
        

      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-link'>
          &copy; 2024 Start Connect Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
