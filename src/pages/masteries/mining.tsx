import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enumerators";
import type { NextPage } from "next";

const MiningPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.MINING} />;
};

export default MiningPage;
