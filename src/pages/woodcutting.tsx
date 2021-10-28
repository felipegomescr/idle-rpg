import { useState } from "react";
import { uid } from "uid";
import type { NextPage } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
const experienceModifier = isDevelopment ? 10 : 1;
const dropRateModifier = isDevelopment ? 10 : 1;
const timeModifier = isDevelopment ? 10 : 1;

enum ItemType {
	LOG,
	MISCELLANEOUS,
}

type Item = {
	id: string;
	dropRate: number;
	name: string;
	type: ItemType;
};

type Tree = {
	id: string;
	dropTable: Item[];
	name: string;
	requiredExperience: number;
	rewardedExperience: number;
	time: number;
};

const birdNest = {
	id: uid(),
	dropRate: 0.5 * dropRateModifier,
	name: "Bird Nest",
	type: ItemType.LOG,
};

const treeList: Tree[] = [
	{
		id: uid(),
		dropTable: [
			{
				id: uid(),
				dropRate: 1 * dropRateModifier,
				name: "Oak Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		name: "Oak",
		requiredExperience: 0,
		rewardedExperience: 10 * experienceModifier,
		time: 5000 / timeModifier,
	},
	{
		id: uid(),
		dropTable: [
			{
				id: uid(),
				dropRate: 1 * dropRateModifier,
				name: "Willow Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		name: "Willow",
		requiredExperience: 200,
		rewardedExperience: 20 * experienceModifier,
		time: 10000 / timeModifier,
	},
	{
		id: uid(),
		dropTable: [
			{
				id: uid(),
				dropRate: 1 * dropRateModifier,
				name: "Mahogany Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		name: "Mahogany",
		requiredExperience: 400,
		rewardedExperience: 30 * experienceModifier,
		time: 15000 / timeModifier,
	},
	{
		id: uid(),
		dropTable: [
			{
				id: uid(),
				dropRate: 1 * dropRateModifier,
				name: "Teak Log",
				type: ItemType.LOG,
			},
			birdNest,
		],
		name: "Teak",
		requiredExperience: 600,
		rewardedExperience: 40 * experienceModifier,
		time: 20000 / timeModifier,
	},
];

const WoodcuttingPage: NextPage = () => {
	const [currentTree, setCurrentTree] = useState<Tree>();
	const [inventory, setInventory] = useState<Item[]>([]);
	const [isBusy, setBusy] = useState(false);
	const [timeLeft, setTimeLeft] = useState(0);
	const [woodcuttingExperience, setWoodcuttingExperience] = useState(0);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">Woodcutting</h1>
			<div>
				<span className="font-bold">Current experience:</span> {woodcuttingExperience}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{treeList.map((tree) => {
					const isCurrentTree = currentTree?.name === tree.name;
					const time = (isBusy && isCurrentTree ? timeLeft : tree.time) / 1000;

					return (
						<div
							key={tree.id}
							className="flex flex-col items-center justify-center p-4 space-y-4 border border-black rounded"
						>
							<span className="font-bold">
								{tree.name} - {time.toFixed(1)}s
							</span>
							<div className="text-center">
								<p>Required experience: {tree.requiredExperience}</p>
								<p>Rewarded experience: {tree.rewardedExperience}</p>
							</div>
							<button
								className="px-4 py-2 font-bold text-white bg-blue-600 rounded disabled:opacity-50"
								disabled={isBusy || tree.requiredExperience > woodcuttingExperience}
								onClick={() => {
									setBusy(true);
									setCurrentTree(tree);
									setTimeLeft(tree.time);

									const intervalId = setInterval(() => {
										setTimeLeft((previousTimeLeft) => {
											return previousTimeLeft - 100;
										});
									}, 100);

									setTimeout(() => {
										clearInterval(intervalId);
										setBusy(false);
										setWoodcuttingExperience(woodcuttingExperience + tree.rewardedExperience);

										const droppedItemList = tree.dropTable.filter((item) => {
											return Math.random() <= item.dropRate;
										});

										setInventory([...inventory, ...droppedItemList]);
									}, tree.time);
								}}
							>
								Chop down
							</button>
						</div>
					);
				})}
			</div>
			<div className="font-bold">Inventory</div>
			<ul className="grid grid-cols-8 gap-2">
				{inventory.map((item, index) => {
					return (
						<li key={index} className="space-x-2">
							<button
								className="w-8 h-8 font-bold text-white bg-red-600 rounded-full"
								onClick={() => {
									setInventory(
										inventory.filter((_, itemIndex) => {
											return itemIndex !== index;
										})
									);
								}}
							>
								&#10005;
							</button>
							<span>{item.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default WoodcuttingPage;
