import { isClient } from "@/helpers";
import { localStorageProgressName } from "@/values";
import type { MaterialKey, ProgressData } from "@/types";

export class Progress {
	static delete() {
		if (isClient()) {
			window.localStorage.removeItem(localStorageProgressName);
		}
	}

	static load(): ProgressData | undefined {
		if (isClient()) {
			const progressString = window.localStorage.getItem(localStorageProgressName);

			if (progressString) {
				const progressData: ProgressData = JSON.parse(progressString);

				return {
					...progressData,
					backpack: new Map<MaterialKey, number>(progressData.backpack),
				};
			}
		}
	}

	static save(progressData: ProgressData) {
		if (isClient()) {
			window.localStorage.setItem(
				localStorageProgressName,
				JSON.stringify({
					...progressData,
					backpack: Array.from(progressData.backpack),
				})
			);
		}
	}
}
