// import ReactDOM from 'react-dom';
// import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import AboutUs from "./Components/Footer/Components/AboutUS";
import Faq from "./Components/Footer/Components/faq";
import ContactUS from "./Components/Footer/Components/contact";
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
import InvestorManagementPage from "./Pages/InvestorManagementPage";
import FinancialServices from './Pages/FinancialServices'
import FullServiceFund from './Pages/FullServiceFund';
import { PiSelectionInverseThin } from "react-icons/pi";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/  /* This line of code caused orientation issue/bug in the UI of HOME PAGE */


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
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in milliseconds
        mirror: true,
        offset: 80,
        disable: 'mobile',
      });
    }, []);
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
          <Route path='/investormanagementpage' element={<InvestorManagementPage/>}/>
          <Route path='/financialservicesPage' element = {<FinancialServices/>}/>
          <Route path="/fullservicefund" element={<FullServiceFund/>}/>
        </Routes>
        <ChatAssistant/>
        <GoToTop/>
        <Footer />
        
      </div>
    </Router>
  );
};
export const LoginToHero=()=>{
  return(
    <>
    <MainHomePage/>
    </>
  )
}

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
