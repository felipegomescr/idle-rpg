import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enums";
import type { NextPage } from "next";

const FishingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.FISHING} />;
};

export default FishingPage;
