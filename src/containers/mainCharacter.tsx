import camelCase from "lodash.camelcase";
import times from "lodash.times";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { progressService } from "@/helpers";
import { Mastery, maximumInventoryCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Activity, Collection, Item } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [inventory, setInventory] = useState<Item[]>([]);
	const [carvingExperience, setCarvingExperience] = useState(0);
	const [cookingExperience, setCookingExperience] = useState(0);
	const [fishingExperience, setFishingExperience] = useState(0);
	const [loggingExperience, setLoggingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	useEffect(() => {
		const progress = progressService.load();

		if (progress) {
			setInventory(progress.inventory);
			setCarvingExperience(progress.carvingExperience);
			setCookingExperience(progress.cookingExperience);
			setFishingExperience(progress.fishingExperience);
			setLoggingExperience(progress.loggingExperience);
			setMiningExperience(progress.miningExperience);
			setSmithingExperience(progress.smithingExperience);
		}
	}, []);

	useEffect(() => {
		progressService.save({
			inventory,
			carvingExperience,
			cookingExperience,
			fishingExperience,
			loggingExperience,
			miningExperience,
			smithingExperience,
		});
	}, [
		inventory,
		carvingExperience,
		cookingExperience,
		fishingExperience,
		loggingExperience,
		miningExperience,
		smithingExperience,
	]);

	return {
		activity,
		inventory: {
			itemList: inventory,
			bulkAdd: (itemList: Item[]) => {
				setInventory((previousInventory) => {
					const inventory = [
						...previousInventory,
						...itemList.slice(0, maximumInventoryCapacity - previousInventory.length),
					];

					if (inventory.length === maximumInventoryCapacity) {
						alert("Inventory is full!");
						setActivity(undefined);
					}

					return inventory;
				});
			},
			bulkDelete: (itemList: Collection) => {
				setInventory((previousInventory) => {
					const previousInventoryClone = [...previousInventory];

					Object.entries(itemList).forEach(([itemKey, quantity]) => {
						times(quantity, () => {
							const index = previousInventory.findIndex((item) => {
								return camelCase(item.name) === itemKey;
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
			deleteAt: (position: number) => {
				setInventory(
					inventory.filter((_, index) => {
						return index !== position;
					})
				);
			},
		},
		getExperience: (mastery: Mastery) => {
			switch (mastery) {
				case Mastery.CARVING:
					return carvingExperience;
				case Mastery.COOKING:
					return cookingExperience;
				case Mastery.FISHING:
					return fishingExperience;
				case Mastery.LOGGING:
					return loggingExperience;
				case Mastery.MINING:
					return miningExperience;
				case Mastery.SMITHING:
					return smithingExperience;
			}
		},
		setActivity,
		setExperience: (amount: number, mastery: Mastery) => {
			const setExperience = (previousExperience: number) => {
				return previousExperience + amount;
			};

			switch (mastery) {
				case Mastery.CARVING:
					setCarvingExperience(setExperience);
					break;
				case Mastery.COOKING:
					setCookingExperience(setExperience);
					break;
				case Mastery.FISHING:
					setFishingExperience(setExperience);
					break;
				case Mastery.LOGGING:
					setLoggingExperience(setExperience);
					break;
				case Mastery.MINING:
					setMiningExperience(setExperience);
					break;
				case Mastery.SMITHING:
					setSmithingExperience(setExperience);
					break;
			}
		},
	};
});

export const MainCharacterProvider = ({ children }: MainCharacterProviderProps) => {
	return <MainCharacterContainer.Provider>{children}</MainCharacterContainer.Provider>;
};

export const useMainCharacter = () => {
	return MainCharacterContainer.useContainer();
};
