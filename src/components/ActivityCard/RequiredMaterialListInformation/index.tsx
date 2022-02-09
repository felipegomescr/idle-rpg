import NextImage from "next/image";
import * as materialList from "@/materials";
import type { Collection } from "@/types";

type RequiredMaterialListInformationProps = {
	requiredMaterialList: Collection;
};

export const RequiredMaterialListInformation = ({ requiredMaterialList }: RequiredMaterialListInformationProps) => {
	return (
		<div className="space-y-2">
			<div className="font-medium">Required Material List</div>
			{Array.from(requiredMaterialList).map(([materialKey, number]) => {
				const material = materialList[materialKey];

				return (
					<div key={materialKey} className="flex items-center space-x-2">
						<div className="relative w-6 h-6">
							<NextImage alt="" layout="fill" src={material.icon} />
						</div>
						<div>
							<div className="font-medium">
								{material.name} {number}x
							</div>
							<div className="text-xs italic">{material.description}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
