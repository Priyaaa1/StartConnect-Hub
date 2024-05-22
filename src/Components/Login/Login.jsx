import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";





const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Logging in with email:", email, "and password:", password);
	};

	return (
		<div className="login-outerContainer">
			<div className="login-container">
				<h2>Login</h2>
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
				<button onClick={handleLogin}>Login</button>
				<p>
					Don't have an account? <NavLink to="/signup">Sign up</NavLink>
				</p>
                <GoogleLogin
                onSuccess={credentialResponse => {
					const credentialDecoded=jwtDecode(credentialResponse.credential);
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
