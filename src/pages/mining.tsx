import { miningActions } from "@/actions/mining";
import { GatheringSkillPageLayout } from "@/components/GatheringSkillPageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <GatheringSkillPageLayout actions={miningActions} skill={Skill.MINING} title="Mining" />;
};

export default MiningPage;
