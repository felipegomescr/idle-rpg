import camelCase from "lodash.camelcase";
import * as activityList from "@/activities";
import { Mastery } from "@/values";
import type { Collection, Item, ItemKey } from "@/types";

export const canCreateRecipe = (container: Item[], recipe?: Collection) => {
	if (!recipe || !Object.keys(recipe).length) {
		return true;
	}

	const collection: Collection = (Object.keys(recipe) as ItemKey[]).reduce((collectionAccumulator, itemKey) => {
		const item = container.find((item) => {
			return camelCase(item.name) === itemKey;
		});

		if (!item) {
			return collectionAccumulator;
		}

		const quantity = container.filter((item) => {
			return camelCase(item.name) === itemKey;
		}).length;

		return {
			...collectionAccumulator,
			[camelCase(item.name)]: quantity,
		};
	}, {});

	return (Object.keys(recipe) as ItemKey[]).every((key) => {
		const quantity = collection[key];

		if (!quantity) {
			return false;
		}

		return quantity >= recipe[key]!;
	});
};

export const experienceToLevel = (experience: number) => {
	return Math.floor(Math.floor(25 + Math.sqrt(625 + 100 * experience)) / 50);
};

export const formatTime = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const getActivityList = (mastery: Mastery) => {
	switch (mastery) {
		case Mastery.CARVING:
			return activityList.carving;
		case Mastery.COOKING:
			return activityList.cooking;
		case Mastery.FISHING:
			return activityList.fishing;
		case Mastery.LOGGING:
			return activityList.logging;
		case Mastery.MINING:
			return activityList.mining;
		case Mastery.SMITHING:
			return activityList.smithing;
	}
};

export const rollLoot = (lootTable: Item[]) => {
	return lootTable.filter((item) => {
		return item.dropRate >= Math.random();
	});
};

export const toNextLevel = (level: number) => {
	return 25 * level * level - 25 * level;
};
