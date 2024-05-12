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

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  return (
    <nav
      className={`z-50 max-lg:px-3 flex flex-row fixed top-0 left-0 w-full items-center justify-between px-20 h-20 max-md:justify-between max-sm:px-8 ${
        sticky ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
          ? "dark-nav"
          : ""
      }`}
    >
      <img src={logo} alt="" onClick={toggleMenu} className="h-20 w-20" ></img>
      <ul className={`${mobileMenu ? "" : "hide-mobile-menu"} flex  md:gap-8 sm:gap-3 items-center font-bold text-white max-sm:hidden`}>
        <li>
          <NavLink className="hover:text-blue-500 " to="/" onClick={() => scrollToHero()} >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-500 " to="/#about" onClick={() => scrollToAbout()}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-500 " to="/#tesimonials" onClick={() => scrollToTestimonials()}>
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-500 " to="/#contact" onClick={() => scrollToContact()}>
            Contact Us
          </NavLink>
        </li>
        {/* <li><button className='btn'>Login</button></li>
        <li><button className='btn'>Signup</button></li> */}
        <li>
          <NavLink to="/signup">
            <button className="bg-white p-2 text-black font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition">
              Register
            </button>
          </NavLink>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className=" w-5 sm:hidden"
        onClick={toggleMenu}
      ></img>
    </nav>
  );
};

export default Navbar;
