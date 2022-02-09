import { uid } from "uid";
import { MaterialCategory } from "@/enumerators";
import type { Material } from "@/types";

export const copperIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting copper ore.",
	icon: "/assets/icons/materials/ingots/copper-ingot.png",
	maximumNumber: 50,
	name: "Copper Ingot",
};

export const ironIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting iron ore.",
	icon: "/assets/icons/materials/ingots/iron-ingot.png",
	maximumNumber: 50,
	name: "Iron Ingot",
};

export const mithrilIngot: Material = {
	id: uid(),
	category: MaterialCategory.INGOT,
	description: "Metal bar obtained from smelting mithril ore.",
	icon: "/assets/icons/materials/ingots/mithril-ingot.png",
	maximumNumber: 50,
	name: "Mithril Ingot",
};
