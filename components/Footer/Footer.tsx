import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
	const today = new Date();

	return (
		<footer>
			Created by N Vijay Narayanan{" "}
			<FaCopyright
				style={{
					display: "inline-block",
					marginLeft: "0.25rem",
					marginRight: "0.25rem",
				}}
			/>{" "}
			{today.getFullYear()}
		</footer>
	);
};

export default Footer;
