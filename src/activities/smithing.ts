import { uid } from "uid";
import { bronzeSword, ironSword, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const smithBronzeSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 40 * progressMultiplier,
	lootTable: [bronzeSword],
	name: "Bronze Sword",
	recipe: {
		bronzeOre: 4,
	},
	requiredExperience: 0,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 60 * progressMultiplier,
	lootTable: [ironSword],
	name: "Iron Sword",
	recipe: {
		ironOre: 4,
	},
	requiredExperience: 2250,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithSteelSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 100 * progressMultiplier,
	lootTable: [steelSword],
	name: "Steel Sword",
	recipe: {
		steelOre: 4,
	},
	requiredExperience: 9500,
	timeToCompletion: 60000 / progressMultiplier,
};

export const smithing = [smithBronzeSword, smithIronSword, smithSteelSword];
