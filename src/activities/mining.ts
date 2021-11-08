import { uid } from "uid";
import type { Activity, ItemKey, LootStatistics } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	icon: "/assets/icons/items/ores/copper-ore.png",
	level: 0,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"copperOre",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
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
	icon: "/assets/icons/items/ores/iron-ore.png",
	level: 5,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"ironOre",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
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
	icon: "/assets/icons/items/ores/mithril-ore.png",
	level: 10,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"mithrilOre",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"stone",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
	]),
	name: "Mithril Ore",
	timeToCompletion: 10000,
};

export const mining = [mineCopperOre, mineIronOre, mineMithrilOre];
