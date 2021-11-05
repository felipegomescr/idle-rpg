import { uid } from "uid";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10 * progressMultiplier,
	lootTable: {
		copperOre: 1 * progressMultiplier,
	},
	name: "Copper Ore",
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15 * progressMultiplier,
	lootTable: {
		ironOre: 1 * progressMultiplier,
	},
	name: "Iron Ore",
	requiredLevel: 5,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25 * progressMultiplier,
	lootTable: {
		steelOre: 1 * progressMultiplier,
	},
	name: "Steel Ore",
	requiredLevel: 10,
	timeToCompletion: 10000 / progressMultiplier,
};

export const mining = [mineCopperOre, mineIronOre, mineSteelOre];
