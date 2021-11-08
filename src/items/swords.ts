import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const copperSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	description: "",
	icon: "/assets/icons/items/swords/copper-sword.png",
	key: "copperSword",
	name: "Copper Sword",
};

export const ironSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	description: "",
	icon: "/assets/icons/items/swords/iron-sword.png",
	key: "ironSword",
	name: "Iron Sword",
};

export const mithrilSword: Item = {
	id: uid(),
	category: ItemCategory.SWORD,
	description: "",
	icon: "/assets/icons/items/swords/mithril-sword.png",
	key: "mithrilSword",
	name: "Mithril Sword",
};
