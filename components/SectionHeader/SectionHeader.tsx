import HoverableIcon from "components/HoverableIcon";
import { SECTION, SIZE } from "lib/enums";
import { FC } from "react";

type Props = {
	section: SECTION;
};

const SectionHeader: FC<Props> = ({ section }) => {
	return (
		<span className="header">
			<HoverableIcon
				name={section}
				size={SIZE.LARGE}
				active
				hideLabel
				disableFloat
			/>
			<h1>{sectionTitles[section]}</h1>
		</span>
	);
};

const sectionTitles: Record<SECTION, string> = {
	Home: "",
	About: "About Me",
	Hackathons: "Hackathons",
	Work: "Work Experiences",
	Projects: "Personal Projects",
	Contact: "Get In Touch!",
};

export default SectionHeader;
