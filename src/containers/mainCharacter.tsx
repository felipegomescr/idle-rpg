import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { Mastery } from "@/enums";
import { containerService, progressService } from "@/services";
import type { ReactNode } from "react";
import type { Activity, Collection, ContainerMaterial, MaterialKey } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [backpack, setBackpack] = useState<Collection>(new Map<MaterialKey, number>());
	const [cookingExperience, setCookingExperience] = useState(0);
	const [fishingExperience, setFishingExperience] = useState(0);
	const [foragingExperience, setForagingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [mixingExperience, setMixingExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	useEffect(() => {
		const progress = progressService.load();

		if (progress) {
			setBackpack(new Map<MaterialKey, number>(progress.backpack));
			setCookingExperience(progress.cookingExperience);
			setFishingExperience(progress.fishingExperience);
			setForagingExperience(progress.foragingExperience);
			setMiningExperience(progress.miningExperience);
			setMixingExperience(progress.mixingExperience);
			setSmithingExperience(progress.smithingExperience);
		}
	}, []);

	useEffect(() => {
		progressService.save({
			backpack,
			cookingExperience,
			fishingExperience,
			foragingExperience,
			miningExperience,
			mixingExperience,
			smithingExperience,
		});
	}, [
		backpack,
		cookingExperience,
		fishingExperience,
		foragingExperience,
		miningExperience,
		mixingExperience,
		smithingExperience,
	]);

	return {
		activity,
		backpack: {
			content: backpack,
			discard: (material: ContainerMaterial) => {
				setBackpack((previousBackpack) => {
					return containerService.discard(material, previousBackpack);
				});
			},
			discardAll: () => {
				setBackpack(new Map());
			},
			discardMultiple: (materialList: Collection) => {
				setBackpack((previousBackpack) => {
					return containerService.discardMultiple(materialList, previousBackpack);
				});
			},
			store: (material: ContainerMaterial) => {
				setBackpack((previousBackpack) => {
					return containerService.store(material, previousBackpack);
				});
			},
			storeMultiple: (materialList: Collection) => {
				setBackpack((previousBackpack) => {
					return containerService.storeMultiple(materialList, previousBackpack);
				});
			},
		},
		getExperience: (mastery: Mastery) => {
			switch (mastery) {
				case Mastery.COOKING:
					return cookingExperience;
				case Mastery.FISHING:
					return fishingExperience;
				case Mastery.FORAGING:
					return foragingExperience;
				case Mastery.MINING:
					return miningExperience;
				case Mastery.MIXING:
					return mixingExperience;
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
				case Mastery.COOKING:
					setCookingExperience(setExperience);
					break;
				case Mastery.FISHING:
					setFishingExperience(setExperience);
					break;
				case Mastery.FORAGING:
					setForagingExperience(setExperience);
					break;
				case Mastery.MINING:
					setMiningExperience(setExperience);
					break;
				case Mastery.MIXING:
					setMixingExperience(setExperience);
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
