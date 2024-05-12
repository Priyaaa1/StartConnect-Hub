import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="w-full flex justify-around gap-2 border-t p-5 border-zinc-400">
			<div className="max-sm:text-xs">
				<span >©2024 StartConnect-Hub. All rights reserved.</span>
			</div>
			<ul className="flex gap-10 max-sm:gap-5 max-sm:text-xs ">
				<li>Terms of Services</li>
				<li>Privacy Policy</li>
			</ul>
		</div>
	);
};

export default Footer;
