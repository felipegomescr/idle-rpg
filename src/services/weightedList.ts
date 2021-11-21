import { sample, times } from "@/helpers";
import type { Collection, MaterialKey } from "@/types";

export class WeightedList {
	private accumulator: MaterialKey[] = [];

	constructor(data: Collection) {
		for (let [materialKey, weight] of data.entries()) {
			times(weight, () => {
				this.accumulator.push(materialKey);
			});
		}
	}

	roll() {
		return sample(this.accumulator);
	}
}
