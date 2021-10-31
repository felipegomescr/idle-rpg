import { SkillPageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const SmithingPage: NextPage = () => {
	return <SkillPageLayout skill={Skill.SMITHING} />;
};

export default SmithingPage;
