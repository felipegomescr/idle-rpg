import { uid } from "uid";
import type { Activity } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5,
	icon: "/assets/icons/items/ingots/copper-ingot.png",
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
	icon: "/assets/icons/items/ingots/iron-ingot.png",
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

const smeltMithrilIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5,
	icon: "/assets/icons/items/ingots/mithril-ingot.png",
	lootTable: {
		mithrilIngot: 1,
	},
	name: "Mithril Ingot",
	recipe: {
		mithrilOre: 1,
	},
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20,
	icon: "/assets/icons/items/swords/copper-sword.png",
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
	icon: "/assets/icons/items/swords/iron-sword.png",
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

const smithMithrilSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50,
	icon: "/assets/icons/items/swords/mithril-sword.png",
	lootTable: {
		mithrilSword: 1,
	},
	name: "Mithril Sword",
	recipe: {
		mithrilIngot: 4,
	},
	requiredLevel: 10,
	timeToCompletion: 60000,
};

export const smithing = [
	smeltCopperIngot,
	smeltIronIngot,
	smeltMithrilIngot,
	smithCopperSword,
	smithIronSword,
	smithMithrilSword,
];
