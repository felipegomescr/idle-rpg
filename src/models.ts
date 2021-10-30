type BaseAction = {
	id: string;
	actionText: string;
	expReward: number;
	lootTable: Item[];
	name: string;
	requiredExp: number;
};

export type GatheringAction = BaseAction & {
	timeToCompletion: number;
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
	LOGGING,
	MINING,
}
