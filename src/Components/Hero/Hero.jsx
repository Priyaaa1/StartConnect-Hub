 import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero mx-auto w-screen h-screen flex items-center justify-center text-white' id='hero'>
        <div className='max-w-full p-10 flex flex-col items-center justify-center gap-4'>
            <h1 className='text-5xl font-extrabold text-center max-sm:text-2xl'>StartConnect Hub</h1>
            <p className='font-bold text-center'>Connecting visionaries for growth and success, bridging the gap between ideas and investments</p>
            <button className='w-60 h-12 rounded-3xl bg-white flex items-center justify-center gap-4 text-black font-bold transition hover:scale-125 hover:text-white'>Explore more <img src={dark_arrow} className='w-8' alt=''></img></button>
        </div>
    </div>
  )
}

export default Hero