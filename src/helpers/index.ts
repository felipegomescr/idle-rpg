import * as activityList from "@/activities";
import { rewardTableToCollection } from "@/adapters";
import { PROGRESS_MULTIPLIER } from "@/constants";
import { Mastery } from "@/enumerators";
import * as materialList from "@/materials";
import { WeightedList } from "@/services";
import type { Collection, ContainerMaterial, RewardTable } from "@/types";

export * from "./toast";

export const camelize = (text: string) => {
	return text
		.replace(/\s./g, (text) => {
			return text.toUpperCase();
		})
		.replace(/\s/g, "")
		.replace(/^./, (text) => {
			return text.toLowerCase();
		});
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
	return !isUndefined(document) && !isUndefined(window);
};

export const isUndefined = (value: any) => {
	return typeof value === "undefined";
};

export const possessRequiredMaterialList = (container: Collection, requiredMaterialList: Collection) => {
	for (let [materialKey, minimumNumber] of requiredMaterialList.entries()) {
		const possessedNumber = container.get(materialKey) || 0;

		if (possessedNumber < minimumNumber) {
			return false;
		}
	}

	return true;
};

export const range = (minimum: number, maximum: number) => {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const rollReward = (rewardTable: RewardTable) => {
	const weightedRewardList = new WeightedList(rewardTableToCollection(rewardTable));
	const materialKey = weightedRewardList.roll();
	const rewardStatistics = rewardTable.get(materialKey)!;
	const number = range(rewardStatistics.minimumNumber, rewardStatistics.maximumNumber) * PROGRESS_MULTIPLIER;
	const reward: ContainerMaterial = {
		...materialList[materialKey],
		number,
	};

	return reward;
};

export const sample = <Type>(array: Type[]) => {
	return array[range(0, array.length - 1)];
};

export const times = (amount: number, callbackFunction: (iterationCount?: number) => void) => {
	for (let index = 0; index < amount; index++) {
		callbackFunction(index);
	}
};
