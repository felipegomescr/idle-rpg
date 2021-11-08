import { uid } from "uid";
import type { Activity, ItemKey, LootStatistics } from "@/types";

const chopOak: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 15,
	icon: "/assets/icons/items/logs/oak-log.png",
	level: 0,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"birdNest",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"oakLog",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
	]),
	name: "Oak",
	timeToCompletion: 10000,
};

const chopPine: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25,
	icon: "/assets/icons/items/logs/pine-log.png",
	level: 5,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"birdNest",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"pineLog",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
	]),
	name: "Pine",
	timeToCompletion: 10000,
};

const chopWillow: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25,
	icon: "/assets/icons/items/logs/willow-log.png",
	level: 10,
	lootTable: new Map<ItemKey, LootStatistics>([
		[
			"birdNest",
			{
				chance: 0.2,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
		[
			"willowLog",
			{
				chance: 1,
				minimumQuantity: 1,
				maximumQuantity: 2,
			},
		],
	]),
	name: "Willow",
	timeToCompletion: 10000,
};

export const logging = [chopOak, chopPine, chopWillow];
