import { Item } from "@/types";

type InventoryProps = {
	itemList: Item[];
	onItemDestroy: (itemToDelete: Item, index: number) => void;
};

export const Inventory = ({ itemList, onItemDestroy: handleItemDestroy }: InventoryProps) => {
	return (
		<>
			<div className="font-bold">Inventory</div>
			<ul className="grid grid-cols-8 gap-2">
				{itemList.map((item, index) => {
					return (
						<li key={index} className="space-x-2">
							<button
								className="w-8 h-8 font-bold text-white bg-red-600 rounded-full"
								onClick={() => {
									handleItemDestroy(item, index);
								}}
							>
								&#10005;
							</button>
							<span>{item.name}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};
