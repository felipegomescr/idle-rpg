import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { Mastery } from "@/enums";
import { Container, Progress } from "@/services";
import { backpackCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Activity, Collection, MaterialInContainer, MaterialName } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [backpack, setBackpack] = useState<Container>(new Container(new Map<MaterialName, number>(), backpackCapacity));
	const [cookingExperience, setCookingExperience] = useState(0);
	const [fishingExperience, setFishingExperience] = useState(0);
	const [foragingExperience, setForagingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [mixingExperience, setMixingExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	useEffect(() => {
		const progress = Progress.load();

		if (progress) {
			setBackpack(new Container(progress.backpack, backpackCapacity));
			setCookingExperience(progress.cookingExperience);
			setFishingExperience(progress.fishingExperience);
			setForagingExperience(progress.foragingExperience);
			setMiningExperience(progress.miningExperience);
			setMixingExperience(progress.mixingExperience);
			setSmithingExperience(progress.smithingExperience);
		}
	}, []);

	useEffect(() => {
		Progress.save({
			backpack: backpack.content,
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
			content: backpack.content,
			discard: (material: MaterialInContainer) => {
				setBackpack(new Container(backpack.discard(material), backpackCapacity));
			},
			discardAll: () => {
				setBackpack(new Container(new Map<MaterialName, number>(), backpackCapacity));
			},
			discardMultiple: (materialList: Collection) => {
				setBackpack(new Container(backpack.discardMultiple(materialList), backpackCapacity));
			},
			store: (material: MaterialInContainer) => {
				if (!backpack.canStore(material)) {
					alert(`You cannot store ${material.name}.`);
					setActivity(undefined);

					return;
				}

				setBackpack(new Container(backpack.store(material), backpackCapacity));
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
