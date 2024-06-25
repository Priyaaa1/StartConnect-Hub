// src/components/ForgotPassword.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [warnings, setWarnings] = useState({ email: "" });
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    let emailWarning = "";
    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }
    setWarnings({ email: emailWarning });

    if (!emailWarning && email) {
      console.log("Sending password reset email to:", email);
      alert("A password reset link has been sent to your email address.");
      navigate("/login");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <Navbar /> {/* Include your Navbar component */}
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setWarnings((prevWarnings) => ({ ...prevWarnings, email: "" }));
              }}
              onBlur={(e) => {
                if (!validateEmail(e.target.value)) {
                  setWarnings((prevWarnings) => ({
                    ...prevWarnings,
                    email: "*Please enter a valid email address!",
                  }));
                }
              }}
            />
            {warnings.email && (
              <p style={{ color: "red" }} className="warningmsg">
                {warnings.email}
              </p>
            )}
          </div>
          <button onClick={handleForgotPassword}>Send Reset Link</button>
        </div>
      </div>
      <Footer /> {/* Include your Footer component */}
    </div>
  );
};

export default ForgotPassword;
