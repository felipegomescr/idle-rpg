import { Navigation } from "@/components";
import { McProvider } from "@/containers";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<McProvider>
			<Navigation />
			<Component {...pageProps} />
		</McProvider>
	);
};

export default CustomApp;
