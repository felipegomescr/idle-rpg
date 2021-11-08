import * as itemList from "@/items";
import { ItemCategory } from "@/values";

export type Activity = {
	id: string;
	actionText: string;
	experience: number;
	icon: string;
	level: number;
	lootTable?: LootTable;
	name: string;
	requiredItemList?: Collection;
	timeToCompletion: number;
};

export type Collection = Map<ItemKey, number>;

export type ContainerItem = Item & {
	quantity: number;
};

export type Item = {
	id: string;
	category: ItemCategory;
	icon: string;
	isStackable?: boolean;
	key: ItemKey;
	name: string;
};

export type ItemKey = keyof typeof itemList;

export type LootStatistics = {
	chance: number;
	minimumQuantity: number;
	maximumQuantity: number;
};

export type LootTable = Map<ItemKey, LootStatistics>;

export type Progress = {
	backpack: Collection;
	carvingExperience: number;
	cookingExperience: number;
	fishingExperience: number;
	loggingExperience: number;
	miningExperience: number;
	smithingExperience: number;
};
