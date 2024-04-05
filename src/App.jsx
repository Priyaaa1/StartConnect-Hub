import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App