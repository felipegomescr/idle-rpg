import { Item } from "@/models";

export const maxInventoryCapacity = 24;

export const parseTimeInMsToTextInSec = (time: number) => {
	return `${(time / 1000).toFixed(1)}s`;
};

export const progressModifier =
	process.env.NODE_ENV === "development" ? Number(process.env.NEXT_PUBLIC_PROGRESS_MODIFIER) : 1;

export const rollForRewards = (rewardTable: Item[]) => {
	return rewardTable.filter((item) => {
		return Math.random() <= item.dropRate;
	});
};
