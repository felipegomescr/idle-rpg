import type { Item } from "@/types";

type InventoryProps = {
	isDisabled?: boolean;
	itemList: Item[];
	onItemDelete: (item: Item, position: number) => void;
};

export const Inventory = ({ isDisabled, itemList, onItemDelete: handleItemDelete }: InventoryProps) => {
	return (
		<>
			<div className="font-bold">Inventory</div>
			<ul className="grid grid-cols-8 gap-2">
				{itemList.map((item, position) => {
					return (
						<li key={position} className="space-x-2">
							<button
								className="w-8 h-8 font-bold text-white bg-red-600 rounded-full disabled:opacity-50"
								disabled={isDisabled}
								onClick={() => {
									handleItemDelete(item, position);
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
