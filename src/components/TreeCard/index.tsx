import { useRef } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { Item, Tree } from "@/models";

type TreeCardProps = {
	isBeingChoppedDown: boolean;
	isDisabled: boolean;
	tree: Tree;
	onClick: (isBeingChoppedDown: boolean) => void;
	onReward: (rewardTable: Item[], rewardedExp: number) => void;
};

export const TreeCard = ({
	isBeingChoppedDown,
	isDisabled,
	tree,
	onClick: handleClick,
	onReward: handleReward,
}: TreeCardProps) => {
	const timeUntilNextReward = useRef<NodeJS.Timer>();

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-black">
			<span className="font-bold">
				{tree.name} - {parseTimeInMsToTextInSec(tree.timeUntilReward)}
			</span>
			<div className="text-center">
				{isBeingChoppedDown && <ProgressBar duration={tree.timeUntilReward} loop />}
				<p>
					<span className="font-bold">Required experience:</span> {tree.requiredExp}
				</p>
				<p>
					<span className="font-bold">Rewarded experience:</span> {tree.rewardedExp}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (isBeingChoppedDown) {
						clearInterval(timeUntilNextReward.current!);
					} else {
						timeUntilNextReward.current = setInterval(() => {
							handleReward(tree.rewardTable, tree.rewardedExp);
						}, tree.timeUntilReward);
					}

					handleClick(isBeingChoppedDown);
				}}
			>
				{isBeingChoppedDown ? "Cancel" : "Chop down"}
			</button>
		</div>
	);
};
