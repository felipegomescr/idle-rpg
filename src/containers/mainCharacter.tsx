import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { BACKPACK_CAPACITY } from "@/constants";
import { Mastery } from "@/enumerators";
import { Container, Progress } from "@/services";
import type { ReactNode } from "react";
import type { Activity, Collection, ContainerMaterial, MaterialKey } from "@/types";

type MainCharacterProviderProps = {
	children: ReactNode;
};

const MainCharacterContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [backpack, setBackpack] = useState<Container>(new Container(new Map<MaterialKey, number>(), BACKPACK_CAPACITY));
	const [cookingExperience, setCookingExperience] = useState(0);
	const [fishingExperience, setFishingExperience] = useState(0);
	const [foragingExperience, setForagingExperience] = useState(0);
	const [miningExperience, setMiningExperience] = useState(0);
	const [mixingExperience, setMixingExperience] = useState(0);
	const [smithingExperience, setSmithingExperience] = useState(0);

	useEffect(() => {
		const progress = Progress.load();

		if (progress) {
			setBackpack(new Container(progress.backpack, BACKPACK_CAPACITY));
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
			capacity: BACKPACK_CAPACITY,
			content: backpack.content,
			discard: (containerMaterial: ContainerMaterial) => {
				setBackpack(new Container(backpack.discard(containerMaterial), BACKPACK_CAPACITY));
			},
			discardAll: () => {
				setBackpack(new Container(new Map<MaterialKey, number>(), BACKPACK_CAPACITY));
			},
			discardMultiple: (collection: Collection) => {
				setBackpack(new Container(backpack.discardMultiple(collection), BACKPACK_CAPACITY));
			},
			store: (containerMaterial: ContainerMaterial) => {
				if (!backpack.canStore(containerMaterial)) {
					alert(`You cannot store ${containerMaterial.name}.`);
					setActivity(undefined);

					return;
				}

				setBackpack(new Container(backpack.store(containerMaterial), BACKPACK_CAPACITY));
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
