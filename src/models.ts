import { ItemType } from "@/enums";
import * as items from "@/items";

type BaseAction = {
	id: string;
	actionText: string;
	expReward: number;
	lootTable: Item[];
	name: string;
	requiredExp: number;
};

export type GatheringAction = BaseAction & {
	requiredItems?: RequiredItems;
	timeToCompletion: number;
};

export type Item = {
	id: string;
	dropRate: number;
	name: string;
	type: ItemType;
};

export type ItemsKeys = keyof typeof items;

export type RequiredItems = {
	[key in ItemsKeys]?: number;
};
