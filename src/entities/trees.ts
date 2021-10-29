import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { birdNest, mahoganyLog, oakLog, teakLog, willowLog } from "@/items";
import type { Tree } from "@/models";

const mahogany: Tree = {
	id: uid(),
	name: "Mahogany",
	requiredExp: 0,
	rewardedExp: 10 * progressModifier,
	rewardTable: [birdNest, oakLog],
	timeUntilReward: 5000 / progressModifier,
};

const oak: Tree = {
	id: uid(),
	name: "Oak",
	requiredExp: 200,
	rewardedExp: 20 * progressModifier,
	rewardTable: [birdNest, willowLog],
	timeUntilReward: 10000 / progressModifier,
};

const teak: Tree = {
	id: uid(),
	name: "Teak",
	requiredExp: 400,
	rewardedExp: 30 * progressModifier,
	rewardTable: [birdNest, mahoganyLog],
	timeUntilReward: 15000 / progressModifier,
};

const willow: Tree = {
	id: uid(),
	name: "Willow",
	requiredExp: 600,
	rewardedExp: 40 * progressModifier,
	rewardTable: [birdNest, teakLog],
	timeUntilReward: 20000 / progressModifier,
};

export const trees = [mahogany, oak, teak, willow];
