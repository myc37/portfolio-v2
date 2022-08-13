import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
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
			2022{" "}
		</footer>
	);
};

export default Footer;
