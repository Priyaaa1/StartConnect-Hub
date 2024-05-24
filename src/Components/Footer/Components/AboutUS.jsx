import React from 'react'
import './Main.css'
import img from '../../../assets/about.png'

const AboutUs = () => {
  return (
    <>
    <div className='section'>
        <div className='container'>
            <div className='title'>
                <h1>About Us</h1>
            </div>
            <div className='aboutcontent'>
                <div className='artcle'>
                    <p>
                        <span className='spancontent'>Start-Connect Hub </span> 
                        is a revolutionary platform designed to bridge the gap between startups and investors, fostering collaboration, innovation, and growth in the entrepreneurial ecosystem. Our mission is to empower startups to succeed by providing them with the resources, connections, and support they need to thrive, while also enabling investors to discover and invest in promising opportunities.
                        <br /><br />At StartConnectHub, our mission is to create a thriving ecosystem where entrepreneurs and investors can come together to turn ideas into reality. We understand the challenges that startups face, from securing funding to navigating the complexities of the business world. With our platform, entrepreneurs can bring their visions to life and take their businesses to new heights.                        
                    </p>
                </div>
            </div>
            <div className='image-section'>
                <img src={img} />
            </div>
            <div className="social">
                <a href=""><i className='fab fa-facebook-f'></i></a>
                <a href=""><i className='fab fa-instagram'></i></a>
                <a href=""><i className='fab fa-twitter'></i></a>
            </div>
        </div>
        <div className=''>
        </div>
    </div>
    </>
  )
}

export default AboutUs;