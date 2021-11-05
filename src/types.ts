import * as itemList from "@/items";
import { ItemCategory } from "@/values";

export type Activity = {
	id: string;
	actionText: string;
	experience: number;
	lootTable: Item[];
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
	dropRate: number;
	name: string;
};

export type ItemKey = keyof typeof itemList;
