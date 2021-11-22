const isDevelopment = process.env.NODE_ENV === "development";

export const backpackCapacity = 24;

export const localStorageProgressName = `idle-rpg-progress-${isDevelopment ? "development" : "production"}`;

export const notFoundPlaceholderIcon = "/assets/icons/not-found-placeholder.png";

export const progressMultiplier = isDevelopment ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER || 10) : 1;
