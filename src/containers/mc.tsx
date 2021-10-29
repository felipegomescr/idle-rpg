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
			delAt: (itemIndex: number) => {
				const updatedInventory = inventory.filter((_, index) => {
					return index !== itemIndex;
				});

				setInventory(updatedInventory);
			},
		},
		woodcutting: {
			exp: woodcuttingExp,
			incBy: (amount: number) => {
				setWoodcuttingExp((prevWoodcuttingExp) => {
					return prevWoodcuttingExp + amount;
				});
			},
		},
	};
});

export const McProvider = ({ children }: McProviderProps) => {
	return <McContainer.Provider>{children}</McContainer.Provider>;
};

export const useMc = () => {
	const mc = McContainer.useContainer();

	return mc;
};
