import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";





const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const hashPassword = async(password) =>{
        return password.split('').reverse().join('');
    }

	const handleLogin = () => {
        try{
            const HashedPassword = hashPassword(password)
        } catch(error){
            console.log("login failed: ",error)
            setErrorMessage("Invalid email or password")
        }
		// console.log("Logging in with email:", email, "and password:", password);
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
				<NavLink to="/explore"><button onClick={handleLogin}>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                </NavLink>
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
