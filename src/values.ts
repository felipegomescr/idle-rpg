export const maximumInventoryCapacity = 24;

export const progressMultiplier =
	process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER) : 1;
