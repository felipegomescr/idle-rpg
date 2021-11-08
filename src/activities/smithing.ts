import { uid } from "uid";
import type { Activity, LootStatistics, MaterialKey } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5,
	icon: "/assets/icons/materials/ingots/copper-ingot.png",
	level: 0,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"copperIngot",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Copper Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["copperOre", 1]]),
	timeToCompletion: 10000,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5,
	icon: "/assets/icons/materials/ingots/iron-ingot.png",
	level: 5,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"ironIngot",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Iron Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["ironOre", 1]]),
	timeToCompletion: 10000,
};

const smeltMithrilIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5,
	icon: "/assets/icons/materials/ingots/mithril-ingot.png",
	level: 10,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"mithrilIngot",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Mithril Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["mithrilOre", 1]]),
	timeToCompletion: 10000,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20,
	icon: "/assets/icons/materials/swords/copper-sword.png",
	level: 0,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"copperSword",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Copper Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["copperIngot", 4]]),
	timeToCompletion: 60000,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30,
	icon: "/assets/icons/materials/swords/iron-sword.png",
	level: 5,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"ironSword",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Iron Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["ironIngot", 4]]),
	timeToCompletion: 60000,
};

const smithMithrilSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50,
	icon: "/assets/icons/materials/swords/mithril-sword.png",
	level: 10,
	lootTable: new Map<MaterialKey, LootStatistics>([
		[
			"mithrilSword",
			{
				chance: 1,
				minimumNumber: 1,
				maximumNumber: 1,
			},
		],
	]),
	name: "Mithril Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["mithrilIngot", 4]]),
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
