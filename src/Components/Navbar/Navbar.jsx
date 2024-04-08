import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt='' className='logo'></img>
    <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        <li><button className='btn'>Login</button></li>
        {/* <li><button className='btn'>Register</button></li> */}
    </ul>
    </nav>
  )
}

export default Navbar