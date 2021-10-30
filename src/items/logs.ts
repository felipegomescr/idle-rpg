import { uid } from "uid";
import { ItemType } from "@/models";
import { progressMultiplier } from "@/values";

export const oakLog = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Oak Log",
	type: ItemType.LOG,
};

export const teakLog = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Teak Log",
	type: ItemType.LOG,
};

export const willowLog = {
	id: uid(),
	dropRate: 1 * progressMultiplier,
	name: "Willow Log",
	type: ItemType.LOG,
};
