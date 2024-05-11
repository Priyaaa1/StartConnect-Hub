import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { scroller } from 'react-scroll';
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
		scroller.scrollTo('hero', {
		  smooth: true,
		  offset: 0,
		  duration: 500
		});
	  };

	  const scrollToAbout = () => {
		scroller.scrollTo('about', {
		  smooth: true,
		  offset: -260,
		  duration: 500
		});
	  };

	  const scrollToTerminology =() =>{
		scroller.scrollTo('testimonials',{
			smooth:true,
			offset:0,
			duration:500
		})
	  }

	  const scrollToContact =() =>{
		scroller.scrollTo('contact',{
			smooth:true,
			offset:-260,
			duration:500
		})
	  }

	return (
		
		<nav className={`container ${sticky ? "dark-nav" : ""}`}>
		<img src={logo} alt="" className="logo" onClick={toggleMenu} />
		<ul className={mobileMenu ? "" : "hide-mobile-menu"}>
			<li>
				<NavLink to="/" className="nav-link" activeClassName="active" onClick={() => scrollTo('hero')}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/#about" className="nav-link" activeClassName="active" onClick={() => scrollTo('about')}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="/" className="nav-link" activeClassName="active" onClick={() => scrollTo('testimonials')}>
					Testimonials
				</NavLink>
			</li>
			<li>
				<NavLink to="/#contact" className="nav-link" activeClassName="active" onClick={() => scrollTo('contact')}>
					Contact Us
				</NavLink>
			</li>
			<li>
				<NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
			</li>
			<li>
				<NavLink to="/signup" className="nav-link" activeClassName="active">Signup</NavLink>
			</li>
		</ul>
		<img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
	</nav>
	);
};

export default Navbar;
