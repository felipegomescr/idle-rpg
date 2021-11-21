import { camelize, isUndefined } from "@/helpers";
import * as materialList from "@/materials";
import type { Collection, MaterialInContainer, MaterialKey } from "@/types";

export class Container {
	constructor(public content: Collection, public capacity: number) {}

	canStore(material: MaterialInContainer) {
		const materialKey = camelize(material.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey);

		if (isUndefined(possessedNumber)) {
			return this.content.size < this.capacity;
		} else {
			return possessedNumber! < material.maximumNumber;
		}
	}

	discard(material: MaterialInContainer) {
		const materialKey = camelize(material.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey)!;

		if (possessedNumber - material.number <= 0) {
			this.content.delete(materialKey);
		} else {
			this.content.set(materialKey, possessedNumber - material.number);
		}

		return this.content;
	}

	discardMultiple(discardList: Collection) {
		for (let [materialKey, number] of discardList.entries()) {
			const material = materialList[materialKey];

			this.discard({
				...material,
				number,
			});
		}

		return this.content;
	}

	store(material: MaterialInContainer) {
		const materialKey = camelize(material.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey) || 0;
		const number = possessedNumber + material.number;

		this.content.set(materialKey, Math.min(number, material.maximumNumber));

		return this.content;
	}
}
