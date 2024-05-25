import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text' data-aos="zoom-in" data-aos-easing= "ease-in" >
            <h1>Start Connect Hub</h1>
            <p>Connecting visionaries for growth and success, bridging the gap between ideas and investments</p>
            <NavLink to="/explore"><button className='btn'>Explore more <img src={dark_arrow} alt=''></img></button></NavLink>
        </div>
    </div>
  )
}

export default Hero