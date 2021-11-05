import { uid } from "uid";
import type { Activity } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	lootTable: {
		copperOre: 1,
	},
	name: "Copper Ore",
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15,
	lootTable: {
		ironOre: 1,
	},
	name: "Iron Ore",
	requiredLevel: 5,
	timeToCompletion: 10000,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25,
	lootTable: {
		steelOre: 1,
	},
	name: "Steel Ore",
	requiredLevel: 10,
	timeToCompletion: 10000,
};

export const mining = [mineCopperOre, mineIronOre, mineSteelOre];
