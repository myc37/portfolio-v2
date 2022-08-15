import HoverableIcon from "components/HoverableIcon";
import { socialLinks } from "lib/constants";
import { SECTION, SIZE, SOCIAL } from "lib/enums";
import { handleScroll } from "lib/utils";
import { FC, RefObject, useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import mobileNavbarStyles from "./MobileNavbar.module.scss";

type Props = {
	sectionRefs: Record<SECTION, RefObject<HTMLDivElement>>;
};

const MobileNavbar: FC<Props> = ({ sectionRefs }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [scrollState, setScrollState] = useState({
		active: true,
		position: 0,
	});

	useEffect(() => {
		window.addEventListener("scroll", handleMobileScroll);

		return () => window.removeEventListener("scroll", handleMobileScroll);
	}, []);

	const handleMobileScroll = () =>
		setScrollState((prev) => {
			return {
				active:
					document.body.getBoundingClientRect().top > prev.position,
				position: document.body.getBoundingClientRect().top,
			};
		});

	const handleMenu = () => {
		setOpenMenu((prev) => !prev);
	};

	const handleClose = () => {
		setOpenMenu(false);
	};

	const openStyle = openMenu ? mobileNavbarStyles.open : "";
	const activeStyle = scrollState.active ? mobileNavbarStyles.active : "";

	return (
		<>
			<div
				className={`${mobileNavbarStyles.backdrop} ${openStyle}`}
				onClick={handleClose}
			/>
			<div
				className={`${mobileNavbarStyles.container} ${openStyle} ${activeStyle}`}
			>
				<MdMenuOpen
					onClick={handleMenu}
					className={mobileNavbarStyles.menu}
				/>
				<div className={mobileNavbarStyles.tabs}>
					{Object.values(SECTION).map((section) => (
						<span
							key={section}
							className={mobileNavbarStyles.tab}
							onClick={() => {
								setOpenMenu(false);
								handleScroll(sectionRefs[section]);
							}}
						>
							<HoverableIcon
								name={section}
								size={SIZE.LARGE}
								active
								disableFloat
								hideLabel
							/>
							<h1>{section}</h1>
						</span>
					))}
				</div>
				<div className={mobileNavbarStyles.socials}>
					{Object.values(SOCIAL).map((social) => (
						<a
							key={social}
							href={socialLinks[social]}
							target="_blank"
							rel="noopener noreferrer"
						>
							<HoverableIcon name={social} active />
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default MobileNavbar;
