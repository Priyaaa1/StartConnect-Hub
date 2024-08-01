import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "", confirmPassword: "" });

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!emailValue) {
      setWarnings({...warnings, email: "*Please enter your email" });
    } else if (!validateEmail(emailValue)) {
      setWarnings({...warnings, email: "*Please enter a valid email address!" });
    } else {
      setWarnings({...warnings, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (!passwordValue) {
      setWarnings({...warnings, password: "*Please enter your password" });
    } else if (!validatePassword(passwordValue)) {
      setWarnings({...warnings, password: "Username should be atlest 4 to 16 characters, mustn't have special character!" });
    } else {
      setWarnings({...warnings, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (!confirmPasswordValue) {
      setWarnings({...warnings, confirmPassword: "*Please enter your confirm password" });
    } else if (password!== confirmPasswordValue) {
      setWarnings({...warnings, confirmPassword: "Passwords do not match!" });
    } else {
      setWarnings({...warnings, confirmPassword: "" });
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 16 && /^[a-zA-Z0-9]+$/.test(password);
  };

  const handleSignUp = () => {
    console.log("Signing up with email:", email, "and password:", password);
    // Your signup logic here
  };

  return (
    <div className="signup-outerContainer">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {warnings.email && <p style={{ color: "red" }} className="warningmsg">{warnings.email}</p>}
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {warnings.password && <p style={{ color: "red" }} className="warningmsg">{warnings.password}</p>}
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {warnings.confirmPassword && <p style={{ color: "red" }} className="warningmsg">{warnings.confirmPassword}</p>}
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialDecoded);
            }}
            onError={() => {
              console.log("Sign-Up Failed!");
            }}
          />
        </div>


      </div>
    </div>
  );
};

export default Signup;