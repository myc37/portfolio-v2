/* eslint-disable @next/next/no-img-element */
import HoverableIcon from "components/HoverableIcon";
import { OTHER, SECTION, SIZE, SOCIAL, TECH } from "constants/enums";
import React, { FC } from "react";
import projectStyles from "./Projects.module.scss";

const Projects = () => {
	return (
		<div className={projectStyles.container}>
			<span className="header">
				<HoverableIcon
					name={SECTION.PROJECTS}
					size={SIZE.LARGE}
					active
					hideLabel
					disableFloat
				/>
				<h1>Personal Projects</h1>
			</span>
			<div className={projectStyles.projectsContainer}>
				{projects.map((project, index) => (
					<ProjectCard
						key={project.name}
						{...project}
						mirror={Boolean(index % 2)}
					/>
				))}
			</div>
		</div>
	);
};

type Project = {
	name: string;
	blurb: string;
	url: string;
	stack: TECH[];
};

const projects: Project[] = [
	{
		name: "WookieLeaks",
		blurb: "WookieLeaks is a Star Wars-themed web page that contains all kinds of information about characters from the hit series. It even has a quiz for you to test how well you know your star wars characters!",
		url: "https://wookie-leaks.vercel.app/",
		stack: [TECH.NEXTJS, TECH.TAILWIND, TECH.PRISMA],
	},
	{
		name: "partnerUp",
		blurb: "partnerUp provides a central platform for users browse posts and join exisiting groups which share their interests or create their own posts to find other like-minded individuals!",
		url: "https://orbital-teamtams-partnerup.herokuapp.com/home",
		stack: [TECH.REACT, TECH.MUI, TECH.FIREBASE, TECH.ALGOLIA],
	},
	{
		name: "financeMeister",
		blurb: "FinanceMeister allows users to input their transactions and generate useful statistics daily, weekly or monthly period. It also features a kanban board for goal setting as well as a news section which displays recent finance-related articles.",
		url: "https://financemeister.vercel.app/",
		stack: [TECH.REACT, TECH.TAILWIND, TECH.CHARTJS, TECH.FIREBASE],
	},
	{
		name: "PlanPal",
		blurb: "PlanPal is a simple scheduler app that helps students to track all their classes, deadlines and other events in one single platform.",
		url: "https://my-planpal.herokuapp.com/",
		stack: [TECH.REACT, TECH.CHAKRA, TECH.PRISMA, TECH.POSTGRESQL],
	},
];

const ProjectCard: FC<Project & { mirror: boolean }> = ({
	name,
	blurb,
	url,
	stack,
	mirror,
}) => {
	const mirrorStyle = mirror ? projectStyles.mirror : "";

	return (
		<div className={`${projectStyles.card} ${mirrorStyle}`}>
			<div className={projectStyles.imageContainer}>
				<img src={`/images/${name.toLowerCase()}.jpg`} alt={name} />
				<div className={projectStyles.overlay}>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<HoverableIcon name={OTHER.WEBSITE} />
					</a>
					<HoverableIcon name={SOCIAL.GITHUB} />
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
