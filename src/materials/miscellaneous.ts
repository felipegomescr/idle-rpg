import { uid } from "uid";
import { MaterialCategory } from "@/enumerators";
import type { Material } from "@/types";

export const stone: Material = {
	id: uid(),
	category: MaterialCategory.MISCELLANY,
	description: "Trash. Obtained from mining ore vein.",
	icon: "/assets/icons/materials/miscellaneous/stone.png",
	maximumNumber: 50,
	name: "Stone",
};
