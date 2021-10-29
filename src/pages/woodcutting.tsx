import { useRef, useState } from "react";
import { uid } from "uid";
import { Inventory } from "@/components/Inventory";
import { ProgressBar } from "@/components/ProgressBar";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { Item, ItemType, Tree } from "@/types";
import type { NextPage } from "next";

const progressModifier = process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MODIFIER) : 1;

const birdNest = {
	id: uid(),
	dropRate: 0.5 * progressModifier,
	name: "Bird Nest",
	type: ItemType.LOG,
};

const treeList: Tree[] = [
	{
		id: uid(),
		name: "Oak",
		requiredExp: 0,
		rewardedExp: 10 * progressModifier,
		rewardTable: [
			{
				id: uid(),
				dropRate: 1 * progressModifier,
				name: "Oak Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		timeUntilReward: 5000 / progressModifier,
	},
	{
		id: uid(),
		name: "Willow",
		requiredExp: 200,
		rewardedExp: 20 * progressModifier,
		rewardTable: [
			{
				id: uid(),
				dropRate: 1 * progressModifier,
				name: "Willow Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		timeUntilReward: 10000 / progressModifier,
	},
	{
		id: uid(),
		name: "Mahogany",
		requiredExp: 400,
		rewardedExp: 30 * progressModifier,
		rewardTable: [
			{
				id: uid(),
				dropRate: 1 * progressModifier,
				name: "Mahogany Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		timeUntilReward: 15000 / progressModifier,
	},
	{
		id: uid(),
		name: "Teak",
		requiredExp: 600,
		rewardedExp: 40 * progressModifier,
		rewardTable: [
			{
				id: uid(),
				dropRate: 1 * progressModifier,
				name: "Teak Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		timeUntilReward: 20000 / progressModifier,
	},
];

const WoodcuttingPage: NextPage = () => {
	const [inventory, setInventory] = useState<Item[]>([]);
	const [isBusy, setBusy] = useState(false);
	const [treeBeingChoppedDown, setTreeBeingChoppedDown] = useState<Tree>();
	const [woodcuttingExp, setWoodcuttingExp] = useState(0);
	const timeUntilNextReward = useRef<NodeJS.Timer>();

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">Woodcutting</h1>
			<div>
				<span className="font-bold">Current experience:</span> {woodcuttingExp}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{treeList.map((tree) => {
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
								disabled={(isBusy && !isTreeBeingChoppedDown) || tree.requiredExp > woodcuttingExp}
								onClick={() => {
									if (isBusy) {
										setBusy(false);
										setTreeBeingChoppedDown(undefined);

										clearInterval(timeUntilNextReward.current!);
									} else {
										setBusy(true);
										setTreeBeingChoppedDown(tree);

										timeUntilNextReward.current = setInterval(() => {
											const rewardList = tree.rewardTable.filter((item) => {
												return Math.random() <= item.dropRate;
											});

											setInventory((prevInventory) => {
												return [...prevInventory, ...rewardList];
											});
											setWoodcuttingExp((prevWoodcuttingExp) => {
												return prevWoodcuttingExp + tree.rewardedExp;
											});
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
				itemList={inventory}
				onItemDestroy={(_, index) => {
					setInventory(
						inventory.filter((_, itemIndex) => {
							return itemIndex !== index;
						})
					);
				}}
			/>
		</div>
	);
};

export default WoodcuttingPage;
