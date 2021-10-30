export type Action = {
	id: string;
	actionText: string;
	name: string;
	requiredExp: number;
	rewardedExp: number;
	rewardTable: Item[];
	timeUntilReward: number;
};

export type Item = {
	id: string;
	dropRate: number;
	name: string;
	type: ItemType;
};

export enum ItemType {
	LOG,
	MISC,
}

export enum Skill {
	MINING,
	WOODCUTTING,
}
