import HoverableIcon from "components/HoverableIcon";
import { SECTION, SIZE, SOCIAL } from "constants/enums";
import React, { FC, RefObject, useEffect, useState } from "react";
import navStyles from "./Navbar.module.scss";

type Props = {
	sectionsInfo: Record<SECTION, RefObject<HTMLDivElement>>;
};

const Navbar: FC<Props> = ({ sectionsInfo }) => {
	const [activeSectionId, setActiveSectionId] = useState(0);

	useEffect(() => {
		const homeSection = sectionsInfo.Home.current;
		const aboutSection = sectionsInfo.About.current;
		const workSection = sectionsInfo.Work.current;
		const projectsSection = sectionsInfo.Projects.current;
		const contactSection = sectionsInfo.Contact.current;

		if (
			!homeSection ||
			!aboutSection ||
			!workSection ||
			!projectsSection ||
			!contactSection
		)
			return;

		window.onscroll = function () {
			if (isInView(contactSection)) {
				setActiveSectionId(4);
			} else if (isInView(projectsSection)) {
				setActiveSectionId(3);
			} else if (isInView(workSection)) {
				setActiveSectionId(2);
			} else if (isInView(aboutSection)) {
				setActiveSectionId(1);
			} else {
				setActiveSectionId(0);
			}
		};
	}, [sectionsInfo]);

	const handleScroll = (ref: RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<nav className={navStyles.container}>
			<div className={navStyles.tabs}>
				{Object.values(SECTION).map((section, index) => (
					<HoverableIcon
						key={section}
						name={section}
						size={SIZE.LARGE}
						active={index === activeSectionId}
						onClick={() => handleScroll(sectionsInfo[section])}
					/>
				))}
			</div>
			<div className={navStyles.socials}>
				{Object.values(SOCIAL)
					.filter((social) => social !== SOCIAL.EMAIL)
					.map((social) => (
						<HoverableIcon
							key={social}
							name={social}
							size={SIZE.MEDIUM}
						/>
					))}
			</div>
		</nav>
	);
};

const isInView = (section: HTMLDivElement) => {
	return section.getBoundingClientRect().top <= window.innerHeight / 2;
};

export default Navbar;
