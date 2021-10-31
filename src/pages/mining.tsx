import { SkillPageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <SkillPageLayout skill={Skill.MINING} />;
};

export default MiningPage;
