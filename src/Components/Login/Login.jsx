import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "" });
  const navigate = useNavigate();

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

  return (
    <div className="login-outerContainer">
      <div className="login-container">
        <h2>Login</h2>
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
                setWarnings((prevWarnings) => ({ ...prevWarnings, email: "*Please enter a valid email address!" }));
              }
            }}
          />
          {warnings.email && <p style={{ color: "red" }} className="warningmsg">{warnings.email}</p>}
          <input
            type="password"
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
          {warnings.password && <p style={{ color: "red" }} className="warningmsg">{warnings.password}</p>}
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credentialDecoded = jwtDecode(credentialResponse.credential);
            console.log(credentialDecoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
