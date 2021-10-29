import { uid } from "uid";
import { progressModifier } from "@/helpers";
import { ItemType } from "@/models";

export const mahoganyLog = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Mahogany Log",
	type: ItemType.LOG,
};

export const oakLog = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Oak Log",
	type: ItemType.LOG,
};

export const teakLog = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Teak Log",
	type: ItemType.LOG,
};

export const willowLog = {
	id: uid(),
	dropRate: 1 * progressModifier,
	name: "Willow Log",
	type: ItemType.LOG,
};
