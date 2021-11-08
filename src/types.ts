import { MaterialCategory } from "@/enums";
import * as materialList from "@/materials";

export type Activity = {
	id: string;
	actionText: string;
	experience: number;
	icon: string;
	level: number;
	lootTable?: LootTable;
	name: string;
	requiredMaterialList?: Collection;
	timeToCompletion: number;
};

export type Collection = Map<MaterialKey, number>;

export type ContainerMaterial = Material & {
	number: number;
};

export type LootStatistics = {
	chance: number;
	minimumNumber: number;
	maximumNumber: number;
};

export type LootTable = Map<MaterialKey, LootStatistics>;

export type Material = {
	id: string;
	category: MaterialCategory;
	description: string;
	icon: string;
	key: MaterialKey;
	name: string;
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
