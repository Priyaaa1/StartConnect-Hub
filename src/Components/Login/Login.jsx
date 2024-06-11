import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";

import PLogin from "../LoginPage/PLogin";

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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="login-outerContainer">
      <div>
        <PLogin/>
      </div>
    </div>
  );
};

export default Login;
