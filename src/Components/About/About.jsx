import React from 'react'
import './About.css'
import about_img from '../../assets/about1.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'></img>
            {/* <img src={play_icon} alt='' className='play-icon'></img> */}
        </div>
        <div className='about-right'>
            <h3>ABOUT US</h3>
            <h2>Bridging the gap between ideas and investments</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio consequuntur, ab itaque sapiente eos fugit, nesciunt eius commodi velit soluta tempore totam praesentium perspiciatis corrupti repellendus sunt, ullam illo sed doloribus asperiores nisi dignissimos corporis deserunt! Facere, quibusdam. Aliquid nisi eligendi itaque magni laborum minus accusantium eos recusandae dolore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio consequuntur, ab itaque sapiente eos fugit, nesciunt eius commodi velit soluta tempore totam praesentium perspiciatis corrupti repellendus sunt, ullam illo sed doloribus asperiores nisi dignissimos corporis deserunt! Facere, quibusdam.</p>
        </div>
    </div>
  )
}

export default About