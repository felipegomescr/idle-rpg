import { MaterialCategory } from "@/enums";
import * as materialList from "@/materials";

export type Activity = {
	id: string;
	actionText: string;
	experience: number;
	icon: string;
	level: number;
	name: string;
	requiredMaterialList?: Collection;
	rewardTable?: RewardTable;
	timeToCompletion: number;
};

export type Collection = Map<MaterialKey, number>;

export type Material = {
	id: string;
	category: MaterialCategory;
	description: string;
	icon: string;
	key: MaterialKey;
	name: string;
};

export type MaterialInContainer = Material & {
	number: number;
};

export type MaterialKey = keyof typeof materialList;

export type Progress = {
	backpack: Collection;
	cookingExperience: number;
	fishingExperience: number;
	foragingExperience: number;
	miningExperience: number;
	mixingExperience: number;
	smithingExperience: number;
};

export type RewardStatistics = {
	minimumNumber: number;
	maximumNumber: number;
	weight: number;
};

export type RewardTable = Map<MaterialKey, RewardStatistics>;
