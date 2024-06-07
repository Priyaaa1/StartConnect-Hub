import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    let emailWarning = "";

    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }

    setWarnings({ email: emailWarning });

    if (email && validateEmail(email)) {
      console.log("Logging in with email:", email);
      navigate("/explore");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domainRegex = /\.(com|in|org|net|edu|gov|co)$/; // Add more domains as needed
    return emailRegex.test(email) && domainRegex.test(email);
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
              setWarnings({ email: validateEmail(e.target.value)? "" : "*Please enter a valid email address!" });
            }}
          />
          {warnings.email && <p style={{ color: "red" }} className="warningmsg">{warnings.email}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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