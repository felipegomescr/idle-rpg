import { Toaster } from "react-hot-toast";
import { Navigation } from "@/components";
import { MainCharacterProvider } from "@/containers";
import type { AppProps } from "next/app";

import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/700.css";
import "@reach/tooltip/styles.css";
import "tailwindcss/tailwind.css";
import "@/index.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Toaster />
			<MainCharacterProvider>
				<Navigation />
				<Component {...pageProps} />
			</MainCharacterProvider>
		</>
	);
};

export default CustomApp;
