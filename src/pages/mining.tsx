import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <GatheringSkillPageLayout skill={Skill.MINING} />;
};

export default MiningPage;
