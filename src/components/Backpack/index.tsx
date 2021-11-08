import Image from "next/image";
import { collectionToMaterialInContainerList } from "@/adapters";
import type { Collection, MaterialInContainer } from "@/types";

type BackpackProps = {
	content: Collection;
	isDisabled?: boolean;
	onAllDiscard: () => void;
	onMaterialDiscard: (material: MaterialInContainer) => void;
};

export const Backpack = ({
	content,
	isDisabled,
	onAllDiscard: handleAllDiscard,
	onMaterialDiscard: handleMaterialDiscard,
}: BackpackProps) => {
	const materialList = collectionToMaterialInContainerList(content);

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
				{materialList.map((material, index) => {
					return (
						<li key={index}>
							<div className="flex flex-col items-center p-2 space-y-2 border border-gray-900">
								<div className="relative w-8 h-8">
									<Image alt="" layout="fill" src={material.icon} />
								</div>
								<span>
									{`${material.number}x`} {material.name}
								</span>
								<button
									className="w-8 h-8 font-bold text-white bg-red-600 rounded-full disabled:opacity-50"
									disabled={isDisabled}
									onClick={() => {
										handleMaterialDiscard(material);
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
