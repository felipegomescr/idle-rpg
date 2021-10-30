import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { birdNest, oakLog, teakLog, willowLog } from "@/items";
import type { GatheringAction } from "@/models";

const chopMahogany: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 10 * progressModifier,
	lootTable: [birdNest, oakLog],
	name: "Mahogany",
	requiredExp: 0,
	timeToCompletion: 5000 / progressModifier,
};

const chopOak: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 20 * progressModifier,
	lootTable: [birdNest, willowLog],
	name: "Oak",
	requiredExp: 200,
	timeToCompletion: 10000 / progressModifier,
};

const chopWillow: GatheringAction = {
	id: uid(),
	actionText: "Chop",
	expReward: 30 * progressModifier,
	lootTable: [birdNest, teakLog],
	name: "Willow",
	requiredExp: 400,
	timeToCompletion: 15000 / progressModifier,
};

export const loggingActions = [chopMahogany, chopOak, chopWillow];
