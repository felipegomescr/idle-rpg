import { uid } from "uid";
import { MaterialCategory } from "@/enums";
import type { Material } from "@/types";

export const copperOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining copper vein.",
	icon: "/assets/icons/materials/ores/copper-ore.png",
	key: "copperOre",
	name: "Copper Ore",
};

export const ironOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining iron vein.",
	icon: "/assets/icons/materials/ores/iron-ore.png",
	key: "ironOre",
	name: "Iron Ore",
};

export const mithrilOre: Material = {
	id: uid(),
	category: MaterialCategory.ORE,
	description: "Ore obtained from mining mithril vein.",
	icon: "/assets/icons/materials/ores/mithril-ore.png",
	key: "mithrilOre",
	name: "Mithril Ore",
};
