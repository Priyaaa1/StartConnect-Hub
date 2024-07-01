import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "" });
  const [isVisible, setVisible] = useState(false);
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";
  const navigate = useNavigate();

  const eye = <FontAwesomeIcon icon={faEye} />;

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

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <LoginWrapper className={theme}>
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
            {warnings.email && <p className="warningmsg">{warnings.email}</p>}
           
            <input
              type={isVisible ? "text" : "password"}
              className="password"
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
            <i className="eye" onClick={togglePasswordFunction}>{eye}</i>
            {warnings.password && <p className="warningmsg">{warnings.password}</p>}
          </div>
          <div className="button-container">
            <button className="nav-button" onClick={handleLogin}>Login</button>
            </div>
          <p>
            Forgot your password? <NavLink to="/forgot-password">Reset it here</NavLink>
          </p>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
      </LoginWrapper>
    </GoogleOAuthProvider>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center vertically */
  padding-bottom: 10px;

  &.dark {
    background-color: #333;
    color: #fff;
  }

  &.light {
    background-color: #fff;
    color: #000;
  }

  .login-container {
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

  .input {
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

    .eye {
      float: right;
      left: -9px;
      margin-top: -45px;
      position: relative;
      z-index: 2;
      width: 14px;
      height: 14px;
      color: #007bff;

      &:hover {
        color: #007efc;
        cursor: pointer;
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
  .button-container {
    display: flex;
    justify-content: center;
  }

  .nav-button {
    width: 50%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    &.dark {
      background-color: #333;
      color: #f0f0f0;
    }

    &.dark:hover {
      background-color: #555;
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

export default Login;