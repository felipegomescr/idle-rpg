import Image from "next/image";
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
						<li key={position}>
							<div className="flex flex-col items-center p-2 space-y-2 border border-gray-900">
								<div className="relative w-8 h-8">
									<Image alt="" layout="fill" src={item.icon} />
								</div>
								<span>{item.name}</span>
								<button
									className="w-8 h-8 font-bold text-white bg-red-600 rounded-full disabled:opacity-50"
									disabled={isDisabled}
									onClick={() => {
										handleItemDelete(item, position);
									}}
								>
									&#10005;
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};
