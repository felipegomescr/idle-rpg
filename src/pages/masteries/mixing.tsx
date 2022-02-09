import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enumerators";
import type { NextPage } from "next";

const MixingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.MIXING} />;
};

export default MixingPage;
