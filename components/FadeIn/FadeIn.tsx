import { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

type Props = {
	direction?: "down" | "left" | "right" | "up";
	delay?: number;
	children: ReactNode;
};

const FadeIn: FC<Props> = ({ direction, delay, children }) => {
	return (
		<Fade
			cascade
			triggerOnce
			damping={0.25}
			direction={direction}
			delay={delay}
		>
			{children}
		</Fade>
	);
};

export default FadeIn;
