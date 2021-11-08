export enum ItemCategory {
	INGOT = "Ingot",
	LOG = "Log",
	MISCELLANY = "Miscellany",
	ORE = "Ore",
	SWORD = "Sword",
}

export enum Mastery {
	CARVING = "Carving",
	COOKING = "Cooking",
	FISHING = "Fishing",
	LOGGING = "Logging",
	MINING = "Mining",
	SMITHING = "Smithing",
}

export const localStorageProgressKey = "idle-rpg-progress";

export const maximumInventoryCapacity = 24;

export const notFoundPlaceholderIcon = "/assets/icons/not-found-placeholder.png";

export const progressMultiplier =
	process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER || 10) : 1;
