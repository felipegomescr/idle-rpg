import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const bronzeOre: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "bronzeOre",
	name: "Bronze Ore",
	type: ItemType.ORE,
};

export const ironOre: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "ironOre",
	name: "Iron Ore",
	type: ItemType.ORE,
};

export const steelOre: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "steelOre",
	name: "Steel Ore",
	type: ItemType.ORE,
};
