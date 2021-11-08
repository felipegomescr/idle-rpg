import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/copper-ore.png",
	key: "copperOre",
	name: "Copper Ore",
};

export const ironOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/iron-ore.png",
	key: "ironOre",
	name: "Iron Ore",
};

export const mithrilOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/mithril-ore.png",
	key: "mithrilOre",
	name: "Mithril Ore",
};
