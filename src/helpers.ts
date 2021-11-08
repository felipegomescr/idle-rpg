import * as activityList from "@/activities";
import { Mastery, progressMultiplier } from "@/values";
import type { Collection, ItemKey, LootTable } from "@/types";

export const cloneMap = <Key, Value>(map: Map<Key, Value>) => {
	return new Map<Key, Value>(JSON.parse(JSON.stringify([...map])));
};

export const experienceToLevel = (experience: number) => {
	return Math.floor(Math.floor(25 + Math.sqrt(625 + 100 * experience)) / 50);
};

export const levelToExperience = (level: number) => {
	return 25 * level * level - 25 * level;
};

export const formatTimeToSecondsText = (time: number) => {
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

export const isClient = () => {
	return typeof document !== "undefined" && typeof window !== "undefined";
};

export const possessRequiredItemList = (backpack: Collection, requiredItemList: Collection) => {
	for (let [itemKey, minimumQuantity] of requiredItemList.entries()) {
		const possessedQuantity = backpack.get(itemKey) || 0;

		if (possessedQuantity < minimumQuantity) {
			return false;
		}
	}

	return true;
};

export const randomInteger = (minimum: number, maximum: number) => {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const rollForLoot = (lootTable: LootTable) => {
	const loot = new Map<ItemKey, number>();

	for (let [itemKey, lootStatistics] of lootTable.entries()) {
		if (lootStatistics.chance * progressMultiplier >= Math.random()) {
			loot.set(itemKey, randomInteger(lootStatistics.minimumQuantity, lootStatistics.maximumQuantity));
		}
	}

	return loot;
};

export const times = (amount: number, callback: (iteration?: number) => void) => {
	for (let index = 0; index < amount; index++) {
		callback(index);
	}
};
