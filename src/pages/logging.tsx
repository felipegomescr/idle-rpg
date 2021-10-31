import { PageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const LoggingPage: NextPage = () => {
	return <PageLayout skill={Skill.LOGGING} />;
};

export default LoggingPage;
