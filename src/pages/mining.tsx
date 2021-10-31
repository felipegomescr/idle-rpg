import { PageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <PageLayout skill={Skill.MINING} />;
};

export default MiningPage;
