import HoverableIcon from "components/HoverableIcon";
import { SECTION, SIZE } from "constants/enums";
import React from "react";
import aboutStyles from "./About.module.scss";

const About = () => {
	return (
		<div className={aboutStyles.container}>
			<span className="header">
				<HoverableIcon
					name={SECTION.ABOUT}
					size={SIZE.LARGE}
					active
					hideLabel
					disableFloat
				/>
				<h1>About Me</h1>
			</span>
			<div className={aboutStyles.content}>
				<p>
					I am currently a Year 3 Computer Science undergraduate at
					the National University of Singapore. I intend to pursue
					specializations in Software Engineering as well as Database
					Systems, with aspirations of pursuing a career as a Full
					Stack Developer.
				</p>
				<p>
					It brings me great satisfaction and fulfilment to engineer
					applications which help to solve society&apos;s pain points
					and elevate peoples&apos; quality of life. I look forward to
					any and all future opportunities to develop my craft and
					enhance my problem solving skills.
				</p>
			</div>
		</div>
	);
};

export default About;
