import { uid } from "uid";
import { ItemType } from "@/models";
import { progressMultiplier } from "@/values";

export const birdNest = {
	id: uid(),
	dropRate: 0.5 * progressMultiplier,
	name: "Bird Nest",
	type: ItemType.MISC,
};
