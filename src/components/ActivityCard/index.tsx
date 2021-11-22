import { Popover } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { formatTimeToSecondsText } from "@/helpers";
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

	const showInformationButton = activity.requiredMaterialList || activity.rewardTable;
	const timeToCompletion = activity.timeToCompletion / progressMultiplier;

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-900">
			<div className="text-center">
				<div className="flex items-center justify-center space-x-2">
					<span className="font-bold">{`${activity.name} - ${formatTimeToSecondsText(timeToCompletion)}`}</span>
					{showInformationButton && (
						<Popover className="relative leading-none">
							{() => {
								return (
									<>
										<Popover.Button>
											<InformationCircleIcon className="w-5 h-5" />
										</Popover.Button>
										<Popover.Panel className="absolute z-10 w-screen max-w-sm p-4 space-y-4 text-left bg-white border border-gray-900">
											{activity.requiredMaterialList && (
												<div className="space-y-2">
													<div className="font-bold">Required Material List</div>
													{Array.from(activity.requiredMaterialList).map(([materialKey, number]) => {
														const material = materialList[materialKey];

														return (
															<div key={materialKey} className="flex items-center space-x-2">
																<div className="relative w-6 h-6">
																	<Image alt="" layout="fill" src={material.icon || notFoundPlaceholderIcon} />
																</div>
																<div>
																	<div>
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
													<div className="font-bold">Reward Table</div>
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
																	<div>
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
				<span className="text-sm italic">{activity.description}</span>
			</div>
			<div
				style={{
					marginTop: "auto",
				}}
			>
				<div className="relative w-16 h-16 mt-4">
					<Image alt="" layout="fill" src={activity.icon || notFoundPlaceholderIcon} />
				</div>
			</div>
			<div className="text-center">
				{isPerformingActivity && <ProgressBar duration={timeToCompletion} loop />}
				<p>
					<span className="font-bold">Level:</span> {activity.level}
				</p>
				<p>
					<span className="font-bold">Experience:</span> {activity.experience * progressMultiplier}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
				{isPerformingActivity ? "Cancel" : actionText}
			</button>
		</div>
	);
};
