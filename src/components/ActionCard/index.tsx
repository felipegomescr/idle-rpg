import { useEffect, useRef } from "react";
import { ProgressBar } from "@/components";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { Action, Item } from "@/types";

type ActionCardProps = {
	action: Action;
	actionText: string;
	isDisabled: boolean;
	isPerformingAction: boolean;
	onActionComplete: (expReward: number, lootTable: Item[]) => void;
	onClick: (isPerformingAction: boolean) => void;
};

export const ActionCard = ({
	action,
	actionText,
	isDisabled,
	isPerformingAction,
	onActionComplete: handleActionComplete,
	onClick: handleClick,
}: ActionCardProps) => {
	const timeToCompletionCounter = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			if (isPerformingAction) {
				clearInterval(timeToCompletionCounter.current!);
			}
		};
	}, [isPerformingAction]);

	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-black">
			<span className="font-bold">{`${action.name} - ${parseTimeInMsToTextInSec(action.timeToCompletion)}`}</span>
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
					if (!isPerformingAction) {
						timeToCompletionCounter.current = setInterval(() => {
							handleActionComplete(action.expReward, action.lootTable);
						}, action.timeToCompletion);
					}

					handleClick(isPerformingAction);
				}}
			>
				{isPerformingAction ? "Cancel" : actionText}
			</button>
		</div>
	);
};
