import * as materialList from "@/materials";
import type { Collection, ContainerMaterial, MaterialKey, RewardTable } from "@/types";

export const collectionToContainerMaterialList = (collection: Collection) => {
	const containerMaterialList: ContainerMaterial[] = [];

	for (let [materialKey, number] of collection.entries()) {
		const material = materialList[materialKey];

		containerMaterialList.push({
			...material,
			number,
		});
	}

	return containerMaterialList;
};

export const rewardTableToCollection = (rewardTable: RewardTable) => {
	const collection: Collection = new Map<MaterialKey, number>();

	for (let [materialKey, rewardStatistics] of rewardTable.entries()) {
		collection.set(materialKey, rewardStatistics.weight);
	}

	return collection;
};
