import FadeIn from "components/FadeIn";
import HoverableIcon from "components/HoverableIcon";
import { socialLinks } from "lib/constants";
import { SECTION, SIZE, SOCIAL } from "lib/enums";
import { handleScroll } from "lib/utils";
import { FC, RefObject, useEffect, useState } from "react";
import navStyles from "./Navbar.module.scss";

type Props = {
	sectionRefs: Record<SECTION, RefObject<HTMLDivElement>>;
};

const Navbar: FC<Props> = ({ sectionRefs }) => {
	const [activeSectionId, setActiveSectionId] = useState(0);

	useEffect(() => {
		const homeSection = sectionRefs.Home.current;
		const aboutSection = sectionRefs.About.current;
		const hackathonSection = sectionRefs.Hackathons.current;
		const workSection = sectionRefs.Work.current;
		const projectsSection = sectionRefs.Projects.current;
		const contactSection = sectionRefs.Contact.current;

		if (
			!homeSection ||
			!aboutSection ||
			!hackathonSection ||
			!workSection ||
			!projectsSection ||
			!contactSection
		)
			return;

		window.onscroll = function () {
			if (isInView(contactSection)) {
				setActiveSectionId(5);
			} else if (isInView(projectsSection)) {
				setActiveSectionId(4);
			} else if (isInView(workSection)) {
				setActiveSectionId(3);
			} else if (isInView(hackathonSection)) {
				setActiveSectionId(2);
			} else if (isInView(aboutSection)) {
				setActiveSectionId(1);
			} else {
				setActiveSectionId(0);
			}
		};
	}, [sectionRefs]);

	return (
		<nav className={navStyles.container}>
			<FadeIn direction="left">
				<div className={navStyles.tabs}>
					{Object.values(SECTION).map((section, index) => (
						<HoverableIcon
							key={section}
							name={section}
							size={SIZE.LARGE}
							active={index === activeSectionId}
							onClick={() => handleScroll(sectionRefs[section])}
						/>
					))}
				</div>
				<div className={navStyles.socials}>
					{Object.values(SOCIAL).map((social) => (
						<a
							key={social}
							href={socialLinks[social]}
							target="_blank"
							rel="noopener noreferrer"
						>
							<HoverableIcon name={social} size={SIZE.MEDIUM} />
						</a>
					))}
				</div>
			</FadeIn>
		</nav>
	);
};

const isInView = (section: HTMLDivElement) => {
	return section.getBoundingClientRect().top <= window.innerHeight / 2;
};

export default Navbar;
