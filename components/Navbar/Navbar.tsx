import FadeIn from "components/FadeIn";
import HoverableIcon from "components/HoverableIcon";
import { SECTION, SIZE, SOCIAL } from "constants/enums";
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
		const workSection = sectionRefs.Work.current;
		const projectsSection = sectionRefs.Projects.current;
		const contactSection = sectionRefs.Contact.current;

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
	}, [sectionRefs]);

	const handleScroll = (ref: RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

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

const socialLinks: Record<SOCIAL, string> = {
	Github: "https://github.com/myc37",
	Linkedin: "https://www.linkedin.com/in/n-vijay-narayanan/",
	Telegram: "https://t.me/myc37",
	Resume: "/resumes/May_2022.pdf",
};

export default Navbar;
