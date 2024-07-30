import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "" });
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordFunction = () => {
    setVisible(!isVisible);
  };

  const handleLogin = () => {
    let emailWarning = "";
    let passwordWarning = "";

    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }

    if (!password) {
      passwordWarning = "*Please enter your password";
    }

    setWarnings({ email: emailWarning, password: passwordWarning });

    if (!emailWarning && !passwordWarning && email && password) {
      console.log("Logging in with email:", email);
      navigate("/explore");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentialDecoded = jwt_decode(credentialResponse.credential);
    console.log("Google Login Success:", credentialDecoded);
    navigate("/explore");
  };

  const handleGoogleLoginFailure = () => {
    console.log("Login Failed");
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <GoogleOAuthProvider clientId="784513715091-aa0p18bmv854re0amstgj2up3656cvsd.apps.googleusercontent.com">
      <div className="login-outerContainer">
        <div className={`login-container ${isDarkMode ? 'dark-mode' : ''}`}>
          <h2>Login</h2>
          <div className="input-container">
            <label>Email</label>
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
                  setWarnings((prevWarnings) => ({ ...prevWarnings, email: "*Please enter a valid email address!" }));
                }
              }}
            />
            {warnings.email && <p style={{ color: "red" }} className="warningmsg">{warnings.email}</p>}

            <div className="input-container">
            <label>Password</label>
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setWarnings((prevWarnings) => ({ ...prevWarnings, password: "" }));
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setWarnings((prevWarnings) => ({ ...prevWarnings, password: "*Please enter your password" }));
                  }
                }}
              />
              <i
                className="eye"
                onClick={togglePasswordFunction}
              >
                <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
              </i>
            </div>
            {warnings.password && <p style={{ color: "red" }} className="warningmsg">{warnings.password}</p>}
          </div>
          <button onClick={handleLogin}>Login</button>
          <p>
            Forgot your password? <NavLink to="/forgot-password">Reset it here</NavLink>
          </p>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
          <div className="googlelogin">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;