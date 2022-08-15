import FadeIn from "components/FadeIn";
import React, { FC, RefObject, useCallback, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import heroStyles from "./Hero.module.scss";

type Props = {
	aboutRef: RefObject<HTMLDivElement>;
};

const Hero: FC<Props> = ({ aboutRef }) => {
	const [introBlurb, setIntroBlurb] = useState("");
	const introBlurbText =
		"Nice to meet you! My name is Vijay, and I hope to make a positive impact on the world through building for the web";
	const delay = 50;

	useEffect(() => {
		const nextIntroBlurb = introBlurbText.slice(0, introBlurb.length + 1);
		const timeout = setTimeout(() => {
			setIntroBlurb(nextIntroBlurb);
			if (nextIntroBlurb === introBlurbText) {
				document
					.getElementsByClassName(heroStyles.blinkingCursor)[0]
					?.classList.add(heroStyles.inactive);
			}
		}, delay * (["!", ","].includes(nextIntroBlurb.charAt(nextIntroBlurb.length - 2)) ? 5 : 1));

		return () => clearTimeout(timeout);
	}, [introBlurb]);

	const handleScroll = () => {
		aboutRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className={heroStyles.container}>
			<div className={heroStyles.content}>
				<p className={heroStyles.blinkingCursor}>{introBlurb}</p>
				<FadeIn
					direction="down"
					delay={introBlurbText.length * delay + 1000}
				>
					<div
						className={heroStyles.arrowContainer}
						onClick={handleScroll}
					>
						{[...Array(3)].map((num) => (
							<FaChevronDown
								key={num}
								className={heroStyles.arrow}
							/>
						))}
					</div>
				</FadeIn>
			</div>
			<ul className={heroStyles.dropContainer}>
				{[...Array(10)].map((num) => (
					<li key={num}>
						<div className={heroStyles.cloverSquare}>
							{[...Array(8)].map((num) => (
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
