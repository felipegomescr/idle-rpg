import { useState } from "react";
import { createContainer } from "unstated-next";
import { maxInventoryCapacity } from "@/helpers";
import type { ReactNode } from "react";
import type { Item } from "@/models";

type McProviderProps = {
	children: ReactNode;
};

const McContainer = createContainer(() => {
	const [inventory, setInventory] = useState<Item[]>([]);
	const [isBusy, setBusy] = useState(false);
	const [woodcuttingExp, setWoodcuttingExp] = useState(0);

	return {
		inventory: {
			items: inventory,
			add: (item: Item) => {
				setInventory((prevInventory) => {
					// Inventory is full.
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
		woodcutting: {
			exp: woodcuttingExp,
			incBy: (amount: number) => {
				setWoodcuttingExp((prevWoodcuttingExp) => {
					return prevWoodcuttingExp + amount;
				});
			},
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
