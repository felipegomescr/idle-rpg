import * as activityList from "@/activities";
import { Skill } from "@/enums";
import { Collection, Item, ItemKey } from "@/types";

export const canCreateRecipe = (container: Item[], recipe?: Collection) => {
	if (!recipe || !Object.keys(recipe).length) {
		return true;
	}

	const itemList = (Object.keys(recipe) as ItemKey[]).reduce((itemListAccumulator, itemKey) => {
		const item = container.find((item) => {
			return item.key === itemKey;
		});

		if (!item) {
			return itemListAccumulator;
		}

		const amount = container.filter((item) => {
			return item.key === itemKey;
		}).length;

		return {
			...itemListAccumulator,
			[item.key]: amount,
		};
	}, {}) as Collection;

	return (Object.keys(recipe) as ItemKey[]).every((key) => {
		const amount = itemList[key];

		if (!amount) {
			return false;
		}

		return amount >= recipe[key]!;
	});
};

export const formatTime = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const getActivityList = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return activityList.logging;
		case Skill.MINING:
			return activityList.mining;
		case Skill.SMITHING:
			return activityList.smithing;
	}
};

export const getName = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return "Logging";
		case Skill.MINING:
			return "Mining";
		case Skill.SMITHING:
			return "Smithing";
	}
};

export const rollLoot = (lootTable: Item[]) => {
	return lootTable.filter((item) => {
		return item.dropRate >= Math.random();
	});
};
