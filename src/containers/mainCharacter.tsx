import times from "lodash.times";
import { useState } from "react";
import { createContainer } from "unstated-next";
import { Skill } from "@/enums";
import { maximumInventoryCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Activity, Collection, Item } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [inventory, setInventory] = useState<Item[]>([]);
	const [loggingExperience, setLoggingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	return {
		activity,
		inventory: {
			itemList: inventory,
			bulkAdd: (itemList: Item[]) => {
				setInventory((previousInventory) => {
					return [...previousInventory, ...itemList.slice(0, maximumInventoryCapacity - previousInventory.length)];
				});
			},
			bulkDestroy: (itemList: Collection) => {
				setInventory((previousInventory) => {
					const previousInventoryClone = [...previousInventory];

					Object.entries(itemList).forEach(([itemKey, amount]) => {
						times(amount, () => {
							const index = previousInventory.findIndex((item) => {
								return item.key === itemKey;
							});

							if (index === -1) {
								return;
							}

							previousInventoryClone.splice(index, 1);
						});
					});

					return previousInventoryClone;
				});
			},
			destroyAt: (position: number) => {
				setInventory(
					inventory.filter((_, index) => {
						return index !== position;
					})
				);
			},
		},
		getExperience: (skill: Skill) => {
			switch (skill) {
				case Skill.LOGGING:
					return loggingExperience;
				case Skill.MINING:
					return miningExperience;
				case Skill.SMITHING:
					return smithingExperience;
			}
		},
		increaseExperience: (amount: number, skill: Skill) => {
			const increaseExperience = (previousExperience: number) => {
				return previousExperience + amount;
			};

			switch (skill) {
				case Skill.LOGGING:
					setLoggingExperience(increaseExperience);
					break;
				case Skill.MINING:
					setMiningExperience(increaseExperience);
					break;
				case Skill.SMITHING:
					setSmithingExperience(increaseExperience);
					break;
			}
		},
		setActivity,
	};
});

export const MainCharacterProvider = ({ children }: MainCharacterProviderProps) => {
	return <MainCharacterContainer.Provider>{children}</MainCharacterContainer.Provider>;
};

export const useMainCharacter = () => {
	return MainCharacterContainer.useContainer();
};
