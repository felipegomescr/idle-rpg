import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";

export const bronzeOre = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Bronze Ore",
	type: ItemType.ORE,
};

export const ironOre = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Iron Ore",
	type: ItemType.ORE,
};

export const steelOre = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Steel Ore",
	type: ItemType.ORE,
};
