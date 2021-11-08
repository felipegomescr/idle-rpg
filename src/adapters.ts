import * as materialList from "@/materials";
import type { Collection, MaterialInContainer } from "@/types";

export const collectionToMaterialInContainerList = (collection: Collection) => {
	const accumulator: MaterialInContainer[] = [];

	for (let [materialKey, number] of collection.entries()) {
		const material = materialList[materialKey];

		accumulator.push({
			...material,
			number,
		});
	}

	return accumulator;
};
