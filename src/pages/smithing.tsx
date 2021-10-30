import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const SmithingPage: NextPage = () => {
	return <GatheringSkillPageLayout skill={Skill.SMITHING} />;
};

export default SmithingPage;
