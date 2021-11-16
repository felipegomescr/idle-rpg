import { isClient } from "@/helpers";
import { localStorageProgressKey } from "@/values";
import type { MaterialName, ProgressData } from "@/types";

export class Progress {
	static delete() {
		if (isClient()) {
			window.localStorage.removeItem(localStorageProgressKey);
		}
	}

	static load(): ProgressData | undefined {
		if (isClient()) {
			const progressString = window.localStorage.getItem(localStorageProgressKey);

			if (progressString) {
				const progressData: ProgressData = JSON.parse(progressString);

				return {
					...progressData,
					backpack: new Map<MaterialName, number>(progressData.backpack),
				};
			}
		}
	}

	static save(progressData: ProgressData) {
		if (isClient()) {
			window.localStorage.setItem(
				localStorageProgressKey,
				JSON.stringify({
					...progressData,
					backpack: Array.from(progressData.backpack),
				})
			);
		}
	}
}
