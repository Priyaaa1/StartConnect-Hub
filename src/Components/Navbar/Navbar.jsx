import { useEffect, useState } from "react";

import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import menu_icon from "../../assets/menu-icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
  // const isHomePage = location.pathname === "/";
  //  scroll to the "hero" section when clicked
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
      className={`container ${
        sticky ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
          ? "dark-nav"
          : ""
      }`}
    >
     <NavLink to="/" onClick={() => scrollToHero()}><img src={logo} alt="" className="logo" onClick={toggleMenu} href="/"></img></NavLink>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
      <li><div className="nav1">
          <NavLink to="/" onClick={() => scrollToHero()}>
            Home
          </NavLink></div>
        </li>
        <li><div className="nav1">
          <NavLink to="/#about" onClick={() => scrollToAbout()}>
            About
          </NavLink></div>
        </li>
        <li><div className="nav1">
          <NavLink to="/#tesimonials" onClick={() => scrollToTestimonials()}>
            Testimonials
          </NavLink></div>
        </li>
        <li><div className="nav1">
          <NavLink to="/#accordian" onClick={() => scrollToFAQ()}>
            FAQ's
          </NavLink></div>
        </li>
        <li><div className="nav1">
          <NavLink to="/#contact" onClick={() => scrollToContact()}>
            Contact Us
          </NavLink></div>
        </li>
        {/* <li><button className='btn'>Login</button></li>
        <li><button className='btn'>Signup</button></li> */}
        <li>
          <NavLink to="/login">
          <button >LOG IN</button>
          </NavLink>
        </li>
        {/*<li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
      </li>*/}
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      ></img>
    </nav>
  );
};

export default Navbar;
