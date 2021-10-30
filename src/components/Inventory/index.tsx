import { Item } from "@/models";

type InventoryProps = {
	items: Item[];
	onItemDestroy: (itemToDelete: Item, itemIndex: number) => void;
};

export const Inventory = ({ items, onItemDestroy: handleItemDestroy }: InventoryProps) => {
	return (
		<>
			<div className="font-bold">Inventory</div>
			<ul className="grid grid-cols-8 gap-2">
				{items.map((item, itemIndex) => {
					return (
						<li key={itemIndex} className="space-x-2">
							<button
								className="w-8 h-8 font-bold text-white bg-red-600 rounded-full"
								onClick={() => {
									handleItemDestroy(item, itemIndex);
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
