import { ChangeEventHandler, FC } from "react";
import workStyles from "./Work.module.scss";
import { useState } from "react";
import { SECTION, TECH } from "lib/enums";
import HoverableIcon from "components/HoverableIcon";
import { FaAward } from "react-icons/fa";
import FadeIn from "components/FadeIn";
import SectionHeader from "components/SectionHeader";

const Work = () => {
	const [activeId, setActiveId] = useState(0);

	return (
		<div className={workStyles.container}>
			<FadeIn>
				<SectionHeader section={SECTION.WORK} />
				<div className={workStyles.workContainer}>
					<div className={workStyles.tabs}>
						{workExperiences.map((workExperience, index) => (
							<WorkTab
								key={workExperience.company}
								inputId={`radio-${index + 1}`}
								company={workExperience.company}
								checked={index === activeId}
								onChange={() => setActiveId(index)}
							/>
						))}
						<span className={workStyles.gliderTrack}></span>
						<span className={workStyles.glider}></span>
					</div>
					<WorkDescriptor {...workExperiences[activeId]} />
				</div>
			</FadeIn>
		</div>
	);
};

const WorkTab: FC<{
	company: string;
	inputId: string;
	checked: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ company, inputId, checked, onChange }) => (
	<>
		<input
			type="radio"
			id={inputId}
			checked={checked}
			onChange={onChange}
		/>
		<label className={workStyles.tab} htmlFor={inputId}>
			<h3>{company}</h3>
		</label>
	</>
);

const WorkDescriptor: FC<WorkExperience> = ({
	company,
	role,
	blurb,
	achievements,
	stack,
	start,
	end,
}) => {
	return (
		<div className={workStyles.content}>
			<div>
				<span className={workStyles.header}>
					<h2>{role}</h2>
					<h2> @ {company}</h2>
				</span>
				<h3>
					{start}
					{end ? ` - ${end}` : ""}
				</h3>
			</div>
			<div className={workStyles.body}>
				<p>{blurb}</p>
				<ul>
					{achievements.map((achievement, index) => (
						<li key={index}>
							<FaAward className={workStyles.award} />
							<p>{achievement}</p>
						</li>
					))}
				</ul>
			</div>
			<span className={workStyles.stack}>
				{stack.map((tech) => (
					<HoverableIcon key={tech} name={tech} />
				))}
			</span>
		</div>
	);
};

type WorkExperience = {
	company: string;
	role: string;
	blurb: string;
	achievements: string[];
	stack: TECH[];
	start: string;
	end?: string;
};

const workExperiences: WorkExperience[] = [
	{
		company: "AXS",
		role: "Frontend Dev",
		blurb: "AXS Pte Ltd is a Singaporean SME that provides electronic payment services and solutions, specializing in offering a wide range of online payment options for various transactions such as bills, fines, and public services",
		achievements: [
			"Led frontend development for revamp of the AXS Selection website",
			"Also entrusted to lead the development several new features for version releases of the AXS m-Station mobile app such as the Instarem Remittance calculator and AXS Selection landing page despite short tenure at AXS",
			"Utilized vanilla PHP, HTML, CSS and JavaScript extensively, which helped tremendously with developing my fundamental web development skills",
		],
		stack: [TECH.JAVASCRIPT, TECH.HTML, TECH.CSS, TECH.PHP],
		start: "May",
		end: "July 2023",
	},
	{
		company: "Ethlas",
		role: "Full Stack Dev",
		blurb: "Ethlas is an up-and-coming Web3 Game-Fi startup that aims to bridge the next billion users into the blockchain metaverse",
		achievements: [
			"Spearheaded the launch of major revenue generating features such as the Foundry and Marketplace",
			"Pushed strongly for company-wide engineering excellence by writing up documentation on coding conventions and workflows",
			"Improved technical skills beyond web development in areas such as mobile and game development",
			"Collaborated with and learned from a diverse team of product designers, blockchain engineers and marketing experts",
		],
		stack: [
			TECH.NEXTJS,
			TECH.TAILWIND,
			TECH.FIREBASE,
			TECH.UNITY,
			TECH.GCP,
			TECH.FIGMA,
			TECH.JAVASCRIPT,
			TECH.TYPESCRIPT,
			TECH.CSHARP,
		],
		start: "Feb",
		end: "Aug 2022",
	},
	{
		company: "Skylab",
		role: "Full Stack Dev",
		blurb: "Skylab is the web platform used for the Orbital program, which is NUS School of Computing's self-driven programming summer experience",
		achievements: [
			"Developed an MVP for the revised platform within just 3 months with a small team of 3 software engineers",
			"Assured quality and functionality of production code by conducting end-end testing with Cypress",
			"Kept the team aligned and on track by crafting and managing a detailed sprint-based timeline with granular to-dos",
		],
		stack: [
			TECH.NEXTJS,
			TECH.TAILWIND,
			TECH.PRISMA,
			TECH.EXPRESS,
			TECH.CYPRESS,
			TECH.JIRA,
			TECH.TYPESCRIPT,
		],
		start: "Mar",
		end: "Aug 2022",
	},
];

export default Work;
