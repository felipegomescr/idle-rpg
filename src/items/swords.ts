import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const bronzeSword: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "bronzeSword",
	name: "Bronze Sword",
	type: ItemType.SWORD,
};

export const ironSword: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "bronzeSword",
	name: "Iron Sword",
	type: ItemType.SWORD,
};

export const steelSword: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "bronzeSword",
	name: "Steel Sword",
	type: ItemType.SWORD,
};
