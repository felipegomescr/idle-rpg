import { dequal } from "dequal";
import camelCase from "lodash.camelcase";
import groupBy from "lodash.groupby";
import mapKeys from "lodash.mapkeys";
import mapValues from "lodash.mapvalues";
import * as actions from "@/actions";
import { Skill } from "@/enums";
import { Item, ItemsKeys, RequiredItems } from "@/models";

export const getSkillActions = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return actions.loggingActions;
		case Skill.MINING:
			return actions.miningActions;
		case Skill.SMITHING:
			return actions.smithingActions;
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

export const hasRequiredItems = (container: Item[], requiredItems?: RequiredItems) => {
	if (!requiredItems) {
		return true;
	}

	const mappedContainer = mapKeys(
		mapValues(groupBy(container, "name"), (value) => {
			return value.length;
		}),
		(_, key) => {
			return camelCase(key);
		}
	);

	const sortedKeysFromMappedContainer = Object.keys(mappedContainer).sort() as ItemsKeys[];
	const sortedKeysFromRequiredItems = Object.keys(requiredItems).sort() as ItemsKeys[];

	if (!dequal(sortedKeysFromMappedContainer, sortedKeysFromRequiredItems)) {
		return false;
	}

	return sortedKeysFromMappedContainer.every((key) => {
		return mappedContainer[key] >= (requiredItems[key] || 0);
	});
};

export const parseTimeInMsToTextInSec = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const rollForLoot = (lootTable: Item[]) => {
	return lootTable.filter((item) => {
		return item.dropRate > Math.random();
	});
};
