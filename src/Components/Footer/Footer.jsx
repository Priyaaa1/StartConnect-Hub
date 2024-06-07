// // import { useEffect, useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import "./Footer.css";
// // import { scroller } from "react-scroll";
// // import { useLocation } from "react-router-dom";

// // const Footer = () => {
// //   const location = useLocation();
// //   const [sticky, setSticky] = useState(false);

// //   useEffect(() => {
// //     window.addEventListener("scroll", () => {
// //       window.scrollY > 200 ? setSticky(true) : setSticky(false);
// //     });
// //   }, []);

// //   const [mobileMenu, setMobileMenu] = useState(false);
// //   const toggleMenu = () => {
// //     setMobileMenu(!mobileMenu);
// //   };

// //   const scrollToAbout = () => {
// //     scroller.scrollTo("about", {
// //       smooth: true,
// //       offset: -260,
// //       duration: 500,
// //     });
// //   };

// //   const scrollToTestimonials = () => {
// //     scroller.scrollTo("testimonials", {
// //       smooth: true,
// //       offset: -260,
// //       duration: 500,
// //     });
// //   };

// //   const scrollToFAQ = () => {
// //     scroller.scrollTo("accordian", {
// //       smooth: true,
// //       offset: -260,
// //       duration: 500,
// //     });
// //   };

// //   const scrollToContact = () => {
// //     scroller.scrollTo("contact", {
// //       smooth: true,
// //       offset: -260,
// //       duration: 500,
// //     });
// //   };

// //   return (
// //     <footer className="footer">
// //       <div className="grid-container">
// //         <div
// //           className="row"
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             letterSpacing: 0.5,
// //           }}
// //         >
// //           <div className="footer-col">
// //             <div className="needHelpCss">
// //               <div style={{ fontSize: 20, textTransform: "uppercase", marginTop: 15 }}>
// //                 Need Help
// //               </div>
// //               <div style={{ marginTop: 10 }}>
// //                 <div>
// //                   <NavLink to="/#contact" onClick={scrollToContact}>
// //                     Contact Us
// //                   </NavLink>
// //                 </div>
// //                 <div>
// //                   <NavLink to="/#accordian" onClick={scrollToFAQ}>
// //                     FAQ's
// //                   </NavLink>
// //                 </div>
// //                 <div>
// //                   <NavLink to="/#testimonials" onClick={scrollToTestimonials}>
// //                     Testimonials
// //                   </NavLink>
// //                 </div>
// //                 <div className="foot">Career</div>
// //                 <div className="foot">Sitemap</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="footer-col">
// //             <div className="companyCss">
// //               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
// //                 Company
// //               </div>
// //               <div style={{ marginTop: 10 }}>
// //                 <div>
// //                   <NavLink to="/#about" onClick={scrollToAbout}>
// //                     About Us
// //                   </NavLink>
// //                 </div>
// //                 <div className="foot">The StartConnect-Hub Blog</div>
// //                 <div className="foot">
// //                   <a href="https://github.com/Priyaaa1/StartConnect-Hub">
// //                     Collaboration
// //                   </a>
// //                 </div>
// //                 <div className="foot">Media</div> 
// //               </div>
// //             </div>
// //           </div>

// //           <div className="footer-col">
// //             <div className="moreInfoCss">
// //               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
// //                 More info
// //               </div>
// //               <div style={{ marginTop: 10 }}>
// //                 <div>
// //                   <NavLink to="/termsandconditions">Terms and Conditions</NavLink>
// //                 </div>
// //                 <div>
// //                   <NavLink to="/privacypolicy">Privacy Policy</NavLink>
// //                 </div>
// //                 <div>
// //                   <NavLink to="/visionandmission">Mission and Vision</NavLink>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="footer-col">
// //             <div className="socialSitesCss">
// //               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
// //                 Let's Connect
// //               </div>
// //               <div
// //                 style={{
// //                   marginTop: 10,
// //                   display: "flex",
// //                   justifyContent: "space-around",
// //                   width: "50%",
// //                 }}
// //               >
// //                 <div>
// //                   <a
// //                     href="https://facebook.com/yourpage"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="facebook"
// //                   >
// //                     <i className="fab fa-facebook" style={{ fontSize: "25px" }}></i>
// //                   </a>
// //                 </div>
// //                 <div>
// //                   <a
// //                     href="https://twitter.com/yourpage"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="twitter"
// //                   >
// //                     <i className="fa-brands fa-square-x-twitter" style={{ fontSize: "25px" }}></i>
// //                   </a>
// //                 </div>
// //                 <div>
// //                   <a
// //                     href="https://linkedin.com/yourpage"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="linkedin"
// //                   >
// //                     <i className="fab fa-linkedin" style={{ fontSize: "25px" }}></i>
// //                   </a>
// //                 </div>
// //                 <div>
// //                   <a
// //                     href="https://instagram.com/yourpage"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="instagram"
// //                   >
// //                     <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <span className="copyright">
// //         © {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
// //       </span>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { scroller } from "react-scroll";
// import { useLocation } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   const location = useLocation();
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 200 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   const [mobileMenu, setMobileMenu] = useState(false);
//   const toggleMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const scrollToSection = (section) => {
//     scroller.scrollTo(section, {
//       smooth: true,
//       offset: -260,
//       duration: 500,
//     });
//   };

//   return (
//     <footer className="footer">
//       <div className="grid-container">
//         <div
//           className="row"
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             letterSpacing: 0.5,
//           }}
//         >
//           <div className="footer-col">
//             <div className="needHelpCss">
//               <div style={{ fontSize: 20, textTransform: "uppercase", marginTop: 15 }}>
//                 Need Help
//               </div>
//               <div style={{ marginTop: 10 }}>
//                 <div>
//                   <NavLink to="/#contact" onClick={() => scrollToSection("contact")}>
//                     Contact Us
//                   </NavLink>
//                 </div>
//                 <div>
//                   <NavLink to="/#accordian" onClick={() => scrollToSection("accordian")}>
//                     FAQ's
//                   </NavLink>
//                 </div>
//                 <div>
//                   <NavLink to="/#testimonials" onClick={() => scrollToSection("testimonials")}>
//                     Testimonials
//                   </NavLink>
//                 </div>
//                 <div className="foot">Career</div>
//                 <div className="foot">Sitemap</div>
//               </div>
//             </div>
//           </div>

//           <div className="footer-col">
//             <div className="companyCss">
//               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
//                 Company
//               </div>
//               <div style={{ marginTop: 10 }}>
//                 <div>
//                   <NavLink to="/#about" onClick={() => scrollToSection("about")}>
//                     About Us
//                   </NavLink>
//                 </div>
//                 <div className="foot">The StartConnect-Hub Blog</div>
//                 <div className="foot">
//                   <a href="https://github.com/Priyaaa1/StartConnect-Hub" target="_blank" rel="noopener noreferrer">
//                     Collaboration
//                   </a>
//                 </div>
//                 <div className="foot">Media</div>
//               </div>
//             </div>
//           </div>

//           <div className="footer-col">
//             <div className="moreInfoCss">
//               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
//                 More info
//               </div>
//               <div style={{ marginTop: 10 }}>
//                 <div>
//                   <NavLink to="/termsandconditions">Terms and Conditions</NavLink>
//                 </div>
//                 <div>
//                   <NavLink to="/privacypolicy">Privacy Policy</NavLink>
//                 </div>
//                 <div>
//                   <NavLink to="/visionandmission">Mission and Vision</NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="footer-col">
//             <div className="socialSitesCss">
//               <div style={{ fontSize: 20, textTransform: "uppercase" }}>
//                 Let's Connect
//               </div>
//               <div
//                 style={{
//                   marginTop: 10,
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "60%",
//                 }}
//               >
//                 <div>
//                   <a
//                     href="https://facebook.com/yourpage"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="facebook"
//                   >
//                     <i className="fab fa-facebook" style={{ fontSize: "25px" }}></i>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="https://twitter.com/yourpage"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="twitter"
//                   >
//                     <i className="fab fa-twitter" style={{ fontSize: "25px" }}></i>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="https://linkedin.com/yourpage"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="linkedin"
//                   >
//                     <i className="fab fa-linkedin" style={{ fontSize: "25px" }}></i>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="https://instagram.com/yourpage"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="instagram"
//                   >
//                     <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="https://github.com/Priyaaa1/StartConnect-Hub"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="github"
//                   >
//                     <FaGithub style={{ fontSize: "25px" }} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <span className="copyright">
//         © {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
//       </span>
//     </footer>
//   );
// };

// export default Footer;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -260,
      duration: 500,
    });
  };

  return (
    <footer className="footer">
      <div className="grid-container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            letterSpacing: 0.5,
          }}
        >
          <div className="footer-col">
            <div className="needHelpCss">
              <div style={{ fontSize: 20, textTransform: "uppercase", marginTop: 15 }}>
                Need Help
              </div>
              <div style={{ marginTop: 10 }}>
                <div>
                  <NavLink to="/#contact" onClick={() => scrollToSection("contact")}>
                    Contact Us
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#accordian" onClick={() => scrollToSection("accordian")}>
                    FAQ's
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/#testimonials" onClick={() => scrollToSection("testimonials")}>
                    Testimonials
                  </NavLink>
                </div>
                <div className="foot">Career</div>
                <div className="foot">Sitemap</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="companyCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                Company
              </div>
              <div style={{ marginTop: 10 }}>
                <div>
                  <NavLink to="/#about" onClick={() => scrollToSection("about")}>
                    About Us
                  </NavLink>
                </div>
                <div className="foot">The StartConnect-Hub Blog</div>
                <div className="foot">
                  <a href="https://github.com/Priyaaa1/StartConnect-Hub" target="_blank" rel="noopener noreferrer">
                    Collaboration
                  </a>
                </div>
                <div className="foot">Media</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="moreInfoCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                More info
              </div>
              <div style={{ marginTop: 10 }}>
                <div>
                  <NavLink to="/termsandconditions">Terms and Conditions</NavLink>
                </div>
                <div>
                  <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                </div>
                <div>
                  <NavLink to="/visionandmission">Mission and Vision</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="socialSitesCss">
              <div style={{ fontSize: 20, textTransform: "uppercase" }}>
                Let's Connect
              </div>
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
                }}
              >
                <div>
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="fab fa-facebook" style={{ fontSize: "25px" }}></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="fab fa-twitter" style={{ fontSize: "25px" }}></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin" style={{ fontSize: "25px" }}></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Priyaaa1/StartConnect-Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <FaGithub style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} StartConnect-Hub. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
