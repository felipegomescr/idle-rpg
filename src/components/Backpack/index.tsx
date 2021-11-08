import Image from "next/image";
import { collectionToContainerItemList } from "@/adapters";
import type { Collection, ContainerItem } from "@/types";

type BackpackProps = {
	content: Collection;
	isDisabled?: boolean;
	onAllDiscard: () => void;
	onItemDiscard: (item: ContainerItem) => void;
};

export const Backpack = ({
	content,
	isDisabled,
	onAllDiscard: handleAllDiscard,
	onItemDiscard: handleItemDiscard,
}: BackpackProps) => {
	const itemList = collectionToContainerItemList(content);

	return (
		<>
			<div className="flex items-center justify-between">
				<span className="font-bold">Backpack</span>
				<button
					className="px-4 py-2 font-bold text-white bg-red-600 disabled:opacity-50"
					disabled={isDisabled}
					onClick={handleAllDiscard}
				>
					Discard all
				</button>
			</div>
			<ul className="grid grid-cols-8 gap-2">
				{itemList.map((item, index) => {
					return (
						<li key={index}>
							<div className="flex flex-col items-center p-2 space-y-2 border border-gray-900">
								<div className="relative w-8 h-8">
									<Image alt="" layout="fill" src={item.icon} />
								</div>
								<span>
									{item.isStackable ? `${item.quantity}x ` : ""}
									{item.name}
								</span>
								<button
									className="w-8 h-8 font-bold text-white bg-red-600 rounded-full disabled:opacity-50"
									disabled={isDisabled}
									onClick={() => {
										handleItemDiscard(item);
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
