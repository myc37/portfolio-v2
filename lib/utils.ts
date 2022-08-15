import { RefObject } from "react";

export const handleScroll = (ref: RefObject<HTMLDivElement>) => {
	ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};
