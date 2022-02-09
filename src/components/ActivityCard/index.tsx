import { Popover } from "@headlessui/react";
import { LockOpenIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Tooltip from "@reach/tooltip";
import NextImage from "next/image";
import { useEffect, useRef } from "react";
import { Button, ProgressBar } from "@/components";
import { PROGRESS_MULTIPLIER } from "@/constants";
import { RequiredMaterialListInformation } from "./RequiredMaterialListInformation";
import { RewardTableInformation } from "./RewardTableInformation";
import type { Activity } from "@/types";

type ActivityCardProps = {
	actionText: string;
	activity: Activity;
	isDisabled: boolean;
	isPerformingActivity: boolean;
	showLevelRequirement: boolean;
	onActionClick: () => void;
	onActivityComplete: () => void;
};

export const ActivityCard = ({
	actionText,
	activity,
	isDisabled,
	isPerformingActivity,
	showLevelRequirement,
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

	const hasExtraInformation = activity.requiredMaterialList || activity.rewardTable;
	const timeToCompletion = activity.timeToCompletion / PROGRESS_MULTIPLIER;

	return (
		<div className="p-2 space-y-4 text-center bg-gray-800 border-2 border-gray-700 rounded">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2 font-medium">
					<Tooltip
						label={
							showLevelRequirement
								? `At least level ${activity.levelRequirement} is required to perform this activity.`
								: "You meet to level requirement for this activity."
						}
					>
						<div className="flex items-center justify-center w-10 h-10 py-1 text-xs uppercase bg-gray-700 rounded select-none">
							{showLevelRequirement ? (
								<div>
									<div>Lvl</div>
									<div>{activity.levelRequirement}</div>
								</div>
							) : (
								<LockOpenIcon className="w-6 h-6" />
							)}
						</div>
					</Tooltip>
					<div className="relative w-6 h-6">
						<NextImage alt="" layout="fill" src={activity.icon} />
					</div>
					<div>{activity.name}</div>
				</div>
				{hasExtraInformation && (
					<Popover className="relative leading-0">
						{() => {
							return (
								<>
									<Popover.Button>
										<InformationCircleIcon className="w-5 h-5" />
									</Popover.Button>
									<Popover.Panel className="absolute z-50 w-screen max-w-sm p-2 space-y-4 text-left bg-gray-800 border-2 border-gray-700 rounded">
										{activity.requiredMaterialList && (
											<RequiredMaterialListInformation requiredMaterialList={activity.requiredMaterialList} />
										)}
										{activity.rewardTable && <RewardTableInformation rewardTable={activity.rewardTable} />}
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
				<span className="relative w-6 h-6">
					<NextImage alt="" layout="fill" src={activity.actionIcon} />
				</span>
				<span>{isPerformingActivity ? "Stop" : actionText}</span>
			</Button>
		</div>
	);
};
