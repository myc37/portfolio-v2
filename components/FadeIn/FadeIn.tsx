import { FC, ReactNode } from "react";
import { Fade, FadeDirection } from "react-awesome-reveal";

type Props = {
	direction?: FadeDirection;
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
