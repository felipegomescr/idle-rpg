import * as actions from "@/actions";
import { Item, Skill } from "@/models";

export const getSkillActions = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return actions.loggingActions;
		case Skill.MINING:
			return actions.miningActions;
	}
};

export const getSkillName = (skill: Skill) => {
	switch (skill) {
		case Skill.LOGGING:
			return "Logging";
		case Skill.MINING:
			return "Mining";
	}
};

export const parseTimeInMsToTextInSec = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const rollForLoot = (lootTable: Item[]) => {
	return lootTable.filter((item) => {
		return item.dropRate > Math.random();
	});
};
