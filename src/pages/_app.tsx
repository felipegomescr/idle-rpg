import { Toaster } from "react-hot-toast";
import { Navigation } from "@/components";
import { MainCharacterProvider } from "@/containers";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "@reach/tooltip/styles.css";
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
