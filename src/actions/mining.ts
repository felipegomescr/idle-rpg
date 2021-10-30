import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { bronzeOre, ironOre, steelOre } from "@/items";
import type { Action } from "@/models";

const mineBronzeOre: Action = {
	id: uid(),
	actionText: "Mine",
	name: "Bronze Ore",
	requiredExp: 0,
	rewardedExp: 10 * progressModifier,
	rewardTable: [bronzeOre],
	timeUntilReward: 5000 / progressModifier,
};

const mineIronOre: Action = {
	id: uid(),
	actionText: "Mine",
	name: "Iron Ore",
	requiredExp: 200,
	rewardedExp: 20 * progressModifier,
	rewardTable: [ironOre],
	timeUntilReward: 10000 / progressModifier,
};

const mineSteelOre: Action = {
	id: uid(),
	actionText: "Mine",
	name: "Steel Ore",
	requiredExp: 400,
	rewardedExp: 30 * progressModifier,
	rewardTable: [steelOre],
	timeUntilReward: 15000 / progressModifier,
};

export const miningActions = [mineBronzeOre, mineIronOre, mineSteelOre];
