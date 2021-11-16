import { sample, times } from "@/helpers";
import type { Collection, MaterialName } from "@/types";

export class WeightedList {
	private accumulator: MaterialName[] = [];

	constructor(data: Collection) {
		for (let [materialName, weight] of data.entries()) {
			times(weight, () => {
				this.accumulator.push(materialName);
			});
		}
	}

	roll() {
		return sample(this.accumulator);
	}
}
