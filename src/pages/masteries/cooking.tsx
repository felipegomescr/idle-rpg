import { MasteryPageTemplate } from "@/components";
import { Mastery } from "@/enumerators";
import type { NextPage } from "next";

const CookingPage: NextPage = () => {
	return <MasteryPageTemplate mastery={Mastery.COOKING} />;
};

export default CookingPage;
