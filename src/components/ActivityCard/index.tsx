import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { formatTime } from "@/helpers";
import { Activity, Item } from "@/types";

type ActivityCardProps = {
	actionText: string;
	activity: Activity;
	isDisabled: boolean;
	isPerformingActivity: boolean;
	onActivityComplete: (experienceReward: number, lootTable: Item[]) => void;
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
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-main">
			<span className="font-bold">{`${activity.name} - ${formatTime(activity.timeToCompletion)}`}</span>
			<div className="text-center">
				{isPerformingActivity && <ProgressBar duration={activity.timeToCompletion} loop />}
				<p>
					<span className="font-bold">Required experience:</span> {activity.requiredExperience}
				</p>
				<p>
					<span className="font-bold">Experience reward:</span> {activity.experienceReward}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (!isPerformingActivity) {
						timeToCompletionCounter.current = setInterval(() => {
							handleActivityComplete(activity.experienceReward, activity.lootTable);
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
