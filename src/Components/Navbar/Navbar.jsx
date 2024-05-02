import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

import './Navbar.css'
import logo from '../../assets/logo2.png'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt='' className='logo'></img>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        {/* <li><button className='btn'>Login</button></li>
        <li><button className='btn'>Signup</button></li> */}
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
    </ul>
    <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar