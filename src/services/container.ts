import { camelize } from "@/helpers";
import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialName } from "@/types";

export class Container {
	constructor(public content: Collection) {}

	discard(material: MaterialInContainer) {
		const materialName = camelize(material.name) as MaterialName;
		const possessedNumber = this.content.get(materialName)!;

		if (possessedNumber - material.number <= 0) {
			this.content.delete(materialName);
		} else {
			this.content.set(materialName, possessedNumber - material.number);
		}

		return this.content;
	}

	discardMultiple(discardList: Collection) {
		for (let [materialName, number] of discardList.entries()) {
			const material = materialList[materialName];

			this.discard({
				...material,
				number,
			});
		}

		return this.content;
	}

	store(material: MaterialInContainer) {
		const materialName = camelize(material.name) as MaterialName;
		const possessedNumber = this.content.get(materialName) || 0;

		this.content.set(materialName, possessedNumber + material.number);

		return this.content;
	}
}
