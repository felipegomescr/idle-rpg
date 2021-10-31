import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const birdNest: Item = {
	id: uid(),
	dropRate: 0.5 * progressMultiplier,
	key: "birdNest",
	name: "Bird Nest",
	type: ItemType.MISCELLANEOUS,
};
