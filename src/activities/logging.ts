import { uid } from "uid";
import type { Activity } from "@/types";

const chopMahogany: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 10,
	lootTable: {
		birdNest: 0.5,
		oakLog: 1,
	},
	name: "Mahogany",
	requiredLevel: 0,
	timeToCompletion: 10000,
};

const chopOak: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 15,
	lootTable: {
		birdNest: 0.5,
		willowLog: 1,
	},
	name: "Oak",
	requiredLevel: 5,
	timeToCompletion: 10000,
};

const chopWillow: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25,
	lootTable: {
		birdNest: 0.5,
		teakLog: 1,
	},
	name: "Willow",
	requiredLevel: 10,
	timeToCompletion: 10000,
};

export const logging = [chopMahogany, chopOak, chopWillow];
