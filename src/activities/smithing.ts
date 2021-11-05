import { uid } from "uid";
import { copperIngot, copperSword, ironIngot, ironSword, steelIngot, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5 * progressMultiplier,
	lootTable: {
		copperIngot: 1 * progressMultiplier,
	},
	name: "Copper Ingot",
	recipe: {
		copperOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5 * progressMultiplier,
	lootTable: {
		ironIngot: 1 * progressMultiplier,
	},
	name: "Iron Ingot",
	recipe: {
		ironOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smeltSteelIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5 * progressMultiplier,
	lootTable: {
		steelIngot: 1 * progressMultiplier,
	},
	name: "Steel Ingot",
	recipe: {
		steelOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20 * progressMultiplier,
	lootTable: {
		copperSword: 1 * progressMultiplier,
	},
	name: "Copper Sword",
	recipe: {
		copperIngot: 4,
	},
	requiredLevel: 0,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30 * progressMultiplier,
	lootTable: {
		ironSword: 1 * progressMultiplier,
	},
	name: "Iron Sword",
	recipe: {
		ironIngot: 4,
	},
	requiredLevel: 5,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithSteelSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50 * progressMultiplier,
	lootTable: {
		steelSword: 1 * progressMultiplier,
	},
	name: "Steel Sword",
	recipe: {
		steelIngot: 4,
	},
	requiredLevel: 10,
	timeToCompletion: 60000 / progressMultiplier,
};

export const smithing = [
	smeltCopperIngot,
	smeltIronIngot,
	smeltSteelIngot,
	smithCopperSword,
	smithIronSword,
	smithSteelSword,
];
