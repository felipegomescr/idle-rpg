import { uid } from "uid";
import { MaterialCategory } from "@/enumerators";
import type { Material } from "@/types";

export const copperSword: Material = {
	id: uid(),
	category: MaterialCategory.SWORD,
	description: "A sword obtained from smithing copper bar.",
	icon: "/assets/icons/materials/swords/copper-sword.png",
	maximumNumber: 50,
	name: "Copper Sword",
};

export const ironSword: Material = {
	id: uid(),
	category: MaterialCategory.SWORD,
	description: "A sword obtained from smithing iron bar.",
	icon: "/assets/icons/materials/swords/iron-sword.png",
	maximumNumber: 50,
	name: "Iron Sword",
};

export const mithrilSword: Material = {
	id: uid(),
	category: MaterialCategory.SWORD,
	description: "A sword obtained from smithing mithril bar.",
	icon: "/assets/icons/materials/swords/mithril-sword.png",
	maximumNumber: 50,
	name: "Mithril Sword",
};
