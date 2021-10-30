import { useEffect, useRef } from "react";
import { BaseActionCard } from "@/components/BaseActionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { GatheringAction, Item } from "@/models";

type GatheringActionCardProps = {
	action: GatheringAction;
	actionText: string;
	isDisabled: boolean;
	isPerformingAction: boolean;
	onActionComplete: (expReward: number, lootTable: Item[]) => void;
	onClick: (isPerformingAction: boolean) => void;
};

export const GatheringActionCard = ({
	action,
	actionText,
	isDisabled,
	isPerformingAction,
	onActionComplete: handleActionComplete,
	onClick: handleClick,
}: GatheringActionCardProps) => {
	const timeToCompletionCounter = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			clearInterval(timeToCompletionCounter.current!);
		};
	}, []);

	return (
		<BaseActionCard title={`${action.name} - ${parseTimeInMsToTextInSec(action.timeToCompletion)}`}>
			<div className="text-center">
				{isPerformingAction && <ProgressBar duration={action.timeToCompletion} loop />}
				<p>
					<span className="font-bold">Required experience:</span> {action.requiredExp}
				</p>
				<p>
					<span className="font-bold">Experience reward:</span> {action.expReward}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (isPerformingAction) {
						clearInterval(timeToCompletionCounter.current!);
					} else {
						timeToCompletionCounter.current = setInterval(() => {
							handleActionComplete(action.expReward, action.lootTable);
						}, action.timeToCompletion);
					}

					handleClick(isPerformingAction);
				}}
			>
				{isPerformingAction ? "Cancel" : actionText}
			</button>
		</BaseActionCard>
	);
};
