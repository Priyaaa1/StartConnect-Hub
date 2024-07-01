import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useSelector } from 'react-redux';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "", confirmPassword: "" });
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!emailValue) {
      setWarnings({ ...warnings, email: "*Please enter your email" });
    } else if (!validateEmail(emailValue)) {
      setWarnings({ ...warnings, email: "*Please enter a valid email address!" });
    } else {
      setWarnings({ ...warnings, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (!passwordValue) {
      setWarnings({ ...warnings, password: "*Please enter your password" });
    } else if (!validatePassword(passwordValue)) {
      setWarnings({ ...warnings, password: "Password should be 4 to 16 characters and mustn't have special characters!" });
    } else {
      setWarnings({ ...warnings, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (!confirmPasswordValue) {
      setWarnings({ ...warnings, confirmPassword: "*Please enter your confirm password" });
    } else if (password !== confirmPasswordValue) {
      setWarnings({ ...warnings, confirmPassword: "Passwords do not match!" });
    } else {
      setWarnings({ ...warnings, confirmPassword: "" });
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
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <SignupWrapper className={theme}>
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
            {warnings.email && <p className="warningmsg">{warnings.email}</p>}
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
            {warnings.password && <p className="warningmsg">{warnings.password}</p>}
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
            {warnings.confirmPassword && <p className="warningmsg">{warnings.confirmPassword}</p>}
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialDecoded);
            }}
            onError={() => {
              console.log("Sign-Up Failed");
            }}
          />
        </div>
      </SignupWrapper>
    </GoogleOAuthProvider>
  );
};

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 10px;

  &.dark {
    background-color: #333;
    color: #fff;
  }

  &.light {
    background-color: #fff;
    color: #000;
  }

  .signup-container {
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #91a6ff 74%);
    width: 400px;
    margin: 0 auto;
    padding: 10px 10px 20px 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &.dark {
      background-color: #1e1e1e;
      background-image: none;
      color: #f0f0f0;
    }
  }

  .input-field {
    padding: 20px;
    border: none;

    input {
      width: 100%;
      margin-bottom: 20px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-sizing: border-box;
      outline: none;

      &.dark {
        background-color: #333;
        color: #f0f0f0;
        border: 1px solid #555;
      }
    }
  }

  .warningmsg {
    margin: 0;
    text-align: left;
    padding: 0;
    margin-bottom: 10px;
    color: red;
  }

  button {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  p {
    margin-top: 10px;
    text-align: center;
    padding-bottom: 20px;

    a {
      color: #007bff;
      text-decoration: none;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }

      &.dark {
        color: #66b2ff;

        &:hover {
          color: #3399ff;
        }
      }
    }
  }
`;

export default Signup;
