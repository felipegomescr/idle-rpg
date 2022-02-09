import { camelize, isUndefined } from "@/helpers";
import * as materialList from "@/materials";
import type { Collection, ContainerMaterial, MaterialKey } from "@/types";

export class Container {
	constructor(public content: Collection, public capacity: number) {}

	canStore(containerMaterial: ContainerMaterial) {
		const materialKey = camelize(containerMaterial.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey);

		if (isUndefined(possessedNumber)) {
			return this.content.size < this.capacity;
		} else {
			return possessedNumber! < containerMaterial.maximumNumber;
		}
	}

	discard(containerMaterial: ContainerMaterial) {
		const materialKey = camelize(containerMaterial.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey)!;
		const currentNumber = possessedNumber - containerMaterial.number;

		if (currentNumber <= 0) {
			this.content.delete(materialKey);
		} else {
			this.content.set(materialKey, currentNumber);
		}

		return this.content;
	}

	discardMultiple(collection: Collection) {
		for (let [materialKey, number] of collection.entries()) {
			const material = materialList[materialKey];

			this.discard({
				...material,
				number,
			});
		}

		return this.content;
	}

	store(containerMaterial: ContainerMaterial) {
		const materialKey = camelize(containerMaterial.name) as MaterialKey;
		const possessedNumber = this.content.get(materialKey) || 0;
		const currentNumber = possessedNumber + containerMaterial.number;

		this.content.set(materialKey, Math.min(currentNumber, containerMaterial.maximumNumber));

		return this.content;
	}
}
