import {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

interface IResponsive {
	isMobile: boolean;
}

const ResponsiveContext = createContext<IResponsive>({
	isMobile: false,
});

interface Props {
	children: ReactNode;
}

export const ResponsiveProvider: FC<Props> = ({ children }) => {
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

	const memoedValue = useMemo(
		() => ({
			isMobile,
		}),
		[isMobile]
	);

	return (
		<ResponsiveContext.Provider value={memoedValue}>
			{children}
		</ResponsiveContext.Provider>
	);
};

export default function useResponsive() {
	return useContext(ResponsiveContext);
}
