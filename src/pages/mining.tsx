import { miningActions as actions } from "@/actions/mining";
import { GatheringSkillTypePageLayout } from "@/components/GatheringSkillTypePageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <GatheringSkillTypePageLayout actions={actions} skill={Skill.MINING} title="Mining" />;
};

export default MiningPage;
