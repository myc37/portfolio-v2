/* eslint-disable @next/next/no-img-element */
import HoverableIcon from "components/HoverableIcon";
import { SOCIAL, TECH } from "constants/enums";
import React, { FC } from "react";
import projectStyles from "./Projects.module.scss";

const Projects = () => {
	return (
		<div className={projectStyles.container}>
			{projects.map((project, index) => (
				<ProjectCard
					key={project.name}
					{...project}
					mirror={Boolean(index % 2)}
				/>
			))}
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
		blurb: "WookieLeaks is a fun website I made using data from swapi.dev. It has a Star Wars theme and contains all kinds of information about characters from the hit series. It even has a quiz for you to test how well you know your star wars characters!",
		url: "https://wookie-leaks.vercel.app/",
		stack: [TECH.NEXTJS, TECH.TAILWIND, TECH.PRISMA],
	},
	{
		name: "partnerUp",
		blurb: "PlanPal is a simple scheduler app that I made for myself to track all my classes, deadlines and other events so that I could view all my plans for each week in one glance. It helps me to be better organized and any University student can feel free to use it as well!",
		url: "https://orbital-teamtams-partnerup.herokuapp.com/home",
		stack: [TECH.REACT, TECH.MUI, TECH.FIREBASE, TECH.ALGOLIA],
	},
	{
		name: "PlanPal",
		blurb: "Having trouble finding a group for some competition, project or leisure activity that you are interested in? partnerUp provides a central platform for users browse posts and join exisiting groups which share their interests or create their own posts",
		url: "https://my-planpal.herokuapp.com/",
		stack: [TECH.REACT, TECH.CHAKRA, TECH.PRISMA, TECH.POSTGRESQL],
	},
	{
		name: "financeMeister",
		blurb: "FinanceMeister is a web application developed for people seeking to improve their financial health. Users can input their transactions and generate useful statistics daily, weekly or monthly period. It also features a kanban board for goal setting as well as a news section which displays recent finance-related articles.",
		url: "https://financemeister.vercel.app/",
		stack: [TECH.REACT, TECH.TAILWIND, TECH.CHARTJS, TECH.FIREBASE],
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
						<HoverableIcon name={TECH.WEBSITE} />
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
