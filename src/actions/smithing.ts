import { uid } from "uid";
import { bronzeSword, ironSword, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { Action } from "@/types";

const smithBronzeSword: Action = {
	id: uid(),
	actionText: "Smith",
	expReward: 10 * progressMultiplier,
	lootTable: [bronzeSword],
	name: "Bronze Sword",
	recipe: {
		bronzeOre: 2,
	},
	requiredExp: 0,
	timeToCompletion: 5000 / progressMultiplier,
};

const smithIronSword: Action = {
	id: uid(),
	actionText: "Smith",
	expReward: 20 * progressMultiplier,
	lootTable: [ironSword],
	name: "Iron Sword",
	recipe: {
		ironOre: 4,
	},
	requiredExp: 200,
	timeToCompletion: 10000 / progressMultiplier,
};

const smithSteelSword: Action = {
	id: uid(),
	actionText: "Smith",
	expReward: 30 * progressMultiplier,
	lootTable: [steelSword],
	name: "Steel Sword",
	recipe: {
		steelOre: 6,
	},
	requiredExp: 400,
	timeToCompletion: 15000 / progressMultiplier,
};

export const smithing = [smithBronzeSword, smithIronSword, smithSteelSword];
