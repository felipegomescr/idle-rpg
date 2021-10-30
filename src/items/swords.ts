import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";

export const bronzeSword = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Bronze Sword",
	type: ItemType.SWORD,
};

export const ironSword = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Iron Sword",
	type: ItemType.SWORD,
};

export const steelSword = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Steel Sword",
	type: ItemType.SWORD,
};
