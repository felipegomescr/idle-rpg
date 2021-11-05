import { uid } from "uid";
import type { Activity } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5,
	lootTable: {
		copperIngot: 1,
	},
	name: "Copper Ingot",
	recipe: {
		copperOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5,
	lootTable: {
		ironIngot: 1,
	},
	name: "Iron Ingot",
	recipe: {
		ironOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const smeltSteelIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5,
	lootTable: {
		steelIngot: 1,
	},
	name: "Steel Ingot",
	recipe: {
		steelOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20,
	lootTable: {
		copperSword: 1,
	},
	name: "Copper Sword",
	recipe: {
		copperIngot: 4,
	},
	requiredLevel: 0,
	timeToCompletion: 60000,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30,
	lootTable: {
		ironSword: 1,
	},
	name: "Iron Sword",
	recipe: {
		ironIngot: 4,
	},
	requiredLevel: 5,
	timeToCompletion: 60000,
};

const smithSteelSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50,
	lootTable: {
		steelSword: 1,
	},
	name: "Steel Sword",
	recipe: {
		steelIngot: 4,
	},
	requiredLevel: 10,
	timeToCompletion: 60000,
};

export const smithing = [
	smeltCopperIngot,
	smeltIronIngot,
	smeltSteelIngot,
	smithCopperSword,
	smithIronSword,
	smithSteelSword,
];
