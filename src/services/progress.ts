import { isClient } from "@/helpers";
import { localStorageProgressKey } from "@/values";
import type { Progress } from "@/types";

export const progressService = {
	discard: () => {
		if (isClient()) {
			window.localStorage.removeItem(localStorageProgressKey);
		}
	},
	load: (): Progress | undefined => {
		if (isClient()) {
			const progress = window.localStorage.getItem(localStorageProgressKey);

			if (progress) {
				return JSON.parse(progress);
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
