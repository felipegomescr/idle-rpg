import Tooltip from "@reach/tooltip";
import NextImage from "next/image";
import { collectionToContainerMaterialList } from "@/adapters";
import { Button, IconButton } from "@/components";
import type { Collection, ContainerMaterial } from "@/types";

type BackpackProps = {
	capacity: number;
	content: Collection;
	isDisabled: boolean;
	onAllDiscard: () => void;
	onDiscard: (containerMaterial: ContainerMaterial) => void;
};

export const Backpack = ({
	capacity,
	content,
	isDisabled,
	onAllDiscard: handleAllDiscard,
	onDiscard: handleDiscard,
}: BackpackProps) => {
	const containerMaterialList = collectionToContainerMaterialList(content);

	return (
		<>
			<div className="flex items-center justify-between">
				<span className="font-bold">
					Backpack ({containerMaterialList.length}/{capacity})
				</span>
				<Button
					colorScheme={Button.ColorScheme.RED}
					disabled={isDisabled || containerMaterialList.length === 0}
					onClick={handleAllDiscard}
				>
					Discard all
				</Button>
			</div>
			<ul className="grid grid-cols-8 gap-2">
				{containerMaterialList.map((containerMaterial, index) => {
					return (
						<Tooltip key={index} label={containerMaterial.description}>
							<li>
								<div className="flex flex-col items-center h-full p-2 space-y-2 border border-gray-900">
									<div className="relative w-8 h-8">
										<NextImage alt="" layout="fill" src={containerMaterial.icon} />
									</div>
									<span className="text-center">
										({containerMaterial.number}/{containerMaterial.maximumNumber}) {containerMaterial.name}
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
												handleDiscard(containerMaterial);
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
