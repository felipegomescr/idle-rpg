import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const copperIngot: Item = {
	id: uid(),
	category: [ItemCategory.INGOT],
	dropRate: 1 * progressMultiplier,
	name: "Copper Ingot",
};

export const ironIngot: Item = {
	id: uid(),
	category: [ItemCategory.INGOT],
	dropRate: 1 * progressMultiplier,
	name: "Iron Ingot",
};

export const steelIngot: Item = {
	id: uid(),
	category: [ItemCategory.INGOT],
	dropRate: 1 * progressMultiplier,
	name: "Steel Ingot",
};
