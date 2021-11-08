import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { containerService, progressService } from "@/services";
import { Mastery } from "@/values";
import type { ReactNode } from "react";
import type { Activity, Collection, ContainerItem, ItemKey } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [backpack, setBackpack] = useState<Collection>(new Map<ItemKey, number>());
	const [carvingExperience, setCarvingExperience] = useState(0);
	const [cookingExperience, setCookingExperience] = useState(0);
	const [fishingExperience, setFishingExperience] = useState(0);
	const [loggingExperience, setLoggingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	useEffect(() => {
		const progress = progressService.load();

		if (progress) {
			setBackpack(new Map<ItemKey, number>(progress.backpack));
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
			backpack,
			carvingExperience,
			cookingExperience,
			fishingExperience,
			loggingExperience,
			miningExperience,
			smithingExperience,
		});
	}, [
		backpack,
		carvingExperience,
		cookingExperience,
		fishingExperience,
		loggingExperience,
		miningExperience,
		smithingExperience,
	]);

	return {
		activity,
		backpack: {
			content: backpack,
			add: (item: ContainerItem) => {
				setBackpack((previousBackpack) => {
					return containerService.add(previousBackpack, item);
				});
			},
			addMultiple: (itemList: Collection) => {
				setBackpack((previousBackpack) => {
					return containerService.addMultiple(itemList, previousBackpack);
				});
			},
			discard: (item: ContainerItem) => {
				setBackpack((previousBackpack) => {
					return containerService.discard(previousBackpack, item);
				});
			},
			discardAll: () => {
				setBackpack(new Map());
			},
			discardMultiple: (itemList: Collection) => {
				setBackpack((previousBackpack) => {
					return containerService.discardMultiple(itemList, previousBackpack);
				});
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
