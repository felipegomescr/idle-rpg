import { uid } from "uid";
import { ItemType } from "@/enums";
import { progressMultiplier } from "@/values";
import type { Item } from "@/types";

export const oakLog: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "oakLog",
	name: "Oak Log",
	type: ItemType.LOG,
};

export const teakLog: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "teakLog",
	name: "Teak Log",
	type: ItemType.LOG,
};

export const willowLog: Item = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	key: "willowLog",
	name: "Willow Log",
	type: ItemType.LOG,
};
