export const backpackCapacity = 30;

export const localStorageProgressName = "idle-rpg-progress";

export const notFoundPlaceholderIcon = "/assets/icons/not-found-placeholder.png";

export const progressMultiplier =
	process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER || 10) : 1;
