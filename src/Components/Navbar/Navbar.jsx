import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <nav>
    <img src={logo} alt='' className='logo'></img>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
    </ul>
    </nav>
  )
}

export default Navbar