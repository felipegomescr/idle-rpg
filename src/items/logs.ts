import { uid } from "uid";
import { ItemCategory, progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const oakLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	name: "Oak Log",
};

export const teakLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	name: "Teak Log",
};

export const willowLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	name: "Willow Log",
};
