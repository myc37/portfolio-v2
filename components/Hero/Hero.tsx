import FadeIn from "components/FadeIn";
import React, { FC, RefObject } from "react";
import { FaChevronDown } from "react-icons/fa";
import heroStyles from "./Hero.module.scss";
import { SIZE, SOCIAL } from "lib/enums";
import HoverableIcon from "components/HoverableIcon";
import { socialLinks } from "lib/constants";
import useResponsive from "hooks/useResponsive";

type Props = {
	aboutRef: RefObject<HTMLDivElement>;
};

const Hero: FC<Props> = ({ aboutRef }) => {
	const { isMobile } = useResponsive();

	const handleScroll = () => {
		aboutRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className={heroStyles.container}>
			<div className={heroStyles.content}>
				<FadeIn direction="down">
					<div>
						<p className={heroStyles.greeting}>
							Nice to meet you! My name is
						</p>
						<p className={heroStyles.name}>Vijay.</p>
						<p className={heroStyles.introBlurb}>
							I hope to make a positive impact on the world
							through building for the web.
						</p>
					</div>
					<div>
						<div className={heroStyles.socials}>
							{Object.values(SOCIAL).map((social) => (
								<a
									key={social}
									href={socialLinks[social]}
									target="_blank"
									rel="noopener noreferrer"
								>
									<HoverableIcon
										name={social}
										size={SIZE.MEDIUM}
									/>
								</a>
							))}
						</div>
					</div>
				</FadeIn>
			</div>
			<ul className={heroStyles.dropContainer}>
				{Array.from(Array(10).keys()).map((num) => (
					<li key={num}>
						<div className={heroStyles.cloverSquare}>
							{Array.from(Array(8).keys()).map((num) => (
								<div
									key={num}
									className={heroStyles.cloverLeaf}
								/>
							))}
							<div className={heroStyles.cloverStem}></div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Hero;
