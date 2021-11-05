import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const copperOre: Item = {
	id: uid(),
	category: [ItemCategory.ORE],
	dropRate: 1 * progressMultiplier,
	name: "Copper Ore",
};

export const ironOre: Item = {
	id: uid(),
	category: [ItemCategory.ORE],
	dropRate: 1 * progressMultiplier,
	name: "Iron Ore",
};

export const steelOre: Item = {
	id: uid(),
	category: [ItemCategory.ORE],
	dropRate: 1 * progressMultiplier,
	name: "Steel Ore",
};
