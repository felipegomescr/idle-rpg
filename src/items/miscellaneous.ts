import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const birdNest: Item = {
	id: uid(),
	category: ItemCategory.MISCELLANY,
	name: "Bird Nest",
};
