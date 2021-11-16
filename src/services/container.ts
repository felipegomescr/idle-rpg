import { cloneMap } from "@/helpers";
import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialKey } from "@/types";

const discard = (material: MaterialInContainer, container: Map<MaterialKey, number>) => {
	const backpackClone = cloneMap(container);
	const possessedNumber = backpackClone.get(material.key) || 0;

	if (possessedNumber - material.number <= 0) {
		backpackClone.delete(material.key);
	} else {
		backpackClone.set(material.key, possessedNumber - material.number);
	}

	return backpackClone;
};

export const containerService = {
	discard,
	discardMultiple: (materialCollection: Collection, container: Map<MaterialKey, number>) => {
		let containerClone = cloneMap(container);

		for (let [materialKey, number] of materialCollection.entries()) {
			const material = materialList[materialKey];

			containerClone = discard(
				{
					...material,
					number,
				},
				containerClone
			);
		}

		return containerClone;
	},
	store: (material: MaterialInContainer, container: Map<MaterialKey, number>) => {
		const backpackClone = cloneMap(container);
		const possessedNumber = backpackClone.get(material.key) || 0;

		backpackClone.set(material.key, possessedNumber + material.number);

		return backpackClone;
	},
};
