import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <GatheringSkillPageLayout skill={Skill.MINING} />;
};

export default MiningPage;
