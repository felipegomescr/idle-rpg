import { uid } from "uid";
import { MaterialCategory } from "@/enumerators";
import type { Material } from "@/types";

export const copperOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining copper.",
	icon: "/assets/icons/materials/ores/copper-ore.png",
	maximumNumber: 50,
	name: "Copper Ore",
};

export const ironOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining iron.",
	icon: "/assets/icons/materials/ores/iron-ore.png",
	maximumNumber: 50,
	name: "Iron Ore",
};

export const mithrilOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining mithril.",
	icon: "/assets/icons/materials/ores/mithril-ore.png",
	maximumNumber: 50,
	name: "Mithril Ore",
};
