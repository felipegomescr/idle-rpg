import { useState } from "react";
import { uid } from "uid";
import type { NextPage } from "next";

type Tree = {
	id: string;
	experience: number;
	name: string;
	requiredExperience: number;
	time: number;
	onFinish: () => void;
};

const trees: Tree[] = [
	{
		id: uid(),
		experience: 10,
		name: "Oak",
		requiredExperience: 0,
		time: 5000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 20,
		name: "Willow",
		requiredExperience: 200,
		time: 10000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 30,
		name: "Mahogany",
		requiredExperience: 400,
		time: 15000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 40,
		name: "Teak",
		requiredExperience: 600,
		time: 20000,
		onFinish: () => {
			alert("Finished.");
		},
	},
];

const WoodcuttingPage: NextPage = () => {
	const [currentTree, setCurrentTree] = useState<Tree>();
	const [isBusy, setBusy] = useState(false);
	const [timeLeft, setTimeLeft] = useState(0);
	const [woodcuttingExperience, setWoodcuttingExperience] = useState(0);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">Woodcutting</h1>
			<p>
				<span className="font-bold">Current experience:</span> {woodcuttingExperience}
			</p>
			<div className="grid grid-cols-4 gap-4">
				{trees.map((tree) => {
					const isCurrentTree = currentTree?.name === tree.name;
					const time = (isBusy && isCurrentTree ? timeLeft : tree.time) / 1000;

					return (
						<div
							key={tree.id}
							className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-900 rounded"
						>
							<span className="font-bold">
								{tree.name} - {time.toFixed(1)}s
							</span>
							<span>Required experience: {tree.requiredExperience}</span>
							<button
								className="px-4 py-2 font-medium text-white bg-blue-700 rounded disabled:opacity-50"
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
										setWoodcuttingExperience(woodcuttingExperience + tree.experience);
									}, tree.time);
								}}
							>
								Chop down
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WoodcuttingPage;
