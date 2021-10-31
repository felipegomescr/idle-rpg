import { PageLayout } from "@/components";
import { Skill } from "@/enums";
import type { NextPage } from "next";

const SmithingPage: NextPage = () => {
	return <PageLayout skill={Skill.SMITHING} />;
};

export default SmithingPage;
