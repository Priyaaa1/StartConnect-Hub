import React, { useEffect, useState, useRef } from "react";
import { scroller } from "react-scroll";
import { useLocation, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "../../features/theme";
import logo from "../../assets/logo2.png";
import menu_icon from "../../assets/menu-icon.png";
import moonIcon from "./moon.jpg";
import sunIcon from "./sun.jpg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const isDark = useSelector((state) => state.theme.value);
  const theme = "header-light";
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setSticky(currentScrollY > 200);

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenu && !menuRef.current.contains(event.target) && !menuIconRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuItemClick = (sectionId, offset) => {
    scrollToSection(sectionId, offset);
    setMobileMenu(false);
  };

  const scrollToSection = (sectionId, offset) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      offset: offset,
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
      <NavLink to="/" onClick={() => handleMenuItemClick("hero", 0)}>
        <p>Start Connect Hub</p>
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <ul ref={menuRef} className={mobileMenu ? "show-mobile-menu" : ""}>
        <li>
          <div className="nav1">
            <NavLink to="/" onClick={() => handleMenuItemClick("hero", 0)}>
              Home
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#about" onClick={() => handleMenuItemClick("about", -260)}>
              About
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#testimonials" onClick={() => handleMenuItemClick("testimonials", -260)}>
              Testimonials
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#faq" onClick={() => handleMenuItemClick("accordian", -260)}>
              FAQ's
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/#contact" onClick={() => handleMenuItemClick("contact", -260)}>
              Contact Us
            </NavLink>
          </div>
        </li>
        <li>
          <div className="nav1">
            <NavLink to="/feedback">
              Feedback
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setMobileMenu(false)}>
            <button className='logIn'>LOG IN</button>
          </NavLink>
        </li>
      </ul>
      <button className="theme-toggle-button" onClick={() => dispatch(changeTheme())} title="Change Theme">
        <img src={isDark ? moonIcon : sunIcon} alt="Theme Icon" />
      </button>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
        ref={menuIconRef}
      />
    </nav> 
  );
};

export default Navbar;



