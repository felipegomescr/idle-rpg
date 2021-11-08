import * as activityList from "@/activities";
import { Mastery } from "@/enums";
import { progressMultiplier } from "@/values";
import type { Collection, LootTable, MaterialKey } from "@/types";

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
		case Mastery.COOKING:
			return activityList.cooking;
		case Mastery.FISHING:
			return activityList.fishing;
		case Mastery.FORAGING:
			return activityList.foraging;
		case Mastery.MINING:
			return activityList.mining;
		case Mastery.MIXING:
			return activityList.mixing;
		case Mastery.SMITHING:
			return activityList.smithing;
	}
};

export const isClient = () => {
	return typeof document !== "undefined" && typeof window !== "undefined";
};

export const possessRequiredMaterialList = (backpack: Collection, requiredMaterialList: Collection) => {
	for (let [materialKey, minimumNumber] of requiredMaterialList.entries()) {
		const possessedNumber = backpack.get(materialKey) || 0;

		if (possessedNumber < minimumNumber) {
			return false;
		}
	}

	return true;
};

export const randomInteger = (minimum: number, maximum: number) => {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const rollForLoot = (lootTable: LootTable) => {
	const loot = new Map<MaterialKey, number>();

	for (let [materialKey, lootStatistics] of lootTable.entries()) {
		if (lootStatistics.chance * progressMultiplier >= Math.random()) {
			loot.set(materialKey, randomInteger(lootStatistics.minimumNumber, lootStatistics.maximumNumber));
		}
	}

	return loot;
};

export const times = (amount: number, callbackFunction: (iteration?: number) => void) => {
	for (let index = 0; index < amount; index++) {
		callbackFunction(index);
	}
};
