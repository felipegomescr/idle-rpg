import Image from "next/image";
import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { formatTime } from "@/helpers";
import { notFoundPlaceholderIcon, progressMultiplier } from "@/values";
import type { Activity, LootTable } from "@/types";

type ActivityCardProps = {
	actionText: string;
	activity: Activity;
	isDisabled: boolean;
	isPerformingActivity: boolean;
	onActivityComplete: (experience: number, lootTable: LootTable) => void;
	onClick: (isPerformingActivity: boolean) => void;
};

export const ActivityCard = ({
	actionText,
	activity,
	isDisabled,
	isPerformingActivity,
	onActivityComplete: handleActivityComplete,
	onClick: handleClick,
}: ActivityCardProps) => {
	const timeToCompletionCounter = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			if (isPerformingActivity) {
				clearInterval(timeToCompletionCounter.current!);
			}
		};
	}, [isPerformingActivity]);

	const experience = activity.experience * progressMultiplier;
	const timeToCompletion = activity.timeToCompletion / progressMultiplier;

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-900">
			<span className="font-bold">{`${activity.name} - ${formatTime(timeToCompletion)}`}</span>
			<div className="relative w-16 h-16">
				<Image alt="" layout="fill" src={activity.icon || notFoundPlaceholderIcon} />
			</div>
			<div className="text-center">
				{isPerformingActivity && <ProgressBar duration={timeToCompletion} loop />}
				<p>
					<span className="font-bold">Required level:</span> {activity.requiredLevel}
				</p>
				<p>
					<span className="font-bold">Experience:</span> {experience}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (!isPerformingActivity) {
						timeToCompletionCounter.current = setInterval(() => {
							handleActivityComplete(experience, activity.lootTable);
						}, timeToCompletion);
					}

					handleClick(isPerformingActivity);
				}}
			>
				{isPerformingActivity ? "Cancel" : actionText}
			</button>
		</div>
	);
};
