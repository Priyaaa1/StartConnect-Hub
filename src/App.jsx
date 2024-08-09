import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Signup from "./Components/Signup/Signup";
import AboutUs from "./Components/Footer/Components/AboutUS";
import Faq from "./Components/Footer/Components/faq";
import ContactUS from "./Components/Footer/Components/contact";
import Testimonials from "./Components/Testimonials/Testimonials";
import GoToTop from "./Components/GoToTop";
import Accordian from "./Components/FAQ/accordian";
import './App.css';
import ChatAssistant from "./Components/ChatAssistant/ChatAssistant";
import 'react-chatbot-kit/build/main.css';
import Explore from './Pages/Explore';
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Licensing from './Pages/Licensing';
import VisionAndMission from "./Pages/VisionAndMission";
import HowItWorks from "./Pages/HowItWorks";
import InvestorManagementPage from "./Pages/InvestorManagementPage";
import Startups from "./Pages/Startups.jsx";
import EmpowerHer from "./Pages/Startups/EmpowerHer.jsx";
import UnderstandingUnited from "./Pages/Startups/UnderstandingUnited.jsx";
import HeartfeltVentures from "./Pages/Startups/HeartfeltVentures.jsx";
import HopePhoenix from "./Pages/Startups/HopePhoenix.jsx";
import JustBrew from "./Pages/Startups/JustBrew.jsx";
import SheSpark from "./Pages/Startups/SheSpark.jsx";
import FinancialServices from './Pages/FinancialServices';
import FullServiceFund from './Pages/FullServiceFund';
import Notfound from './Components/Notfound/Notfound';
import { useSelector } from 'react-redux';
import FeedbackPage from './Pages/FeedbackForm';
import Blogs from './Pages/Blogs'
import ScrollProgressBar from './Components/ProgressBar';
import Contributors from './Pages/Contributors.jsx';
import CookieConsent from './Components/CookiePolicy/CookieConsent.jsx';

const ThemeContext = createContext();

const App = () => {
   const theme = useSelector((state) => state.theme.value) ? "dark" : "light"; 
   const [currentTheme, setTheme] = useState(theme);

   const toggleTheme = () => {
     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
     setTheme(newTheme);
     localStorage.setItem('theme', newTheme);
   };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      mirror: true,
      offset: 80,
      disable: 'mobile',
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className={`main-div ${theme}`}>
        <Router>
          <Navbar />
          <ScrollProgressBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/termsandconditions' element={<TermsAndConditions />} />
            <Route path='/licensing' element={<Licensing />} />
            <Route path='/visionandmission' element={<VisionAndMission />} />
            <Route path='/howitworks' element={<HowItWorks />} />
            <Route path='/investormanagementpage' element={<InvestorManagementPage />} />
            <Route path='/startups' element={<Startups />} />
            <Route path='/empowerher' element={<EmpowerHer />} />
            <Route path='/heartfeltventures' element={<HeartfeltVentures />} />
            <Route path='/hopephoenix' element={<HopePhoenix />} />
            <Route path='/justbrew' element={<JustBrew />} />
            <Route path='/shespark' element={<SheSpark />} />
            <Route path='/understandingunited' element={<UnderstandingUnited />} />
            <Route path='/contributor' element={<Contributors />} />
            <Route path='/financialservicesPage' element={<FinancialServices />} />
            <Route path="/fullservicefund" element={<FullServiceFund />} />
            <Route path='/feedback' element={<FeedbackPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <ChatAssistant />
          <GoToTop />
          <CookieConsent />
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <div className={`container `}>
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
