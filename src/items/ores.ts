import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { ItemType } from "@/models";

export const bronzeOre = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Bronze Ore",
	type: ItemType.LOG,
};

export const ironOre = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Iron Ore",
	type: ItemType.LOG,
};

export const steelOre = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Steel Ore",
	type: ItemType.LOG,
};
