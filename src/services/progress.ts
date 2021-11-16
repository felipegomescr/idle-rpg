import { isClient } from "@/helpers";
import { localStorageProgressKey } from "@/values";
import type { MaterialKey, Progress } from "@/types";

export const progressService = {
	discard: () => {
		if (isClient()) {
			window.localStorage.removeItem(localStorageProgressKey);
		}
	},
	load: (): Progress | undefined => {
		if (isClient()) {
			const progressString = window.localStorage.getItem(localStorageProgressKey);

			if (progressString) {
				const progress: Progress = JSON.parse(progressString);

				return {
					...progress,
					backpack: new Map<MaterialKey, number>(progress.backpack),
				};
			}
		}
	},
	save: (progress: Progress) => {
		if (isClient()) {
			window.localStorage.setItem(
				localStorageProgressKey,
				JSON.stringify({
					...progress,
					backpack: Array.from(progress.backpack),
				})
			);
		}
	},
};
