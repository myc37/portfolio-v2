import FadeIn from "components/FadeIn";
import SectionHeader from "components/SectionHeader";
import { SECTION } from "lib/enums";
import aboutStyles from "./About.module.scss";

const About = () => {
	return (
		<div className={aboutStyles.container}>
			<FadeIn>
				<SectionHeader section={SECTION.ABOUT} />
				<div className={aboutStyles.content}>
					<p>
						I am currently a Final Year Computer Science
						undergraduate at the National University of Singapore
						(NUS), with specializations in Software Engineering as
						well as Database Systems.
					</p>
					<p>
						My web development journey started with NUS School of
						Computing&apos;s Orbital program back in May 2020. Since
						then, I&apos;ve found a passion for building
						applications and products that help to improve the lives
						of others. This goal drives me to continuously improve
						my web development skills so that I can make a stronger
						contribution to society.
					</p>
				</div>
			</FadeIn>
		</div>
	);
};

export default About;
