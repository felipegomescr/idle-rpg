import { LOCAL_STORAGE_PROGRESS_KEY } from "@/constants";
import { isClient } from "@/helpers";
import type { MaterialKey, ProgressData } from "@/types";

export class Progress {
	static delete() {
		if (isClient()) {
			window.localStorage.removeItem(LOCAL_STORAGE_PROGRESS_KEY);
		}
	}

	static load(): ProgressData | undefined {
		if (isClient()) {
			const progressJsonString = window.localStorage.getItem(LOCAL_STORAGE_PROGRESS_KEY);

			if (progressJsonString) {
				const progressData: ProgressData = JSON.parse(progressJsonString);

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
				LOCAL_STORAGE_PROGRESS_KEY,
				JSON.stringify({
					...progressData,
					backpack: Array.from(progressData.backpack),
				})
			);
		}
	}
}
