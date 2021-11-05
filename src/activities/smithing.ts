import { uid } from "uid";
import { copperIngot, copperSword, ironIngot, ironSword, steelIngot, steelSword } from "@/items";
import { progressMultiplier } from "@/values";
import type { Activity } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5 * progressMultiplier,
	lootTable: [copperIngot],
	name: "Copper Ingot",
	recipe: {
		copperOre: {
			quantity: 1,
		},
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5 * progressMultiplier,
	lootTable: [ironIngot],
	name: "Iron Ingot",
	recipe: {
		ironOre: {
			quantity: 1,
		},
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smeltSteelIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5 * progressMultiplier,
	lootTable: [steelIngot],
	name: "Steel Ingot",
	recipe: {
		steelOre: {
			quantity: 1,
		},
	},
	requiredLevel: 0,
	timeToCompletion: 10000 / progressMultiplier,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20 * progressMultiplier,
	lootTable: [copperSword],
	name: "Copper Sword",
	recipe: {
		copperIngot: {
			quantity: 4,
		},
	},
	requiredLevel: 0,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30 * progressMultiplier,
	lootTable: [ironSword],
	name: "Iron Sword",
	recipe: {
		ironIngot: {
			quantity: 4,
		},
	},
	requiredLevel: 5,
	timeToCompletion: 60000 / progressMultiplier,
};

const smithSteelSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50 * progressMultiplier,
	lootTable: [steelSword],
	name: "Steel Sword",
	recipe: {
		steelIngot: {
			quantity: 4,
		},
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
