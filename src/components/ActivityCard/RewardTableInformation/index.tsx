import NextImage from "next/image";
import * as materialList from "@/materials";
import type { RewardTable } from "@/types";

type RewardTableInformationProps = {
	rewardTable: RewardTable;
};

export const RewardTableInformation = ({ rewardTable }: RewardTableInformationProps) => {
	return (
		<div className="space-y-2 leading-none">
			<div className="font-medium">Reward Table</div>
			{Array.from(rewardTable).map(([materialKey, rewardStatistics]) => {
				const material = materialList[materialKey];
				const numberText =
					rewardStatistics.minimumNumber === rewardStatistics.maximumNumber
						? `${rewardStatistics.minimumNumber}x`
						: `${rewardStatistics.minimumNumber}~${rewardStatistics.maximumNumber}x`;

				return (
					<div key={materialKey} className="flex items-center space-x-2">
						<div className="relative w-6 h-6">
							<NextImage alt="" layout="fill" src={material.icon} />
						</div>
						<div>
							<div className="font-medium">
								{material.name} {numberText}
							</div>
							<div className="text-xs italic">{material.description}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
