import HoverableIcon from "components/HoverableIcon";
import { SECTION, SOCIAL } from "constants/enums";
import React, { useState } from "react";
import navStyles from "./Navbar.module.scss";

const Navbar = () => {
	const [activeSectionId, setActiveSectionId] = useState(0);
	return (
		<nav className={navStyles.container}>
			<div className={navStyles.tabs}>
				{Object.values(SECTION).map((section, index) => (
					<HoverableIcon
						key={section}
						name={section}
						large
						active={index === activeSectionId}
						onClick={() => setActiveSectionId(index)}
					/>
				))}
			</div>
			<div className={navStyles.socials}>
				{Object.values(SOCIAL).map((social) => (
					<HoverableIcon key={social} name={social} />
				))}
			</div>
		</nav>
	);
};

export default Navbar;
