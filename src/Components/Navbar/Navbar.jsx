import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { scroller } from 'react-scroll';
// import { Link } from 'react-router-dom';
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
		mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
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
		<nav
			className={`container ${
				sticky ||
				location.pathname === "/login" ||
				location.pathname === "/signup"
					? "dark-nav"
					: ""
			}`}>
			<img src={logo} alt="" className="logo"></img>
			<ul className={mobileMenu ? "" : "hide-mobile-menu"}>
				<li>
				<NavLink to="/" onClick={() => scrollToHero()}>
					 Home
					 </NavLink>
				</li>
				<li>
					<NavLink to="/#about" onClick={() => scrollToAbout()}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/" onClick={() => scrollToTerminology()}>
						Testimonials
					</NavLink>
				</li>
				<li>
					<NavLink to="/#contact" onClick={() => scrollToContact()}>
						Contact Us
					</NavLink>
				</li>
				{/* <li><button className='btn'>Login</button></li>
        <li><button className='btn'>Signup</button></li> */}
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Signup</NavLink>
				</li>
			</ul>
			<img
				src={menu_icon}
				alt=""
				className="menu-icon"
				onClick={toggleMenu}></img>
		</nav>
	);
};

export default Navbar;
