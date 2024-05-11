import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

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
					Don't have an account? <NavLink to="/signup" className="sign-hover">Sign up</NavLink>
				</p>
			</div>
		</div>
	);
};

export default Login;
