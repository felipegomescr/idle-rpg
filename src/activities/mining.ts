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
	timeToCompletion: 5000 / progressMultiplier,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experienceReward: 20 * progressMultiplier,
	lootTable: [ironOre],
	name: "Iron Ore",
	requiredExperience: 200,
	timeToCompletion: 10000 / progressMultiplier,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experienceReward: 30 * progressMultiplier,
	lootTable: [steelOre],
	name: "Steel Ore",
	requiredExperience: 400,
	timeToCompletion: 15000 / progressMultiplier,
};

export const mining = [mineBronzeOre, mineIronOre, mineSteelOre];
