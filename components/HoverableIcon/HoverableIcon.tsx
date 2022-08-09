import React, { FC, MouseEventHandler } from "react";
import { IconContext } from "react-icons";
import {
	SiAlgolia,
	SiChakraui,
	SiExpress,
	SiFirebase,
	SiMaterialui,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
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
		case "Algolia":
			return <SiAlgolia />;
		case "Chakra":
			return <SiChakraui />;
		case "Express":
			return <SiExpress />;
		case "Firebase":
			return <SiFirebase />;
		case "Material":
			return <SiMaterialui />;
		case "Next.js":
			return <SiNextdotjs />;
		case "Postgresql":
			return <SiPostgresql />;
		case "Prisma":
			return <SiPrisma />;
		case "React":
			return <SiReact />;
		case "Tailwind":
			return <SiTailwindcss />;
		case "Github":
			return <FaGithub />;
		case "Linkedin":
			return <FaLinkedin />;
		case "Resume":
			return <FaFilePdf />;
		case "Telegram":
			return <FaTelegramPlane />;
		case "Home":
			return <MdHome />;
		case "Work":
			return <MdWork />;
		case "Projects":
			return <MdCode />;
		case "Contact":
			return <MdEmail />;
		case "About":
			return <MdPerson />;
		case "Dark":
			return <MdOutlineDarkMode />;
		case "Light":
			return <MdOutlineLightMode />;
		case "Website":
			return <FiExternalLink />;
		default:
			return <FaQuestionCircle />;
	}
};

export default HoverableIcon;
