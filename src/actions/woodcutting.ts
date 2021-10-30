import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { birdNest, oakLog, teakLog, willowLog } from "@/items";
import type { Action } from "@/models";

const chopDownMahogany: Action = {
	id: uid(),
	actionText: "Chop down",
	name: "Mahogany",
	requiredExp: 0,
	rewardedExp: 10 * progressModifier,
	rewardTable: [birdNest, oakLog],
	timeUntilReward: 5000 / progressModifier,
};

const chopDownOak: Action = {
	id: uid(),
	actionText: "Chop down",
	name: "Oak",
	requiredExp: 200,
	rewardedExp: 20 * progressModifier,
	rewardTable: [birdNest, willowLog],
	timeUntilReward: 10000 / progressModifier,
};

const chopDownWillow: Action = {
	id: uid(),
	actionText: "Chop down",
	name: "Willow",
	requiredExp: 400,
	rewardedExp: 30 * progressModifier,
	rewardTable: [birdNest, teakLog],
	timeUntilReward: 15000 / progressModifier,
};

export const woodcuttingActions = [chopDownMahogany, chopDownOak, chopDownWillow];
