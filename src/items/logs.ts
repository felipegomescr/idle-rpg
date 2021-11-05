import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const oakLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	dropRate: 1 * progressMultiplier,
	name: "Oak Log",
};

export const teakLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	dropRate: 1 * progressMultiplier,
	name: "Teak Log",
};

export const willowLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	dropRate: 1 * progressMultiplier,
	name: "Willow Log",
};
