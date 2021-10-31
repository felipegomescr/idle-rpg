import { ItemType } from "@/enums";
import * as itemList from "@/items";

export type Activity = {
	id: string;
	actionText: string;
	experienceReward: number;
	lootTable: Item[];
	name: string;
	recipe?: Collection;
	requiredExperience: number;
	timeToCompletion: number;
};

export type Collection = {
	[key in ItemKey]?: number;
};

export type Item = {
	id: string;
	dropRate: number;
	name: string;
	key: ItemKey;
	type: ItemType;
};

export type ItemKey = keyof typeof itemList;
