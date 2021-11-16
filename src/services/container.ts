import * as materialList from "@/materials";
import type { Collection, MaterialInContainer } from "@/types";

export class Container {
	constructor(public content: Collection) {}

	discard(material: MaterialInContainer) {
		const possessedNumber = this.content.get(material.key)!;

		if (possessedNumber - material.number <= 0) {
			this.content.delete(material.key);
		} else {
			this.content.set(material.key, possessedNumber - material.number);
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
		const possessedNumber = this.content.get(material.key) || 0;

		this.content.set(material.key, possessedNumber + material.number);

		return this.content;
	}
}
