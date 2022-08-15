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
import { OTHER, SECTION, SIZE, SOCIAL, TECH, THEME } from "lib/enums";

type Props = {
	name: SOCIAL | SECTION | TECH | THEME | OTHER;
	size?: SIZE;
	active?: boolean;
	disableFloat?: boolean;
	hideLabel?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
};

const HoverableIcon: FC<Props> = ({
	name,
	size,
	active,
	disableFloat,
	hideLabel,
	onClick,
}) => {
	const sizeStyle =
		size === SIZE.MEDIUM
			? iconStyles.medium
			: size === SIZE.LARGE
			? iconStyles.large
			: "";
	const activeStyle = active ? iconStyles.active : "";
	const floatStyle = disableFloat ? iconStyles.grounded : iconStyles.float;
	const styles = `${sizeStyle} ${activeStyle} ${floatStyle}`;

	return (
		<div onClick={onClick} className={iconStyles.container}>
			<IconContext.Provider
				value={{
					className: `${iconStyles.icon} ${styles}`,
				}}
			>
				{getIcon(name)}
			</IconContext.Provider>
			{hideLabel ? (
				<></>
			) : (
				<h1 className={`${iconStyles.text} ${styles}`}>{name}</h1>
			)}
		</div>
	);
};

const getIcon = (
	name: SOCIAL | SECTION | TECH | THEME | OTHER
): JSX.Element => {
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
		case SOCIAL.GITHUB:
			return <FaGithub />;
		case SOCIAL.LINKEDIN:
			return <FaLinkedin />;
		case SOCIAL.TELEGRAM:
			return <FaTelegramPlane />;
		case SECTION.HOME:
			return <MdHome />;
		case SECTION.WORK:
			return <MdWork />;
		case SECTION.PROJECTS:
			return <MdCode />;
		case SECTION.CONTACT:
		case OTHER.EMAIL:
			return <MdEmail />;
		case SECTION.ABOUT:
			return <MdPerson />;
		case THEME.DARK:
			return <MdOutlineDarkMode />;
		case THEME.LIGHT:
			return <MdOutlineLightMode />;
		case OTHER.WEBSITE:
			return <FiExternalLink />;
		default:
			return <FaQuestionCircle />;
	}
};

export default HoverableIcon;
