import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/values";
import type { NextPage } from "next";

const CarvingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.CARVING} />;
};

export default CarvingPage;
