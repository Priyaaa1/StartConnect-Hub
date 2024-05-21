import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      console.log("Logging in with email:", email, "and password:", password);
    } else {
      setEmailError(!validateEmail(email));
      setPasswordError(!validatePassword(password));
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-outerContainer">
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className={emailError ? "shake error" : validateEmail(email) ? "valid" : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          <i className={emailError ? "fas fa-times-circle error-icon" : validateEmail(email) ? "fas fa-check-circle valid-icon" : ""}></i>
        </div>
        {emailError && <p style={{ color: "red" }}>Please enter a valid email address</p>}
        <div className="input-container">
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className={passwordError ? "shake error" : validatePassword(password) ? "valid" : ""}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
            />
            <label className="password-toggle-label">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              
            </label>
          </div>
        </div>
        {passwordError && (
          <p style={{ color: "red" }}>
            Please enter a valid password (at least 8 characters, one uppercase letter, one lowercase letter, and one number)
          </p>
        )}
        <button onClick={handleLogin}>Login</button>
		<p>
			Don't have an account? <NavLink to="/signup">Sign up</NavLink>
		</p>
      </div>
    </div>
  );
};

export default Login;
