import { XIcon } from "@heroicons/react/solid";
import Tooltip from "@reach/tooltip";
import Image from "next/image";
import { collectionToMaterialInContainerList } from "@/adapters";
import { Button } from "@/components";
import type { Collection, MaterialInContainer } from "@/types";
import { IconButton } from "../IconButton";

type BackpackProps = {
	capacity: number;
	content: Collection;
	isDisabled?: boolean;
	onAllDiscard: () => void;
	onMaterialDiscard: (material: MaterialInContainer) => void;
};

export const Backpack = ({
	capacity,
	content,
	isDisabled,
	onAllDiscard: handleAllDiscard,
	onMaterialDiscard: handleMaterialDiscard,
}: BackpackProps) => {
	const materialList = collectionToMaterialInContainerList(content);

	return (
		<>
			<div className="flex items-center justify-between">
				<span className="font-bold">
					Backpack ({materialList.length}/{capacity})
				</span>
				<Button
					colorScheme={Button.ColorScheme.RED}
					disabled={isDisabled || materialList.length === 0}
					onClick={handleAllDiscard}
				>
					Discard all
				</Button>
			</div>
			<ul className="grid grid-cols-8 gap-2">
				{materialList.map((material, index) => {
					return (
						<Tooltip key={index} label={material.description}>
							<li>
								<div className="flex flex-col items-center h-full p-2 space-y-2 border border-gray-900">
									<div className="relative w-8 h-8">
										<Image alt="" layout="fill" src={material.icon} />
									</div>
									<span className="text-center">
										({material.number}/{material.maximumNumber}) {material.name}
									</span>
									<div
										style={{
											marginTop: "auto",
										}}
									>
										<IconButton
											className="w-8 h-8 mt-2 font-bold text-white bg-red-600 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
											colorScheme={IconButton.ColorScheme.RED}
											icon="XIcon"
											disabled={isDisabled}
											onClick={() => {
												handleMaterialDiscard(material);
											}}
										/>
									</div>
								</div>
							</li>
						</Tooltip>
					);
				})}
			</ul>
		</>
	);
};
