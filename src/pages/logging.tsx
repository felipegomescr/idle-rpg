import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const LoggingPage: NextPage = () => {
	return <GatheringSkillPageLayout skill={Skill.LOGGING} />;
};

export default LoggingPage;
