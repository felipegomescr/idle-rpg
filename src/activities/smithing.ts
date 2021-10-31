import { uid } from "uid";
import { bronzeSword, ironSword, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const smithBronzeSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 10 * progressMultiplier,
	lootTable: [bronzeSword],
	name: "Bronze Sword",
	recipe: {
		bronzeOre: 2,
	},
	requiredExperience: 0,
	timeToCompletion: 5000 / progressMultiplier,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 20 * progressMultiplier,
	lootTable: [ironSword],
	name: "Iron Sword",
	recipe: {
		ironOre: 4,
	},
	requiredExperience: 200,
	timeToCompletion: 10000 / progressMultiplier,
};

const smithSteelSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experienceReward: 30 * progressMultiplier,
	lootTable: [steelSword],
	name: "Steel Sword",
	recipe: {
		steelOre: 6,
	},
	requiredExperience: 400,
	timeToCompletion: 15000 / progressMultiplier,
};

export const smithing = [smithBronzeSword, smithIronSword, smithSteelSword];
