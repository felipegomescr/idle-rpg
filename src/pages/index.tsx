import { useState } from "react";
import { uid } from "uid";
import type { NextPage } from "next";

type Tree = {
	id: string;
	experience: number;
	name: string;
	requiredLevel: number;
	time: number;
	onFinish: () => void;
};

const trees: Tree[] = [
	{
		id: uid(),
		experience: 10,
		name: "Oak",
		requiredLevel: 0,
		time: 5000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 20,
		name: "Willow",
		requiredLevel: 200,
		time: 10000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 30,
		name: "Mahogany",
		requiredLevel: 400,
		time: 15000,
		onFinish: () => {
			alert("Finished.");
		},
	},
	{
		id: uid(),
		experience: 40,
		name: "Teak",
		requiredLevel: 600,
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
		<>
			<h1>Woodcutting</h1>
			<p>Current experience: {woodcuttingExperience}</p>
			{trees.map((tree) => {
				const time = (currentTree?.name === tree.name && isBusy ? timeLeft : tree.time) / 1000;

				return (
					<div key={tree.name}>
						<span>{time}s</span>
						<span>{tree.name}</span>
						<button
							disabled={isBusy || tree.requiredLevel > woodcuttingExperience}
							onClick={() => {
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

								setBusy(true);
								setCurrentTree(tree);
								setTimeLeft(tree.time);
							}}
						>
							Chop down
						</button>
					</div>
				);
			})}
		</>
	);
};

export default WoodcuttingPage;
