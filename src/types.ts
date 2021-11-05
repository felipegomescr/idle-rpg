import * as itemList from "@/items";
import { ItemCategory } from "@/values";

export type Activity = {
	id: string;
	actionText: string;
	experience: number;
	icon: string;
	lootTable: LootTable;
	name: string;
	recipe?: Collection;
	requiredLevel: number;
	timeToCompletion: number;
};

export type Collection = {
	[key in ItemKey]?: number;
};

export type Item = {
	id: string;
	category: ItemCategory;
	icon: string;
	name: string;
};

export type ItemKey = keyof typeof itemList;

export type LootTable = {
	[key in ItemKey]?: number;
};

export type Progress = {
	inventory: Item[];
	carvingExperience: number;
	cookingExperience: number;
	fishingExperience: number;
	loggingExperience: number;
	miningExperience: number;
	smithingExperience: number;
};
