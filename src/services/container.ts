import { cloneMap } from "@/helpers";
import * as itemList from "@/items";
import type { Collection, ContainerItem, ItemKey } from "@/types";

const add = (container: Map<ItemKey, number>, item: ContainerItem) => {
	const backpackClone = cloneMap(container);
	const possessedQuantity = backpackClone.get(item.key) || 0;

	backpackClone.set(item.key, possessedQuantity + item.quantity);

	return backpackClone;
};

const discard = (container: Map<ItemKey, number>, item: ContainerItem) => {
	const backpackClone = cloneMap(container);
	const possessedQuantity = backpackClone.get(item.key) || 0;

	if (possessedQuantity - item.quantity <= 0) {
		backpackClone.delete(item.key);
	} else {
		backpackClone.set(item.key, possessedQuantity - item.quantity);
	}

	return backpackClone;
};

export const containerService = {
	add,
	addMultiple: (collection: Collection, container: Map<ItemKey, number>) => {
		let containerClone = cloneMap(container);

		for (let [itemKey, quantity] of collection.entries()) {
			const item = itemList[itemKey];

			containerClone = add(containerClone, {
				...item,
				quantity,
			});
		}

		return containerClone;
	},
	discard,
	discardMultiple: (collection: Collection, container: Map<ItemKey, number>) => {
		let containerClone = cloneMap(container);

		for (let [itemKey, quantity] of collection.entries()) {
			const item = itemList[itemKey];

			containerClone = discard(containerClone, {
				...item,
				quantity,
			});
		}

		return containerClone;
	},
};
