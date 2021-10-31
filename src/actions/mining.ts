import { uid } from "uid";
import { bronzeOre, ironOre, steelOre } from "@/items";
import { progressMultiplier } from "@/values";
import type { Action } from "@/types";

const mineBronzeOre: Action = {
	id: uid(),
	actionText: "Mine",
	expReward: 10 * progressMultiplier,
	lootTable: [bronzeOre],
	name: "Bronze Ore",
	requiredExp: 0,
	timeToCompletion: 5000 / progressMultiplier,
};

const mineIronOre: Action = {
	id: uid(),
	actionText: "Mine",
	expReward: 20 * progressMultiplier,
	lootTable: [ironOre],
	name: "Iron Ore",
	requiredExp: 200,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineSteelOre: Action = {
	id: uid(),
	actionText: "Mine",
	expReward: 30 * progressMultiplier,
	lootTable: [steelOre],
	name: "Steel Ore",
	requiredExp: 400,
	timeToCompletion: 15000 / progressMultiplier,
};

export const mining = [mineBronzeOre, mineIronOre, mineSteelOre];
