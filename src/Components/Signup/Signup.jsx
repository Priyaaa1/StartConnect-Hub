import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUp = () => {
		console.log("Signing up with email:", email, "and password:", password);
	};

	return (
		<div className=" rounded-xl shadow-2xl p-10 w-[500px] max-md:max-w-[320px]  border ">
			{" "}
			<form className="flex flex-col w-full gap-7 justify-center">
				<h2 className="text-2xl font-bold ">Sign Up</h2>
				<input
					type="email"
					placeholder="Email"
					className="focus:outline-none border-none p-2 shadow-lg  "
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					className="focus:outline-none border-none p-2 shadow-lg "
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					className="focus:outline-none border-none p-2 shadow-lg "
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button onClick={handleSignUp} className="bg-blue-500 p-2 text-white">Sign Up</button>
				<p>
					Already have an account? <NavLink to="/login">Login</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Signup;
