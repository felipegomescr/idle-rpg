import { uid } from "uid";
import type { Activity, MaterialName, RewardStatistics } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 5,
	icon: "/assets/icons/materials/ingots/copper-ingot.png",
	level: 0,
	name: "Copper Ingot",
	requiredMaterialList: new Map<MaterialName, number>([["copperOre", 1]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"copperIngot",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

const smeltIronIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 7.5,
	icon: "/assets/icons/materials/ingots/iron-ingot.png",
	level: 5,
	name: "Iron Ingot",
	requiredMaterialList: new Map<MaterialName, number>([["ironOre", 1]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"ironIngot",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

const smeltMithrilIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	experience: 12.5,
	icon: "/assets/icons/materials/ingots/mithril-ingot.png",
	level: 10,
	name: "Mithril Ingot",
	requiredMaterialList: new Map<MaterialName, number>([["mithrilOre", 1]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"mithrilIngot",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

const smithCopperSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 20,
	icon: "/assets/icons/materials/swords/copper-sword.png",
	level: 0,
	name: "Copper Sword",
	requiredMaterialList: new Map<MaterialName, number>([["copperIngot", 4]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"copperSword",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 60000,
};

const smithIronSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 30,
	icon: "/assets/icons/materials/swords/iron-sword.png",
	level: 5,
	name: "Iron Sword",
	requiredMaterialList: new Map<MaterialName, number>([["ironIngot", 4]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"ironSword",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 60000,
};

const smithMithrilSword: Activity = {
	id: uid(),
	actionText: "Smith",
	experience: 50,
	icon: "/assets/icons/materials/swords/mithril-sword.png",
	level: 10,
	name: "Mithril Sword",
	requiredMaterialList: new Map<MaterialName, number>([["mithrilIngot", 4]]),
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"mithrilSword",
			{
				minimumNumber: 1,
				maximumNumber: 1,
				weight: 1,
			},
		],
	]),
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
