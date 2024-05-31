import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const hashPassword = (password) => {
        // Simple hashing function (replace with a more secure hashing algorithm)
        return password.split('').reverse().join('');
    };

    const handleLogin = async () => {
        try {
            const hashedPassword = hashPassword(password);
            // Send hashed password to the server for authentication
            // console.log("Hashed password:", hashedPassword);
            // Your authentication logic here (e.g., sending login request to server)
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMessage("Invalid email or password");
        }
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>
                    Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                </p>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const credentialDecoded = jwtDecode(credentialResponse.credential);
                        console.log(credentialDecoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </div>
    );
};

export default Login;
