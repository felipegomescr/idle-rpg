import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/values";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.MINING} />;
};

export default MiningPage;
