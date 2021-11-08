import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/values";
import type { NextPage } from "next";

const LoggingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.LOGGING} />;
};

export default LoggingPage;
