export const localStorageProgressKey = "idle-rpg-progress";

export const maximumInventoryCapacity = 24;

export const notFoundPlaceholderIcon = "/assets/icons/not-found-placeholder.png";

export const progressMultiplier =
	process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER || 10) : 1;
