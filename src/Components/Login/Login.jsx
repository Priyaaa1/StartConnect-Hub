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
		<div className=" rounded-xl shadow-2xl p-10 w-[500px] max-md:max-w-[320px]  border ">
			<form className="flex flex-col w-full gap-7 justify-center">
				<h2 className="text-2xl font-bold ">Login</h2>
				<input
					type="email"
					placeholder="Email"
					value={email}
					className="focus:outline-none border-none p-2 shadow-lg  "
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					className="focus:outline-none border-none p-2 shadow-lg  "
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin} className="bg-blue-500 p-2 text-white">Login</button>
				<p>
					Don't have an account? <NavLink to="/signup">Sign up</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Login;
