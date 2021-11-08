import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enums";
import type { NextPage } from "next";

const CookingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.COOKING} />;
};

export default CookingPage;
