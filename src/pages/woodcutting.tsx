import { useState } from "react";
import { Inventory } from "@/components/Inventory";
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
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">Woodcutting</h1>
			<div>
				<span className="font-bold">Current experience:</span> {mc.woodcutting.exp}
			</div>
			<div className="grid grid-cols-4 gap-4">
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
			</div>
			<Inventory
				items={mc.inventory.items}
				onItemDel={(_, itemIndex) => {
					mc.inventory.deleteAt(itemIndex);
				}}
			/>
		</div>
	);
};

export default WoodcuttingPage;
