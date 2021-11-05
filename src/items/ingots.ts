import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	name: "Copper Ingot",
};

export const ironIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	name: "Iron Ingot",
};

export const steelIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	name: "Steel Ingot",
};
