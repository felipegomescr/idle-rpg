import * as materialList from "@/materials";
import type { Collection, ContainerMaterial } from "@/types";

export const collectionToContainerMaterialList = (collection: Collection) => {
	const accumulator: ContainerMaterial[] = [];

	for (let [materialKey, number] of collection.entries()) {
		const material = materialList[materialKey];

		accumulator.push({
			...material,
			number,
		});
	}

	return accumulator;
};
