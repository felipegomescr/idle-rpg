import { Popover } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Tooltip from "@reach/tooltip";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, ProgressBar } from "@/components";
import * as materialList from "@/materials";
import { notFoundPlaceholderIcon, progressMultiplier } from "@/values";
import type { Activity } from "@/types";

type ActivityCardProps = {
	actionText: string;
	activity: Activity;
	isDisabled: boolean;
	isPerformingActivity: boolean;
	onActionClick: () => void;
	onActivityComplete: () => void;
};

export const ActivityCard = ({
	actionText,
	activity,
	isDisabled,
	isPerformingActivity,
	onActionClick: handleActionClick,
	onActivityComplete: handleActivityComplete,
}: ActivityCardProps) => {
	const timeToCompletionCounter = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			if (isPerformingActivity) {
				clearInterval(timeToCompletionCounter.current!);
			}
		};
	}, [isPerformingActivity]);

	const hasInformation = activity.requiredMaterialList || activity.rewardTable;
	const timeToCompletion = activity.timeToCompletion / progressMultiplier;

	return (
		<div className="p-2 space-y-4 text-center bg-gray-800 border-2 border-gray-700 rounded">
			<div className="flex items-center justify-between">
				<div className="flex items-center self-start space-x-2 font-medium text-center">
					<Tooltip label="Required level.">
						<div className="w-10 py-1 text-xs uppercase bg-gray-700 rounded select-none">
							<div>Lvl</div>
							<div>{activity.level}</div>
						</div>
					</Tooltip>
					<div className="relative w-6 h-6">
						<Image alt="" layout="fill" src={activity.icon || notFoundPlaceholderIcon} />
					</div>
					<div>{activity.name}</div>
				</div>
				{hasInformation && (
					<Popover className="relative leading-none">
						{() => {
							return (
								<>
									<Popover.Button>
										<InformationCircleIcon className="w-5 h-5" />
									</Popover.Button>
									<Popover.Panel className="absolute z-50 w-screen max-w-sm p-2 space-y-4 text-left bg-gray-800 border-2 border-gray-700 rounded">
										{activity.requiredMaterialList && (
											<div className="space-y-2">
												<div className="font-medium">Required Material List</div>
												{Array.from(activity.requiredMaterialList).map(([materialKey, number]) => {
													const material = materialList[materialKey];

													return (
														<div key={materialKey} className="flex items-center space-x-2">
															<div className="relative w-6 h-6">
																<Image alt="" layout="fill" src={material.icon || notFoundPlaceholderIcon} />
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
										)}
										{activity.rewardTable && (
											<div className="space-y-2">
												<div className="font-medium">Reward Table</div>
												{Array.from(activity.rewardTable).map(([materialKey, rewardStatistics]) => {
													const material = materialList[materialKey];
													const numberText =
														rewardStatistics.minimumNumber === rewardStatistics.maximumNumber
															? `${rewardStatistics.minimumNumber}x`
															: `${rewardStatistics.minimumNumber}~${rewardStatistics.maximumNumber}x`;

													return (
														<div key={materialKey} className="flex items-center space-x-2">
															<div className="relative w-6 h-6">
																<Image alt="" layout="fill" src={material.icon || notFoundPlaceholderIcon} />
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
										)}
									</Popover.Panel>
								</>
							);
						}}
					</Popover>
				)}
			</div>
			<div className="text-xs italic">{activity.description}</div>
			<ProgressBar duration={timeToCompletion} loop play={isPerformingActivity} />
			<Button
				colorScheme={Button.ColorScheme.GREEN}
				disabled={isDisabled}
				onClick={() => {
					if (!isPerformingActivity) {
						timeToCompletionCounter.current = setInterval(() => {
							handleActivityComplete();
						}, timeToCompletion);
					}

					handleActionClick();
				}}
			>
				<div className="relative w-6 h-6">
					<Image alt="" layout="fill" src={activity.actionIcon || notFoundPlaceholderIcon} />
				</div>
				<span>{isPerformingActivity ? "Cancel" : actionText}</span>
			</Button>
		</div>
	);
};
