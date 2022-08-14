import FadeIn from "components/FadeIn";
import HoverableIcon from "components/HoverableIcon";
import { OTHER, SECTION, SIZE, SOCIAL } from "constants/enums";
import { useEffect, useState } from "react";
import contactStyles from "./Contact.module.scss";

const Contact = () => {
	const [alert, setAlert] = useState("");

	const handleCopyToClipboard = (value: string) => {
		navigator.clipboard.writeText(value);
		setAlert(value);
	};

	useEffect(() => {
		if (alert) {
			const newAlert = document.createElement("div");
			newAlert.innerText = `copied to clipboard!`;
			newAlert.classList.add("custom-alert");
			const contactContainer =
				document.getElementById("contact-container");
			contactContainer?.appendChild(newAlert);

			setTimeout(() => {
				newAlert.remove();
			}, 3000);
		}
	}, [alert]);

	return (
		<div id="contact-container" className={contactStyles.container}>
			<FadeIn>
				<span className="header">
					<HoverableIcon
						name={SECTION.CONTACT}
						size={SIZE.LARGE}
						active
						hideLabel
						disableFloat
					/>
					<h1>Get In Touch!</h1>
				</span>
				<div className={contactStyles.contactContainer}>
					<span>
						<p>
							I am always looking for new opportunities and/or to
							simply expand my network!
						</p>
						<p>
							Feel free to contact me at any of these channels :)
						</p>
					</span>
					<div className={contactStyles.socialContainer}>
						{contactInfos.map(({ name, value }) => (
							<div
								key={name}
								className={contactStyles.social}
								onClick={() => handleCopyToClipboard(value)}
							>
								<HoverableIcon
									active
									disableFloat
									name={name}
								/>
								<h3>{value}</h3>
							</div>
						))}
					</div>
				</div>
			</FadeIn>
		</div>
	);
};

type ContactInfo = {
	name: SOCIAL | OTHER;
	value: string;
};

const contactInfos: ContactInfo[] = [
	{
		name: OTHER.EMAIL,
		value: "nvjn37@gmail.com",
	},
	{
		name: SOCIAL.TELEGRAM,
		value: "@myc37",
	},
	{
		name: SOCIAL.LINKEDIN,
		value: "N Vijay Narayanan",
	},
];

export default Contact;
