import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	icon: "/assets/icons/items/ingots/copper-ingot.png",
	name: "Copper Ingot",
};

export const ironIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	icon: "/assets/icons/items/ingots/iron-ingot.png",
	name: "Iron Ingot",
};

export const mithrilIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	icon: "/assets/icons/items/ingots/mithril-ingot.png",
	name: "Mithril Ingot",
};
