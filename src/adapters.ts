import * as itemList from "@/items";
import type { Collection, ContainerItem } from "@/types";

export const collectionToContainerItemList = (collection: Collection) => {
	const accumulator: ContainerItem[] = [];

	for (let [itemKey, quantity] of collection.entries()) {
		const item = itemList[itemKey];

		accumulator.push({
			...item,
			quantity,
		});
	}

	return accumulator;
};
