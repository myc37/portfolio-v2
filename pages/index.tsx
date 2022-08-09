import Navbar from "components/Navbar";
import Work from "components/Work";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Vijay&apos;s Portfolio</title>
				<meta name="description" content="Vijay's Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<Work />
			</main>
		</div>
	);
};

export default Home;
