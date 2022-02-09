import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enumerators";
import type { NextPage } from "next";

const ForagingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.FORAGING} />;
};

export default ForagingPage;
