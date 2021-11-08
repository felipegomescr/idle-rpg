import { uid } from "uid";
import type { Activity, ItemKey, LootStatistics } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5,
	icon: "/assets/icons/items/ingots/copper-ingot.png",
	level: 0,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"copperIngot",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Copper Ingot",
	requiredItemList: new Map<ItemKey, number>([["copperOre", 1]]),
	timeToCompletion: 10000,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5,
	icon: "/assets/icons/items/ingots/iron-ingot.png",
	level: 5,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"ironIngot",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Iron Ingot",
	requiredItemList: new Map<ItemKey, number>([["ironOre", 1]]),
	timeToCompletion: 10000,
};

const smeltMithrilIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5,
	icon: "/assets/icons/items/ingots/mithril-ingot.png",
	level: 10,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"mithrilIngot",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Mithril Ingot",
	requiredItemList: new Map<ItemKey, number>([["mithrilOre", 1]]),
	timeToCompletion: 10000,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20,
	icon: "/assets/icons/items/swords/copper-sword.png",
	level: 0,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"copperSword",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Copper Sword",
	requiredItemList: new Map<ItemKey, number>([["copperIngot", 4]]),
	timeToCompletion: 60000,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30,
	icon: "/assets/icons/items/swords/iron-sword.png",
	level: 5,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"ironSword",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Iron Sword",
	requiredItemList: new Map<ItemKey, number>([["ironIngot", 4]]),
	timeToCompletion: 60000,
};

const smithMithrilSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50,
	icon: "/assets/icons/items/swords/mithril-sword.png",
	level: 10,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"mithrilSword",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 1,
			},
		],
	]),
	name: "Mithril Sword",
	requiredItemList: new Map<ItemKey, number>([["mithrilIngot", 4]]),
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
