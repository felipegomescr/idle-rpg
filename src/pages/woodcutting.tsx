import { woodcuttingActions as actions } from "@/actions/woodcutting";
import { GatheringSkillTypePageLayout } from "@/components/GatheringSkillTypePageLayout";
import { Skill } from "@/models";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <GatheringSkillTypePageLayout actions={actions} skill={Skill.WOODCUTTING} title="Woodcutting" />;
};

export default MiningPage;
