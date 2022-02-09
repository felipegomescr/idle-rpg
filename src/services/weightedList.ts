import { sample, times } from "@/helpers";
import type { Collection, MaterialKey } from "@/types";

export class WeightedList {
	private materialKeyList: MaterialKey[] = [];

	constructor(data: Collection) {
		for (let [materialKey, weight] of data.entries()) {
			times(weight, () => {
				this.materialKeyList.push(materialKey);
			});
		}
	}

	roll() {
		return sample(this.materialKeyList);
	}
}
