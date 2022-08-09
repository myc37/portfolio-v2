import React, { FC, MouseEventHandler } from "react";
import { IconContext } from "react-icons";
import {
	SiAlgolia,
	SiChakraui,
	SiChartdotjs,
	SiCsharp,
	SiCypress,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiGooglecloud,
	SiJavascript,
	SiJira,
	SiMaterialui,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiUnity,
} from "react-icons/si";
import {
	FaGithub,
	FaLinkedin,
	FaFilePdf,
	FaTelegramPlane,
	FaQuestionCircle,
} from "react-icons/fa";
import {
	MdHome,
	MdWork,
	MdCode,
	MdEmail,
	MdPerson,
	MdOutlineDarkMode,
	MdOutlineLightMode,
} from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import iconStyles from "./HoverableIcon.module.scss";
import { SECTION, SOCIAL, TECH, THEME } from "constants/enums";

type Props = {
	name: SOCIAL | SECTION | TECH | THEME;
	large?: boolean;
	active?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
};

const HoverableIcon: FC<Props> = ({ name, large, active, onClick }) => {
	const largeStyle = large ? iconStyles.large : "";
	const activeStyle = active ? iconStyles.active : "";

	return (
		<div onClick={onClick} className={iconStyles.container}>
			<IconContext.Provider
				value={{
					className: `${iconStyles.icon} ${largeStyle} ${activeStyle}`,
				}}
			>
				{getIcon(name)}
			</IconContext.Provider>
			<h1 className={`${iconStyles.text} ${largeStyle} ${activeStyle}`}>
				{name}
			</h1>
		</div>
	);
};

const getIcon = (name: SOCIAL | SECTION | TECH | THEME): JSX.Element => {
	switch (name) {
		case TECH.ALGOLIA:
			return <SiAlgolia />;
		case TECH.CSHARP:
			return <SiCsharp />;
		case TECH.CHAKRA:
			return <SiChakraui />;
		case TECH.CHARTJS:
			return <SiChartdotjs />;
		case TECH.CYPRESS:
			return <SiCypress />;
		case TECH.EXPRESS:
			return <SiExpress />;
		case TECH.FIGMA:
			return <SiFigma />;
		case TECH.FIREBASE:
			return <SiFirebase />;
		case TECH.GCP:
			return <SiGooglecloud />;
		case TECH.JAVASCRIPT:
			return <SiJavascript />;
		case TECH.JIRA:
			return <SiJira />;
		case TECH.MUI:
			return <SiMaterialui />;
		case TECH.NEXTJS:
			return <SiNextdotjs />;
		case TECH.POSTGRESQL:
			return <SiPostgresql />;
		case TECH.PRISMA:
			return <SiPrisma />;
		case TECH.REACT:
			return <SiReact />;
		case TECH.TAILWIND:
			return <SiTailwindcss />;
		case TECH.TYPESCRIPT:
			return <SiTypescript />;
		case TECH.UNITY:
			return <SiUnity />;
		case TECH.WEBSITE:
			return <FiExternalLink />;
		case SOCIAL.GITHUB:
			return <FaGithub />;
		case SOCIAL.LINKEDIN:
			return <FaLinkedin />;
		case SOCIAL.RESUME:
			return <FaFilePdf />;
		case SOCIAL.TELEGRAM:
			return <FaTelegramPlane />;
		case SECTION.HOME:
			return <MdHome />;
		case SECTION.WORK:
			return <MdWork />;
		case SECTION.PROJECTS:
			return <MdCode />;
		case SECTION.CONTACT:
			return <MdEmail />;
		case SECTION.ABOUT:
			return <MdPerson />;
		case THEME.DARK:
			return <MdOutlineDarkMode />;
		case THEME.LIGHT:
			return <MdOutlineLightMode />;
		default:
			return <FaQuestionCircle />;
	}
};

export default HoverableIcon;
