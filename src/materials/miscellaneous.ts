import { uid } from "uid";
import { MaterialCategory } from "@/enums";
import type { Material } from "@/types";

export const stone: Material = {
	id: uid(),
	category: MaterialCategory.MISCELLANY,
	description: "Trash. Obtained from mining ore.",
	icon: "/assets/icons/materials/miscellaneous/stone.png",
	name: "Stone",
};
