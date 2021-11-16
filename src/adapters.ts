import { times } from "@/helpers";
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

export const rewardTableToWeightedMaterialList = (rewardTable: RewardTable) => {
	const accumulator: MaterialKey[] = [];

	for (let [materialKey, rewardStatistics] of rewardTable.entries()) {
		times(rewardStatistics.weight, () => {
			accumulator.push(materialKey);
		});
	}

	return accumulator;
};
