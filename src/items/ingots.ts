import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	description: "",
	icon: "/assets/icons/items/ingots/copper-ingot.png",
	key: "copperIngot",
	name: "Copper Ingot",
};

export const ironIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	description: "",
	icon: "/assets/icons/items/ingots/iron-ingot.png",
	key: "ironIngot",
	name: "Iron Ingot",
};

export const mithrilIngot: Item = {
	id: uid(),
	category: ItemCategory.INGOT,
	description: "",
	icon: "/assets/icons/items/ingots/mithril-ingot.png",
	key: "mithrilIngot",
	name: "Mithril Ingot",
};
