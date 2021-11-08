import { uid } from "uid";
import { ItemCategory } from "@/values";
import type { Item } from "@/types";

export const oakLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	icon: "/assets/icons/items/logs/oak-log.png",
	key: "oakLog",
	name: "Oak Log",
};

export const pineLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	icon: "/assets/icons/items/logs/pine-log.png",
	key: "pineLog",
	name: "Pine Log",
};

export const willowLog: Item = {
	id: uid(),
	category: ItemCategory.LOG,
	icon: "/assets/icons/items/logs/willow-log.png",
	key: "willowLog",
	name: "Willow Log",
};
