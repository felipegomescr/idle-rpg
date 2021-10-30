import { SkillNavigation } from "@/components/SkillNavigation";
import { McProvider } from "@/containers/mc";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<McProvider>
			<SkillNavigation />
			<Component {...pageProps} />
		</McProvider>
	);
};

export default CustomApp;
