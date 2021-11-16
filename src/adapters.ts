import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialKey, RewardTable } from "@/types";

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

export const rewardTableToCollection = (rewardTable: RewardTable) => {
	const accumulator: Collection = new Map<MaterialKey, number>();

	for (let [materialKey, rewardStatistics] of rewardTable.entries()) {
		accumulator.set(materialKey, rewardStatistics.weight);
	}

	return accumulator;
};
