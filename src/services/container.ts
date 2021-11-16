import { cloneMap } from "@/helpers";
import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialKey } from "@/types";

const discard = (material: MaterialInContainer, container: Map<MaterialKey, number>) => {
	const containerClone = cloneMap(container);
	const possessedNumber = containerClone.get(material.key) || 0;

	if (possessedNumber - material.number <= 0) {
		containerClone.delete(material.key);
	} else {
		containerClone.set(material.key, possessedNumber - material.number);
	}

	return containerClone;
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
		const containerClone = cloneMap(container);
		const possessedNumber = containerClone.get(material.key) || 0;

		containerClone.set(material.key, possessedNumber + material.number);

		return containerClone;
	},
};
