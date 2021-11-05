import { uid } from "uid";
import { birdNest, oakLog, teakLog, willowLog } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const chopMahogany: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 10 * progressMultiplier,
	lootTable: [birdNest, oakLog],
	name: "Mahogany",
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const chopOak: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 15 * progressMultiplier,
	lootTable: [birdNest, willowLog],
	name: "Oak",
	requiredLevel: 5,
	timeToCompletion: 10000 / progressMultiplier,
};

const chopWillow: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25 * progressMultiplier,
	lootTable: [birdNest, teakLog],
	name: "Willow",
	requiredLevel: 10,
	timeToCompletion: 10000 / progressMultiplier,
};

export const logging = [chopMahogany, chopOak, chopWillow];
