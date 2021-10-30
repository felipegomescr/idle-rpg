import { useState } from "react";
import { createContainer } from "unstated-next";
import { Skill } from "@/enums";
import { maxInvCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Item, ItemsKeys } from "@/models";

type McProviderProps = {
	children: ReactNode;
};

const McContainer = createContainer(() => {
	const [inv, setInv] = useState<Item[]>([]);
	const [loggingExp, setLoggingExp] = useState(0);
	const [miningExp, setMiningExp] = useState(0);
	const [smithingExp, setSmithingExp] = useState(0);

	return {
		inv: {
			items: inv,
			destroyAt: (itemIndex: number) => {
				setInv(
					inv.filter((_, index) => {
						return index !== itemIndex;
					})
				);
			},
			destroyByName: (itemName: ItemsKeys) => {
				setInv(
					inv.filter((item) => {
						return item.name !== itemName;
					})
				);
			},
			keep: (item: Item) => {
				setInv((prevInv) => {
					if (prevInv.length === maxInvCapacity) {
						return prevInv;
					}

					return [...prevInv, item];
				});
			},
		},
		getSkillExp: (skill: Skill) => {
			switch (skill) {
				case Skill.LOGGING:
					return loggingExp;
				case Skill.MINING:
					return miningExp;
				case Skill.SMITHING:
					return smithingExp;
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
				case Skill.SMITHING:
					setSmithingExp(increaseSkillExp);
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
