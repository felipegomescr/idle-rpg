import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enums";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.MINING} />;
};

export default MiningPage;
