import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const birdNest: Item = {
	id: uid(),
	category: ItemCategory.MISCELLANY,
	description: "",
	icon: "/assets/icons/items/miscellaneous/bird-nest.png",
	key: "birdNest",
	name: "Bird Nest",
};

export const stone: Item = {
	id: uid(),
	category: ItemCategory.MISCELLANY,
	description: "",
	icon: "/assets/icons/items/miscellaneous/stone.png",
	key: "stone",
	name: "Stone",
};
