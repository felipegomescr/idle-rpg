import { uid } from "uid";
import type { Activity } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	icon: "/assets/icons/activities/mining/mine-copper-ore.png",
	lootTable: {
		copperOre: 1,
		stone: 0.2,
	},
	name: "Copper Ore",
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15,
	icon: "/assets/icons/activities/mining/mine-iron-ore.png",
	lootTable: {
		ironOre: 1,
		stone: 0.2,
	},
	name: "Iron Ore",
	requiredLevel: 5,
	timeToCompletion: 10000,
};

const mineSteelOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25,
	icon: "/assets/icons/activities/mining/mine-steel-ore.png",
	lootTable: {
		steelOre: 1,
		stone: 0.2,
	},
	name: "Steel Ore",
	requiredLevel: 10,
	timeToCompletion: 10000,
};

export const mining = [mineCopperOre, mineIronOre, mineSteelOre];
