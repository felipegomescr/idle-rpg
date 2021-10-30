import { uid } from "uid";
import { bronzeSword, ironSword, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { GatheringAction } from "@/models";

const smithBronzeSword: GatheringAction = {
	id: uid(),
	actionText: "Smith",
	expReward: 10 * progressMultiplier,
	lootTable: [bronzeSword],
	name: "Bronze Sword",
	requiredExp: 0,
	requiredItems: {
		bronzeOre: 2,
	},
	timeToCompletion: 5000 / progressMultiplier,
};

const smithIronSword: GatheringAction = {
	id: uid(),
	actionText: "Smith",
	expReward: 20 * progressMultiplier,
	lootTable: [ironSword],
	name: "Iron Sword",
	requiredExp: 200,
	requiredItems: {
		ironOre: 4,
	},
	timeToCompletion: 10000 / progressMultiplier,
};

const smithSteelSword: GatheringAction = {
	id: uid(),
	actionText: "Smith",
	expReward: 30 * progressMultiplier,
	lootTable: [steelSword],
	name: "Steel Sword",
	requiredExp: 400,
	requiredItems: {
		steelOre: 6,
	},
	timeToCompletion: 15000 / progressMultiplier,
};

export const smithingActions = [smithBronzeSword, smithIronSword, smithSteelSword];
