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
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
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
        <About />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

export default App;
