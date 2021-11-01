import { uid } from "uid";
import { birdNest, oakLog, teakLog, willowLog } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const chopMahogany: Activity = {
	id: uid(),
	actionText: "Chop",
	experienceReward: 10 * progressMultiplier,
	lootTable: [birdNest, oakLog],
	name: "Mahogany",
	requiredExperience: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const chopOak: Activity = {
	id: uid(),
	actionText: "Chop",
	experienceReward: 15 * progressMultiplier,
	lootTable: [birdNest, willowLog],
	name: "Oak",
	requiredExperience: 2250,
	timeToCompletion: 10000 / progressMultiplier,
};

const chopWillow: Activity = {
	id: uid(),
	actionText: "Chop",
	experienceReward: 25 * progressMultiplier,
	lootTable: [birdNest, teakLog],
	name: "Willow",
	requiredExperience: 9500,
	timeToCompletion: 10000 / progressMultiplier,
};

export const logging = [chopMahogany, chopOak, chopWillow];
