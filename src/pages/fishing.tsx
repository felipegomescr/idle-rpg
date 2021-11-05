import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/values";
import type { NextPage } from "next";

const FishingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.FISHING} />;
};

export default FishingPage;
