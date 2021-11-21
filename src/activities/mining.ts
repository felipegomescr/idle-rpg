import { uid } from "uid";
import type { Activity, MaterialKey, RewardStatistics } from "@/types";

const mineCopperVein: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 10,
	icon: "/assets/icons/activities/mining/mine-copper-vein.png",
	level: 0,
	name: "Copper Vein",
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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

const mineIronVein: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 15,
	icon: "/assets/icons/activities/mining/mine-iron-vein.png",
	level: 5,
	name: "Iron Vein",
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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

const mineMithrilVein: Activity = {
	id: uid(),
	actionText: "Mine",
	experience: 25,
	icon: "/assets/icons/activities/mining/mine-mithril-vein.png",
	level: 10,
	name: "Mithril Vein",
	rewardTable: new Map<MaterialKey, RewardStatistics>([
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

export const mining = [mineCopperVein, mineIronVein, mineMithrilVein];
