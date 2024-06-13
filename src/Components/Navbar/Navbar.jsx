import { useContext, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useLocation, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import menu_icon from "../../assets/menu-icon.png";
import { ThemeContext } from "../../App";
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from "../../features/theme";
import moonIcon from "./moon.jpg";
import sunIcon from "./sun.jpg";
// import 'boxicons';

const Navbar = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const theme = "header-light";
  const dispatch = useDispatch()
  // const { theme, toggleTheme } = useContext(ThemeContext); 
  // const [themes, setThemes] = useState("light");

  const handleThemeChange = () => {
    console.log(theme)
    dispatch(changeTheme())
  };

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setSticky(currentScrollY > 200);

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToHero = () => {
    scroller.scrollTo("hero", {
      smooth: true,
      offset: 0,
      duration: 500,
    });
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
    <nav 
      className={`container1 ${
        sticky ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
          ? "dark-nav"
          : ""
      } ${visible ? "" : "hidden-nav"} ${theme}`}
    >
      <NavLink to="/" onClick={() => scrollToHero()}>
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <div className="nav1">
            <NavLink to="/" onClick={() => scrollToHero()}>
              Home 
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#about" onClick={() => scrollToAbout()}>
              About
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#tesimonials" onClick={() => scrollToTestimonials()}>
              Testimonials
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#accordian" onClick={() => scrollToFAQ()}>
              FAQ's
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#contact" onClick={() => scrollToContact()}>
              Contact Us
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/login">
            <button className='logIn'>LOG IN</button>
          </NavLink>
        </li>
      </ul>
  <button className="theme-toggle-button" onClick={()=>dispatch(changeTheme())} title="Change Theme">
    <img src={theme==="header-dark"?moonIcon:sunIcon} alt="Sun" />
  </button>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
