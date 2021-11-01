import { uid } from "uid";
import { bronzeOre, ironOre, steelOre } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const mineBronzeOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experienceReward: 10 * progressMultiplier,
	lootTable: [bronzeOre],
	name: "Bronze Ore",
	requiredExperience: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experienceReward: 15 * progressMultiplier,
	lootTable: [ironOre],
	name: "Iron Ore",
	requiredExperience: 2250,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experienceReward: 25 * progressMultiplier,
	lootTable: [steelOre],
	name: "Steel Ore",
	requiredExperience: 9500,
	timeToCompletion: 10000 / progressMultiplier,
};

export const mining = [mineBronzeOre, mineIronOre, mineSteelOre];
