import { uid } from "uid";
import type { Activity, MaterialName, RewardStatistics } from "@/types";

const mineCopperOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	icon: "/assets/icons/materials/ores/copper-ore.png",
	level: 0,
	name: "Copper Ore",
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"copperOre",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 4,
			},
		],
		[
			"stone",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

const mineIronOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15,
	icon: "/assets/icons/materials/ores/iron-ore.png",
	level: 5,
	name: "Iron Ore",
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"ironOre",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 4,
			},
		],
		[
			"stone",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

const mineMithrilOre: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25,
	icon: "/assets/icons/materials/ores/mithril-ore.png",
	level: 10,
	name: "Mithril Ore",
	rewardTable: new Map<MaterialName, RewardStatistics>([
		[
			"mithrilOre",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 4,
			},
		],
		[
			"stone",
			{
				minimumNumber: 1,
				maximumNumber: 2,
				weight: 1,
			},
		],
	]),
	timeToCompletion: 10000,
};

export const mining = [mineCopperOre, mineIronOre, mineMithrilOre];
