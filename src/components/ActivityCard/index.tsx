import Image from "next/image";
import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { formatTimeToSecondsText } from "@/helpers";
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

	const timeToCompletion = activity.timeToCompletion / progressMultiplier;

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-900">
			<span className="font-bold">{`${activity.name} - ${formatTimeToSecondsText(timeToCompletion)}`}</span>
			<div className="relative w-16 h-16">
				<Image alt="" layout="fill" src={activity.icon || notFoundPlaceholderIcon} />
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
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
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
