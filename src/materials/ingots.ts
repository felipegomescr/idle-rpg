import { uid } from "uid";
import { MaterialCategory } from "@/enums";
import type { Material } from "@/types";

export const copperIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting copper ore.",
	icon: "/assets/icons/materials/ingots/copper-ingot.png",
	key: "copperIngot",
	name: "Copper Ingot",
};

export const ironIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting iron ore.",
	icon: "/assets/icons/materials/ingots/iron-ingot.png",
	key: "ironIngot",
	name: "Iron Ingot",
};

export const mithrilIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting mithril ore.",
	icon: "/assets/icons/materials/ingots/mithril-ingot.png",
	key: "mithrilIngot",
	name: "Mithril Ingot",
};
