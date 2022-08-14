import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
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

	const sectionRefs: Record<SECTION, RefObject<HTMLDivElement>> = {
		Home: homeRef,
		About: aboutRef,
		Work: workRef,
		Projects: projectsRef,
		Contact: contactRef,
	};

	const sectionComponents: Record<SECTION, JSX.Element> = {
		Home: <Hero aboutRef={sectionRefs.About} />,
		About: <About />,
		Work: <Work />,
		Projects: <Projects />,
		Contact: <Contact />,
	};

	return (
		<div>
			<Head>
				<title>Vijay&apos;s Portfolio</title>
				<meta name="description" content="Vijay's Portfolio Website" />
				<link rel="icon" href="/icons/logo.svg" />
			</Head>
			<main>
				<Navbar sectionRefs={sectionRefs} />
				<div className="sections">
					{Object.values(SECTION).map((section) => (
						<div key={section} ref={sectionRefs[section]}>
							{sectionComponents[section]}
						</div>
					))}
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default Home;
