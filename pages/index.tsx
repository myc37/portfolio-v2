import About from "components/About";
import Contact from "components/Contact";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";
import Work from "components/Work";
import { SECTION } from "constants/enums";
import type { NextPage } from "next";
import Head from "next/head";
import { RefObject, useRef } from "react";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const workRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const sectionsInfo: Record<SECTION, RefObject<HTMLDivElement>> = {
		Home: homeRef,
		About: aboutRef,
		Work: workRef,
		Projects: projectsRef,
		Contact: contactRef,
	};

	return (
		<div>
			<Head>
				<title>Vijay&apos;s Portfolio</title>
				<meta name="description" content="Vijay's Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar sectionsInfo={sectionsInfo} />
				<div className="sections">
					<div ref={sectionsInfo.Home}>
						<Hero aboutRef={sectionsInfo.About} />
					</div>
					<div ref={sectionsInfo.About}>
						<About />
					</div>
					<div ref={sectionsInfo.Work}>
						<Work />
					</div>
					<div ref={sectionsInfo.Projects}>
						<Projects />
					</div>
					<div ref={sectionsInfo.Contact}>
						<Contact />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
