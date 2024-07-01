import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [warnings, setWarnings] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";

  const handleForgotPassword = async () => {
    let emailWarning = "";
    if (!email) {
      emailWarning = "* Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "* Please enter a valid email address!";
    }
    setWarnings({ email: emailWarning });

    if (!emailWarning && email) {
      setIsLoading(true);
      try {
        console.log("Sending password reset email to:", email);
        alert("A password reset link has been sent to your email address.");
        navigate("/login");
      } catch (error) {
        console.error("Error simulating password reset email:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ForgotPasswordWrapper className={theme}>
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
                  email: "* Please enter a valid email address!",
                }));
              }
            }}
          />
          {warnings.email && (
            <p className="warningmsg">
              {warnings.email}
            </p>
          )}
        </div>
        <button disabled={isLoading} onClick={handleForgotPassword}>
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </ForgotPasswordWrapper>
  );
};

const ForgotPasswordWrapper = styled.div`
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

  .forgot-password-form {
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

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

export default ForgotPassword;
