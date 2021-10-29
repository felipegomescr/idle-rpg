import { useRef, useState } from "react";
import { Inventory } from "@/components/Inventory";
import { ProgressBar } from "@/components/ProgressBar";
import { useMc } from "@/containers/mc";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { trees } from "@/entities/trees";
import { Tree } from "@/models";
import type { NextPage } from "next";

const WoodcuttingPage: NextPage = () => {
	const timeUntilNextReward = useRef<NodeJS.Timer>();
	const [isBusy, setBusy] = useState(false);
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
					const isTreeBeingChoppedDown = treeBeingChoppedDown?.name === tree.name;

					return (
						<div key={tree.id} className="flex flex-col items-center justify-center p-4 space-y-4 border border-black">
							<span className="font-bold">
								{tree.name} - {parseTimeInMsToTextInSec(tree.timeUntilReward)}
							</span>
							<div className="text-center">
								{isTreeBeingChoppedDown && <ProgressBar duration={treeBeingChoppedDown.timeUntilReward} loop />}
								<p>
									<span className="font-bold">Required experience:</span> {tree.requiredExp}
								</p>
								<p>
									<span className="font-bold">Rewarded experience:</span> {tree.rewardedExp}
								</p>
							</div>
							<button
								className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
								disabled={(isBusy && !isTreeBeingChoppedDown) || tree.requiredExp > mc.woodcutting.exp}
								onClick={() => {
									if (isBusy) {
										setBusy(false);
										setTreeBeingChoppedDown(undefined);

										clearInterval(timeUntilNextReward.current!);
									} else {
										setBusy(true);
										setTreeBeingChoppedDown(tree);

										timeUntilNextReward.current = setInterval(() => {
											tree.rewardTable
												.filter((item) => {
													// Roll for each reward.
													return Math.random() <= item.dropRate;
												})
												.forEach((reward) => {
													mc.inventory.add(reward);
												});

											mc.woodcutting.incBy(tree.rewardedExp);
										}, tree.timeUntilReward);
									}
								}}
							>
								{isBusy && isTreeBeingChoppedDown ? "Cancel" : "Chop down"}
							</button>
						</div>
					);
				})}
			</div>
			<Inventory
				items={mc.inventory.items}
				onItemDel={(_, itemIndex) => {
					mc.inventory.delAt(itemIndex);
				}}
			/>
		</div>
	);
};

export default WoodcuttingPage;
