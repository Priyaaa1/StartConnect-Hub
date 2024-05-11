import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop + clientHeight >= scrollHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`footer ${showFooter ? "visible" : "hidden"}`}>
      <div className="footer-content">
        <span>©2024 StartConnect-Hub. All rights reserved.</span>
      </div>
      <ul>
        <li><a href="/terms-of-services">Terms of Services</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </div>
  );
};

export default Footer;
