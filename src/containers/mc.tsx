import times from "lodash.times";
import { useState } from "react";
import { createContainer } from "unstated-next";
import { Skill } from "@/enums";
import { maxInvCapacity } from "@/values";
import type { ReactNode } from "react";
import type { Activity, Collection, Item } from "@/types";

type McProviderProps = {
	children: ReactNode;
};

const McContainer = createContainer(() => {
	const [activity, setActivity] = useState<Activity>();
	const [inv, setInv] = useState<Item[]>([]);
	const [loggingExp, setLoggingExp] = useState(0);
	const [miningExp, setMiningExp] = useState(0);
	const [smithingExp, setSmithingExp] = useState(0);

	return {
		activity,
		inv: {
			itemList: inv,
			bulkAdd: (itemList: Item[]) => {
				setInv((prevInv) => {
					return [...prevInv, ...itemList.slice(0, maxInvCapacity - prevInv.length)];
				});
			},
			bulkDestroy: (itemList: Collection) => {
				setInv((prevInv) => {
					const prevInvClone = [...prevInv];

					Object.entries(itemList).forEach(([itemKey, amount]) => {
						times(amount, () => {
							const index = prevInv.findIndex((item) => {
								return item.key === itemKey;
							});

							if (index === -1) {
								return;
							}

							prevInvClone.splice(index, 1);
						});
					});

					return prevInvClone;
				});
			},
			destroyAt: (position: number) => {
				setInv(
					inv.filter((_, index) => {
						return index !== position;
					})
				);
			},
		},
		getExp: (skill: Skill) => {
			switch (skill) {
				case Skill.LOGGING:
					return loggingExp;
				case Skill.MINING:
					return miningExp;
				case Skill.SMITHING:
					return smithingExp;
			}
		},
		increaseExp: (amount: number, skill: Skill) => {
			const increaseExp = (prevExp: number) => {
				return prevExp + amount;
			};

			switch (skill) {
				case Skill.LOGGING:
					setLoggingExp(increaseExp);
					break;
				case Skill.MINING:
					setMiningExp(increaseExp);
					break;
				case Skill.SMITHING:
					setSmithingExp(increaseExp);
					break;
			}
		},
		setActivity,
	};
});

export const McProvider = ({ children }: McProviderProps) => {
	return <McContainer.Provider>{children}</McContainer.Provider>;
};

export const useMc = () => {
	return McContainer.useContainer();
};
