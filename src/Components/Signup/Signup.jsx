import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSignUp = () => {
    // Email validation using regular expression
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    } else {
      setConfirmPasswordError(false);
    }

    console.log("Signing up with email:", email, "and password:", password);
    // Additional signup logic can be added here (e.g., API call)
  };

  return (
    <div className="signup-outerContainer">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? "input-error" : ""}
        />
        {emailError && <p className="error-message">Please enter a valid email</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? "input-error" : ""}
        />
        {passwordError && (
          <p className="error-message">Password must be at least 8 characters long</p>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={confirmPasswordError ? "input-error" : ""}
        />
        {confirmPasswordError && (
          <p className="error-message">Passwords do not match</p>
        )}
        <button onClick={handleSignUp}>Sign Up</button>
		<p>
			Already have an account? <NavLink to="/login">Login</NavLink>
		</p>
      </div>
    </div>
  );
};

export default Signup;
