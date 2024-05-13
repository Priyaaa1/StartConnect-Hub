import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-content">
				<span>©2024 StartConnect-Hub. All rights reserved.</span>
			</div>
			<ul>
				<li>Terms of Services</li>
				<li>Privacy Policy</li>
			</ul>
			<ul> 
			    <li><a href="https://github.com/Priyaaa1/StartConnect-Hub"><img className="Footer-img" src="github-sign.png"></img></a></li>
			    <li><a href=""><img className ="Footer-img" src="linkedin.png"></img></a></li>
			</ul>
		</div>
	);
};

export default Footer;
