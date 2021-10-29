import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { ItemType } from "@/models";

export const birdNest = {
	id: uid(),
	dropRate: 0.5 * progressModifier,
	name: "Bird Nest",
	type: ItemType.MISC,
};
