import * as actionList from "@/actions";
import { Skill } from "@/enums";
import { Collection, Item, ItemKey } from "@/types";

export const canCreateRecipe = (container: Item[], recipe?: Collection) => {
	if (!recipe || !Object.keys(recipe).length) {
		return true;
	}

	const itemList = (Object.keys(recipe) as ItemKey[]).reduce((itemListAcc, itemKey) => {
		const item = container.find((item) => {
			return item.key === itemKey;
		});

		if (!item) {
			return itemListAcc;
		}

		const amount = container.filter((item) => {
			return item.key === itemKey;
		}).length;

		return {
			...itemListAcc,
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

export const getSkillActionList = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return actionList.logging;
		case Skill.MINING:
			return actionList.mining;
		case Skill.SMITHING:
			return actionList.smithing;
	}
};

export const getSkillName = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return "Logging";
		case Skill.MINING:
			return "Mining";
		case Skill.SMITHING:
			return "Smithing";
	}
};

export const parseTimeInMsToTextInSec = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const rollLoot = (lootTable: Item[]) => {
	return lootTable.filter((item) => {
		return item.dropRate >= Math.random();
	});
};
