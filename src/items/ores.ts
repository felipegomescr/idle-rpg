import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/copper-ore.png",
	name: "Copper Ore",
};

export const ironOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/iron-ore.png",
	name: "Iron Ore",
};

export const steelOre: Item = {
	id: uid(),
	category: ItemCategory.ORE,
	icon: "/assets/icons/items/ores/steel-ore.png",
	name: "Steel Ore",
};
