import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	icon: "/assets/icons/items/swords/copper-sword.png",
	name: "Copper Sword",
};

export const ironSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	icon: "/assets/icons/items/swords/iron-sword.png",
	name: "Iron Sword",
};

export const steelSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	icon: "/assets/icons/items/swords/steel-sword.png",
	name: "Steel Sword",
};
