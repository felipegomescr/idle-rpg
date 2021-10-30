import { loggingActions } from "@/actions/logging";
import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const LoggingPage: NextPage = () => {
	return <GatheringSkillPageLayout actions={loggingActions} skill={Skill.LOGGING} title="Logging" />;
};

export default LoggingPage;
