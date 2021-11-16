import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialName, RewardTable } from "@/types";

export const collectionToMaterialInContainerList = (collection: Collection) => {
	const accumulator: MaterialInContainer[] = [];

	for (let [materialName, number] of collection.entries()) {
		const material = materialList[materialName];

		accumulator.push({
			...material,
			number,
		});
	}

	return accumulator;
};

export const rewardTableToCollection = (rewardTable: RewardTable) => {
	const accumulator: Collection = new Map<MaterialName, number>();

	for (let [materialName, rewardStatistics] of rewardTable.entries()) {
		accumulator.set(materialName, rewardStatistics.weight);
	}

	return accumulator;
};
