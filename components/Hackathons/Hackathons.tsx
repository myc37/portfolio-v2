/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import FadeIn from "components/FadeIn";
import HoverableIcon from "components/HoverableIcon";
import SectionHeader from "components/SectionHeader";
import { OTHER, SECTION, SIZE, SOCIAL, TECH } from "lib/enums";
import { FC } from "react";
import hackathonsStyles from "./Hackathons.module.scss";
import useResponsive from "hooks/useResponsive";

const Hackathons = () => {
	return (
		<div className={hackathonsStyles.container}>
			<FadeIn>
				<SectionHeader section={SECTION.HACKATHONS} />
				<div className={hackathonsStyles.hackathonsContainer}>
					{hackathons.map((hackathon, index) => (
						<HackathonCard
							key={hackathon.name}
							{...hackathon}
							mirror={Boolean(index % 2)}
						/>
					))}
				</div>
			</FadeIn>
		</div>
	);
};

type Hackathon = {
	name: string;
	award: string;
	organizer: string;
	blurb: string;
	url: string;
	githubUrl: string;
	stack: TECH[];
	newsLink?: string;
};

const hackathons: Hackathon[] = [
	{
		name: "B4G",
		award: "Winner",
		organizer: "Open Government Products",
		blurb: "Together with my team Renesan, I built a web app that allows Singaporeans to scan products to find out how and where to recycle them. This project won the grand prize of a $10,000 grant during Build for Good 2023, the first edition of an annual public good hackathon hosted by Open Government Products.<br /><br />Our goal is to tackle the (lack of) recycling problem in Singapore by bringing more Singaporeans to recycling bins through the convenience provided by our app. Im proud to say that my team was headlined by Straits Times and CNA, and was also endorsed by Minister Low Yen Ling.",
		url: "https://trashaway.vercel.app/",
		githubUrl: "https://github.com/myc37/renesan-app",
		stack: [TECH.NEXTJS, TECH.CHAKRA, TECH.PRISMA, TECH.POSTGRESQL],
		newsLink:
			"https://www.straitstimes.com/singapore/students-create-app-that-lets-users-scan-barcodes-on-packaging-to-see-how-items-can-be-recycled#:~:text=TrashAway%2C%20developed%20by%20a%20group,at%20the%20finale%20on%20Saturday.",
	},
	{
		name: "Code Dojo",
		award: "Runner Up",
		organizer: "Ninjavan",
		blurb: "Code Dojo 2023, which took place in February, provided my team and I with an opportunity to support Ninjavan's last mile drivers. We developed a web app that provides these drivers with transparency regarding their monthly income, while also actively incentivizing them to deliver more parcels.<br /><br />We managed to achieve 2nd place, owing strongly to our well-designed and polished prototype that we managed to build in under 24 hours.",
		url: "https://trashaway.vercel.app/",
		githubUrl: "https://github.com/myc37/snek",
		stack: [TECH.NEXTJS, TECH.MUI, TECH.PRISMA, TECH.MONGODB],
	},
	{
		name: "H4G",
		award: "Finalist",
		organizer: "NUS GDSC",
		blurb: "SG:Enable put out a problem statement for Hack for Good 2023 regarding the welfare of the disabled community of Singapore.<br /><br />My team and I decided that we could do our part to contribute to this community by developing a web app that allows Singaporeans to quickly and easily report disability-access issues around their community so as to foster greater awareness of these problems and urge action from authorities or even from other members of the public who are able to help.",
		url: "https://h4g-2023.vercel.app/",
		githubUrl: "https://github.com/myc37/h4g-2023",
		stack: [TECH.NEXTJS, TECH.CHAKRA, TECH.FIREBASE],
	},
];

const HackathonCard: FC<Hackathon & { mirror: boolean }> = ({
	name,
	award,
	organizer,
	blurb,
	url,
	githubUrl,
	stack,
	mirror,
	newsLink,
}) => {
	const mirrorStyle = mirror ? hackathonsStyles.mirror : "";
	const { isMobile } = useResponsive();
	const size = isMobile ? undefined : SIZE.MEDIUM;

	const GitHubButton = () => (
		<a href={githubUrl} target="_blank" rel="noopener noreferrer">
			<HoverableIcon size={size} name={SOCIAL.GITHUB} />
		</a>
	);

	const WebsiteButton = () => (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<HoverableIcon size={size} name={OTHER.WEBSITE} />
		</a>
	);

	const NewsButton = () =>
		newsLink ? (
			<a href={newsLink} target="_blank" rel="noopener noreferrer">
				<HoverableIcon size={size} name={OTHER.NEWS} />
			</a>
		) : (
			<></>
		);

	return (
		<div className={`${hackathonsStyles.card} ${mirrorStyle}`}>
			<div className={hackathonsStyles.mobileHeader}>
				<div className={hackathonsStyles.mobileHeaderIdentifier}>
					<h1>{name}</h1>{" "}
					<div>
						<p>by</p> <h4>{organizer}</h4>
					</div>
				</div>
				<div className={hackathonsStyles.mobileHeaderInfo}>
					<h1>{award}</h1>
					<span className={hackathonsStyles.mobileCta}>
						<GitHubButton />
						<WebsiteButton />
					</span>
				</div>
			</div>
			<div className={hackathonsStyles.imageContainer}>
				<img
					src={`/images/${name.replace(/\s/g, "").toLowerCase()}.png`}
					alt={name}
				/>
				<div className={hackathonsStyles.overlay}>
					<GitHubButton />
					<WebsiteButton />
					<NewsButton />
				</div>
			</div>
			<div className={`${hackathonsStyles.descriptor} ${mirrorStyle}`}>
				<div className={`${hackathonsStyles.header} ${mirrorStyle}`}>
					<h1>{name}</h1>
					<h1>{award}</h1>
				</div>
				<div className={`${hackathonsStyles.organizer} ${mirrorStyle}`}>
					<h4>organized by</h4> <h4>{organizer}</h4>
				</div>
				<p
					className={hackathonsStyles.blurb}
					dangerouslySetInnerHTML={{ __html: blurb }}
				/>
				<span className={`${hackathonsStyles.stack} ${mirrorStyle}`}>
					{stack.map((tech) => (
						<HoverableIcon key={tech} name={tech} />
					))}
				</span>
			</div>
		</div>
	);
};

export default Hackathons;
