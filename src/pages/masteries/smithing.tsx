import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enumerators";
import type { NextPage } from "next";

const SmithingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.SMITHING} />;
};

export default SmithingPage;
