import './About.css'
import about_img from '../../assets/about1.jpg'

const About = () => {
  return (
    <div className='flex items-center mt-10 max-md:flex-col max-md:p-2   justify-center w-full  gap-5 p-10' id='about'>
        <div className='flex items-center justify-center w-[50%] max-md:w-full '>
            <img src={about_img} alt='' className='w-[70%]'></img>
            {/* <img src={play_icon} alt='' className='play-icon'></img> */}
        </div>
        <div className=' text-2xl w-[50%] flex flex-col justify-start items-center max-h-[620px] max-md:w-full  overflow-y-auto max-sm:text-sm  p-10 pr-12'>
            <h3 className='xl:text-5xl lg:text-2xl max-md:text-xl font-bold text-center'>ABOUT US</h3>
            <h2 className='text-center text-3xl max-md:text-lg font-semibold m-3'>Bridging the gap between ideas and investments</h2>
            <p className='text-justify max-md:text-md' >At StartConnectHub, our mission is to create a thriving ecosystem where entrepreneurs and investors can come together to turn ideas into reality. We understand the challenges that startups face, from securing funding to navigating the complexities of the business world. With our platform, entrepreneurs can bring their visions to life and take their businesses to new heights.Our commitment to fostering innovation and collaboration drives everything we do. We believe that by providing the right resources and support, we can empower individuals to pursue their passions and create lasting change. Whether you're an entrepreneur with a groundbreaking idea or an investor looking for the next big opportunity, StartConnectHub is here to help you succeed. Join us and become part of a community that's dedicated to shaping the future of entrepreneurship.</p>
        </div>
    </div>
  )
}

export default About