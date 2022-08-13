import React, { FC, RefObject } from "react";
import { FaChevronDown } from "react-icons/fa";
import heroStyles from "./Hero.module.scss";

type Props = {
	aboutRef: RefObject<HTMLDivElement>;
};

const Hero: FC<Props> = ({ aboutRef }) => {
	const handleScroll = () => {
		aboutRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className={heroStyles.container}>
			<div className={heroStyles.content}>
				<p>
					Nice to meet you! My name is Vijay, and I aspire to make a
					positive impact on the world through web development
				</p>
				<div
					className={heroStyles.arrowContainer}
					onClick={handleScroll}
				>
					{[...Array(3)].map((num) => (
						<FaChevronDown key={num} className={heroStyles.arrow} />
					))}
				</div>
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
