import { useState } from "react";
import { createContainer } from "unstated-next";
import { maxInventoryCapacity } from "@/helpers";
import { Skill } from "@/models";
import type { ReactNode } from "react";
import type { Item } from "@/models";

type McProviderProps = {
	children: ReactNode;
};

const McContainer = createContainer(() => {
	const [inventory, setInventory] = useState<Item[]>([]);
	const [isBusy, setBusy] = useState(false);
	const [miningExp, setMiningExp] = useState(0);
	const [woodcuttingExp, setWoodcuttingExp] = useState(0);

	return {
		inventory: {
			items: inventory,
			add: (item: Item) => {
				setInventory((prevInventory) => {
					// Is inventory full?
					if (prevInventory.length === maxInventoryCapacity) {
						return prevInventory;
					}

					return [...prevInventory, item];
				});
			},
			deleteAt: (itemIndex: number) => {
				const updatedInventory = inventory.filter((_, index) => {
					return index !== itemIndex;
				});

				setInventory(updatedInventory);
			},
		},
		isBusy,
		getSkillExp: (skill: Skill) => {
			switch (skill) {
				case Skill.MINING:
					return miningExp;
				case Skill.WOODCUTTING:
					return woodcuttingExp;
			}
		},
		increaseSkillExpBy: (amount: number, skill: Skill) => {
			const updateSkillExp = (prevSkillExp: number) => {
				return prevSkillExp + amount;
			};

			switch (skill) {
				case Skill.MINING:
					setMiningExp(updateSkillExp);
				case Skill.WOODCUTTING:
					setWoodcuttingExp(updateSkillExp);
			}
		},
		setBusy,
	};
});

export const McProvider = ({ children }: McProviderProps) => {
	return <McContainer.Provider>{children}</McContainer.Provider>;
};

export const useMc = () => {
	return McContainer.useContainer();
};
