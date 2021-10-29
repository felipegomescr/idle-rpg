import { useState } from "react";
import { Inventory } from "@/components/Inventory";
import { SkillPageLayout } from "@/components/SkillPageLayout";
import { TreeCard } from "@/components/TreeCard";
import { useMc } from "@/containers/mc";
import { trees } from "@/entities/trees";
import { rollForRewards } from "@/helpers";
import { Tree } from "@/models";
import type { NextPage } from "next";

const WoodcuttingPage: NextPage = () => {
	const [treeBeingChoppedDown, setTreeBeingChoppedDown] = useState<Tree>();
	const mc = useMc();

	return (
		<SkillPageLayout currentExp={mc.woodcutting.exp} skillName="Woodcutting">
			{trees.map((tree) => {
				const isBeingChoppedDown = treeBeingChoppedDown?.name === tree.name;

				return (
					<TreeCard
						key={tree.id}
						isBeingChoppedDown={isBeingChoppedDown}
						isDisabled={(mc.isBusy && !isBeingChoppedDown) || tree.requiredExp > mc.woodcutting.exp}
						tree={tree}
						onClick={(isBeingChoppedDown) => {
							mc.setBusy(!isBeingChoppedDown);
							setTreeBeingChoppedDown(isBeingChoppedDown ? undefined : tree);
						}}
						onReward={(rewardTable, rewardedExp) => {
							rollForRewards(rewardTable).forEach((reward) => {
								mc.inventory.add(reward);
							});

							mc.woodcutting.incBy(rewardedExp);
						}}
					/>
				);
			})}
		</SkillPageLayout>
	);
};

export default WoodcuttingPage;
