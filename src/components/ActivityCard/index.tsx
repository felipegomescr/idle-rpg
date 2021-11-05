import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { formatTime } from "@/helpers";
import type { Activity, Item } from "@/types";

type ActivityCardProps = {
	actionText: string;
	activity: Activity;
	isDisabled: boolean;
	isPerformingActivity: boolean;
	onActivityComplete: (experience: number, lootTable: Item[]) => void;
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

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-900">
			<span className="font-bold">{`${activity.name} - ${formatTime(activity.timeToCompletion)}`}</span>
			<div className="text-center">
				{isPerformingActivity && <ProgressBar duration={activity.timeToCompletion} loop />}
				<p>
					<span className="font-bold">Required level:</span> {activity.requiredLevel}
				</p>
				<p>
					<span className="font-bold">Experience:</span> {activity.experience}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (!isPerformingActivity) {
						timeToCompletionCounter.current = setInterval(() => {
							handleActivityComplete(activity.experience, activity.lootTable);
						}, activity.timeToCompletion);
					}

					handleClick(isPerformingActivity);
				}}
			>
				{isPerformingActivity ? "Cancel" : actionText}
			</button>
		</div>
	);
};
