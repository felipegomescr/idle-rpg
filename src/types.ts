import { ItemType } from "@/enums";
import * as itemList from "@/items";

export type Action = {
	id: string;
	actionText: string;
	expReward: number;
	lootTable: Item[];
	name: string;
	recipe?: Collection;
	requiredExp: number;
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
