import { uid } from "uid";
import { copperOre, ironOre, steelOre } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10 * progressMultiplier,
	lootTable: [copperOre],
	name: "Copper Ore",
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15 * progressMultiplier,
	lootTable: [ironOre],
	name: "Iron Ore",
	requiredLevel: 5,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25 * progressMultiplier,
	lootTable: [steelOre],
	name: "Steel Ore",
	requiredLevel: 10,
	timeToCompletion: 10000 / progressMultiplier,
};

export const mining = [mineCopperOre, mineIronOre, mineSteelOre];
