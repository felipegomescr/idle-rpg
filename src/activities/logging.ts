import { uid } from "uid";
import type { Activity } from "@/types";

const chopOak: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 15,
	icon: "/assets/icons/items/logs/oak-log.png",
	lootTable: {
		birdNest: 0.2,
		oakLog: 1,
	},
	name: "Oak",
	requiredLevel: 5,
	timeToCompletion: 10000,
};

const chopPine: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25,
	icon: "/assets/icons/items/logs/pine-log.png",
	lootTable: {
		birdNest: 0.2,
		pineLog: 1,
	},
	name: "Pine",
	requiredLevel: 10,
	timeToCompletion: 10000,
};

const chopWillow: Activity = {
	id: uid(),
	actionText: "Chop",
	experience: 25,
	icon: "/assets/icons/items/logs/willow-log.png",
	lootTable: {
		birdNest: 0.2,
		willowLog: 1,
	},
	name: "Willow",
	requiredLevel: 10,
	timeToCompletion: 10000,
};

export const logging = [chopOak, chopPine, chopWillow];
