import { ResponsiveProvider } from "hooks/useResponsive";
import "/styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ResponsiveProvider>
			<Component {...pageProps} />
		</ResponsiveProvider>
	);
}

export default MyApp;
