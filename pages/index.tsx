import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MobileNavbar from "components/MobileNavbar";
import Navbar from "components/Navbar";
import Projects from "components/Projects";
import Work from "components/Work";
import { SECTION } from "lib/enums";
import type { NextPage } from "next";
import Head from "next/head";
import { RefObject, useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const workRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
				{isMobile ? (
					<MobileNavbar sectionRefs={sectionRefs} />
				) : (
					<Navbar sectionRefs={sectionRefs} />
				)}
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
