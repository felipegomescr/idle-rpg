import { SkillPageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const LoggingPage: NextPage = () => {
	return <SkillPageLayout skill={Skill.LOGGING} />;
};

export default LoggingPage;
