import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Import your CSS file for styling (limited styles)

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [warnings, setWarnings] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    let emailWarning = "";
    if (!email) {
      emailWarning = "* Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "* Please enter a valid email address!";
    }
    setWarnings({ email: emailWarning });

    if (!emailWarning && email) {
      setIsLoading(true); // Set loading state to true
      try {
        // Simulate sending a password reset email (replace with actual logic)
        console.log("Sending password reset email to:", email);
        alert("A password reset link has been sent to your email address.");
        navigate("/login"); // Redirect to login page after successful simulation
      } catch (error) {
        console.error("Error simulating password reset email:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false); // Set loading state to false after execution
      }
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form"> {/* Basic styling assumed */}
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
            <p style={{ color: "red" }} className="warningmsg">
              {warnings.email}
            </p>
          )}
        </div>
        <button disabled={isLoading} onClick={handleForgotPassword}>
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
