// eslint-disable-next-line @next/next/no-img-element
import FadeIn from "components/FadeIn";
import HoverableIcon from "components/HoverableIcon";
import SectionHeader from "components/SectionHeader";
import { OTHER, SECTION, SOCIAL, TECH } from "lib/enums";
import { FC } from "react";
import projectStyles from "./Projects.module.scss";

const Projects = () => {
	return (
		<div className={projectStyles.container}>
			<FadeIn>
				<SectionHeader section={SECTION.PROJECTS} />
				<div className={projectStyles.projectsContainer}>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.name}
							{...project}
							mirror={Boolean(index % 2)}
						/>
					))}
				</div>
			</FadeIn>
		</div>
	);
};

type Project = {
	name: string;
	blurb: string;
	url: string;
	githubUrl: string;
	stack: TECH[];
};

const projects: Project[] = [
	{
		name: "WookieLeaks",
		blurb: "WookieLeaks is a Star Wars-themed web page that contains all kinds of information about characters from the hit series. It even has a quiz for you to test how well you know your star wars characters!",
		url: "https://wookie-leaks.vercel.app/",
		githubUrl: "https://github.com/myc37/WookieLeaks",
		stack: [TECH.NEXTJS, TECH.TAILWIND, TECH.PRISMA],
	},
	{
		name: "partnerUp",
		blurb: "partnerUp provides a central platform for users browse posts and join exisiting groups which share their interests or create their own posts to find other like-minded individuals!",
		url: "https://orbital-teamtams-partnerup.herokuapp.com/home",
		githubUrl: "https://github.com/myc37/NUS_Orbital_2021",
		stack: [TECH.REACT, TECH.MUI, TECH.FIREBASE, TECH.ALGOLIA],
	},
	{
		name: "financeMeister",
		blurb: "FinanceMeister allows users to input their transactions and generate useful statistics daily, weekly or monthly period. It also features a kanban board for goal setting as well as a news section which displays recent finance-related articles.",
		url: "https://financemeister.vercel.app/",
		githubUrl: "https://github.com/myc37/hacknroll2022",
		stack: [TECH.REACT, TECH.TAILWIND, TECH.CHARTJS, TECH.FIREBASE],
	},
	{
		name: "PlanPal",
		blurb: "PlanPal is a simple scheduler app that helps students to track all their classes, deadlines and other events in one single platform.",
		url: "https://my-planpal.herokuapp.com/",
		githubUrl: "https://github.com/myc37/PlanPal",
		stack: [TECH.REACT, TECH.CHAKRA, TECH.PRISMA, TECH.POSTGRESQL],
	},
];

const ProjectCard: FC<Project & { mirror: boolean }> = ({
	name,
	blurb,
	url,
	githubUrl,
	stack,
	mirror,
}) => {
	const mirrorStyle = mirror ? projectStyles.mirror : "";

	const GitHubButton = () => (
		<a href={githubUrl} target="_blank" rel="noopener noreferrer">
			<HoverableIcon name={SOCIAL.GITHUB} />
		</a>
	);

	const WebsiteButton = () => (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<HoverableIcon name={OTHER.WEBSITE} />
		</a>
	);

	return (
		<div className={`${projectStyles.card} ${mirrorStyle}`}>
			<span className={projectStyles.mobileHeader}>
				<h1>{name}</h1>
				<span className={projectStyles.mobileCta}>
					<GitHubButton />
					<WebsiteButton />
				</span>
			</span>
			<div className={projectStyles.imageContainer}>
				<img src={`/images/${name.toLowerCase()}.jpg`} alt={name} />
				<div className={projectStyles.overlay}>
					<GitHubButton />
					<WebsiteButton />
				</div>
			</div>
			<div className={`${projectStyles.descriptor} ${mirrorStyle}`}>
				<h1 className={`${projectStyles.header} ${mirrorStyle}`}>
					{name}
				</h1>
				<p className={projectStyles.blurb}>{blurb}</p>
				<span className={`${projectStyles.stack} ${mirrorStyle}`}>
					{stack.map((tech) => (
						<HoverableIcon key={tech} name={tech} />
					))}
				</span>
			</div>
		</div>
	);
};

export default Projects;
