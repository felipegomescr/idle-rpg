import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { bronzeOre, ironOre, steelOre } from "@/items";
import type { GatheringAction } from "@/models";

const mineBronzeOre: GatheringAction = {
	id: uid(),
	actionText: "Mine",
	expReward: 10 * progressModifier,
	lootTable: [bronzeOre],
	name: "Bronze Ore",
	requiredExp: 0,
	timeToCompletion: 5000 / progressModifier,
};

const mineIronOre: GatheringAction = {
	id: uid(),
	actionText: "Mine",
	expReward: 20 * progressModifier,
	lootTable: [ironOre],
	name: "Iron Ore",
	requiredExp: 200,
	timeToCompletion: 10000 / progressModifier,
};

const mineSteelOre: GatheringAction = {
	id: uid(),
	actionText: "Mine",
	expReward: 30 * progressModifier,
	lootTable: [steelOre],
	name: "Steel Ore",
	requiredExp: 400,
	timeToCompletion: 15000 / progressModifier,
};

export const miningActions = [mineBronzeOre, mineIronOre, mineSteelOre];
