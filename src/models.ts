export enum ItemType {
	LOG,
	MISC,
}

export type Item = {
	id: string;
	dropRate: number;
	name: string;
	type: ItemType;
};

export type Tree = {
	id: string;
	name: string;
	requiredExp: number;
	rewardedExp: number;
	rewardTable: Item[];
	timeUntilReward: number;
};
