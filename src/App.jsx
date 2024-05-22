import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Testimonials from "./Components/Testimonials/Testimonials";
import GoToTop from "./Components/GoToTop";
import Accordian from "./Components/FAQ/accordian";
import './App.css';
import ChatAssistant from "./Components/ChatAssistant/ChatAssistant";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import Explore from '../src/Pages/Explore'
import PrivacyPolicy from "./Pages/privacypolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import VisionAndMission from "./Pages/VisionAndMission";
import HowItWorks from "./Pages/HowItWorks";

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <div className='container'>
//         <About/>
//         <Title subTitle='Contact Us' title='Get in Touch'/>
//         <Contact/>
//         <Footer/>
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" exact>
//             <Hero />
//             <div className='container'>
//               <About />
//               <Title subTitle='Contact Us' title='Get in Touch' />
//               <Contact />
//               <Footer />
//             </div>
//           </Route>
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }


const App = () => {
  return (
   
    <Router>
      
      <div className="main-div">
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termsandconditions' element={<TermsAndConditions />}/>
          <Route path='/visionandmission' element={<VisionAndMission />}/>
          <Route path='/howitworks' element={<HowItWorks />}/>
        </Routes>
        <ChatAssistant/>
        <GoToTop/>
        <Footer />
        
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
       
      <Hero />

      <div className="container">
        <h3 id='header'>ABOUT US</h3>
        <About />
        <Testimonials />
        <Accordian /> 
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

export default App;
