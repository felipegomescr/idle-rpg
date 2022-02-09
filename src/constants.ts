const isDevelopment = process.env.NODE_ENV === "development";

export const BACKPACK_CAPACITY = 24;

export const LOCAL_STORAGE_PROGRESS_KEY = `idle-rpg-progress-${isDevelopment ? "development" : "production"}`;

export const PROGRESS_MULTIPLIER = isDevelopment ? Number(process.env.NEXT_PUBLIC_PROGRESS_MULTIPLIER || 10) : 1;
