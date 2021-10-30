import { useEffect, useRef } from "react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { parseTimeInMsToTextInSec } from "@/helpers";
import { Action, Item } from "@/models";

type ActionCardProps = {
	action: Action;
	actionText: string;
	isDisabled: boolean;
	isPerformingAction: boolean;
	onActionComplete: (rewardTable: Item[], rewardedExp: number) => void;
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
	const intervalUntilNextReward = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			clearInterval(intervalUntilNextReward.current!);
		};
	}, []);

	return (
		<Card title={`${action.name} - ${parseTimeInMsToTextInSec(action.timeUntilReward)}`}>
			<div className="text-center">
				{isPerformingAction && <ProgressBar duration={action.timeUntilReward} loop />}
				<p>
					<span className="font-bold">Required experience:</span> {action.requiredExp}
				</p>
				<p>
					<span className="font-bold">Rewarded experience:</span> {action.rewardedExp}
				</p>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-600 disabled:opacity-50"
				disabled={isDisabled}
				onClick={() => {
					if (isPerformingAction) {
						clearInterval(intervalUntilNextReward.current!);
					} else {
						intervalUntilNextReward.current = setInterval(() => {
							handleActionComplete(action.rewardTable, action.rewardedExp);
						}, action.timeUntilReward);
					}

					handleClick(isPerformingAction);
				}}
			>
				{isPerformingAction ? "Cancel" : actionText}
			</button>
		</Card>
	);
};
