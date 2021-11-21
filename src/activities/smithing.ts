import { uid } from "uid";
import type { Activity, MaterialKey, RewardStatistics } from "@/types";

const smeltCopperIngot: Activity = {
	id: uid(),
	actionText: "Smelt",
	description: "An ingot obtained from smelting copper ore.",
	experience: 5,
	icon: "/assets/icons/activities/smithing/smelt-copper-ingot.png",
	level: 0,
	name: "Copper Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["copperOre", 1]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
	description: "An ingot obtained from smelting iron ore.",
	experience: 7.5,
	icon: "/assets/icons/activities/smithing/smelt-iron-ingot.png",
	level: 5,
	name: "Iron Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["ironOre", 1]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
	description: "An ingot obtained from smelting mithril ore.",
	experience: 12.5,
	icon: "/assets/icons/activities/smithing/smelt-mithril-ingot.png",
	level: 10,
	name: "Mithril Ingot",
	requiredMaterialList: new Map<MaterialKey, number>([["mithrilOre", 1]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
	description: "A sword made from smithed copper.",
	experience: 20,
	icon: "/assets/icons/activities/smithing/smith-copper-sword.png",
	level: 0,
	name: "Copper Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["copperIngot", 4]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
	description: "A sword made from smithed iron.",
	experience: 30,
	icon: "/assets/icons/activities/smithing/smith-iron-sword.png",
	level: 5,
	name: "Iron Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["ironIngot", 4]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
	description: "A sword made from smithed mithril.",
	experience: 50,
	icon: "/assets/icons/activities/smithing/smith-mithril-sword.png",
	level: 10,
	name: "Mithril Sword",
	requiredMaterialList: new Map<MaterialKey, number>([["mithrilIngot", 4]]),
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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
