import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	name: "Copper Sword",
};

export const ironSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	name: "Iron Sword",
};

export const steelSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	name: "Steel Sword",
};
