import { useState } from "react";
import { createContainer } from "unstated-next";
import { Skill } from "@/models";
import { maxInventoryCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Item } from "@/models";

type McProviderProps = {
	children: ReactNode;
};

const McContainer = createContainer(() => {
	const [inventory, setInventory] = useState<Item[]>([]);
	const [loggingExp, setLoggingExp] = useState(0);
	const [miningExp, setMiningExp] = useState(0);

	return {
		inventory: {
			items: inventory,
			destroyAt: (itemIndex: number) => {
				setInventory(
					inventory.filter((_, index) => {
						return index !== itemIndex;
					})
				);
			},
			keep: (item: Item) => {
				setInventory((prevInventory) => {
					// Is inventory full?
					if (prevInventory.length === maxInventoryCapacity) {
						return prevInventory;
					}

					return [...prevInventory, item];
				});
			},
		},
		getSkillExp: (skill: Skill) => {
			switch (skill) {
				case Skill.LOGGING:
					return loggingExp;
				case Skill.MINING:
					return miningExp;
			}
		},
		increaseSkillExpBy: (amount: number, skill: Skill) => {
			const increaseSkillExp = (prevSkillExp: number) => {
				return prevSkillExp + amount;
			};

			switch (skill) {
				case Skill.LOGGING:
					setLoggingExp(increaseSkillExp);
				case Skill.MINING:
					setMiningExp(increaseSkillExp);
			}
		},
	};
});

export const McProvider = ({ children }: McProviderProps) => {
	return <McContainer.Provider>{children}</McContainer.Provider>;
};

export const useMc = () => {
	return McContainer.useContainer();
};
