import { times } from "@/helpers";
import * as itemList from "@/items";
import type { Collection, ContainerItem } from "@/types";

export const collectionToContainerItemList = (collection: Collection) => {
	const accumulator: ContainerItem[] = [];

	for (let [itemKey, quantity] of collection.entries()) {
		const item = itemList[itemKey];

		if (item.isStackable) {
			accumulator.push({
				...item,
				quantity,
			});
		} else {
			times(quantity, () => {
				accumulator.push({
					...item,
					quantity: 1,
				});
			});
		}
	}

	return accumulator;
};
