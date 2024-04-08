import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

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
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        <li><button className='btn'>Login</button></li>
        {/* <li><button className='btn'>Register</button></li> */}
    </ul>
    </nav>
  )
}

export default Navbar