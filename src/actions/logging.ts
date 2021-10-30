import { uid } from "uid";
import { birdNest, oakLog, teakLog, willowLog } from "@/items";
import { progressMultiplier } from "@/values";
import type { GatheringAction } from "@/models";

const chopMahogany: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 10 * progressMultiplier,
	lootTable: [birdNest, oakLog],
	name: "Mahogany",
	requiredExp: 0,
	timeToCompletion: 5000 / progressMultiplier,
};

const chopOak: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 20 * progressMultiplier,
	lootTable: [birdNest, willowLog],
	name: "Oak",
	requiredExp: 200,
	timeToCompletion: 10000 / progressMultiplier,
};

const chopWillow: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 30 * progressMultiplier,
	lootTable: [birdNest, teakLog],
	name: "Willow",
	requiredExp: 400,
	timeToCompletion: 15000 / progressMultiplier,
};

export const loggingActions = [chopMahogany, chopOak, chopWillow];
