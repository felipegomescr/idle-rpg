import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const copperSword: Item = {
	id: uid(),
	category: [ItemCategory.SWORD],
	dropRate: 1 * progressMultiplier,
	name: "Copper Sword",
};

export const ironSword: Item = {
	id: uid(),
	category: [ItemCategory.SWORD],
	dropRate: 1 * progressMultiplier,
	name: "Iron Sword",
};

export const steelSword: Item = {
	id: uid(),
	category: [ItemCategory.SWORD],
	dropRate: 1 * progressMultiplier,
	name: "Steel Sword",
};
