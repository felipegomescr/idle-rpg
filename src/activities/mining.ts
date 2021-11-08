import { uid } from "uid";
import type { Activity, LootStatistics, MaterialKey } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	icon: "/assets/icons/materials/ores/copper-ore.png",
	level: 0,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"copperOre",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
	]),
	name: "Copper Ore",
	timeToCompletion: 10000,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15,
	icon: "/assets/icons/materials/ores/iron-ore.png",
	level: 5,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"ironOre",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
	]),
	name: "Iron Ore",
	timeToCompletion: 10000,
};

const mineMithrilOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25,
	icon: "/assets/icons/materials/ores/mithril-ore.png",
	level: 10,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"mithrilOre",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumNumber: 1,
				maximumNumber: 2,
			},
		],
	]),
	name: "Mithril Ore",
	timeToCompletion: 10000,
};

export const mining = [mineCopperOre, mineIronOre, mineMithrilOre];
