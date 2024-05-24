import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero () {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>StartConnect Hub</h1>
            <p>Connecting visionaries for growth and success, bridging the gap between ideas and investments</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''></img></button>
        </div>
    </div>
  )
}

export default Hero