import { MaterialCategory } from "@/enumerators";
import * as materialList from "@/materials";

export type Activity = {
	id: string;
	actionIcon: string;
	actionText: string;
	description: string;
	experience: number;
	icon: string;
	levelRequirement: number;
	name: string;
	requiredMaterialList?: Collection;
	rewardTable?: RewardTable;
	timeToCompletion: number;
};

export type Collection = Map<MaterialKey, number>;

export type ContainerMaterial = Material & {
	number: number;
};

export type Material = {
	id: string;
	category: MaterialCategory;
	description: string;
	icon: string;
	maximumNumber: number;
	name: string;
};

export type MaterialKey = keyof typeof materialList;

export type ProgressData = {
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
