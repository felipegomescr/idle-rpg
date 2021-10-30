import { useState } from "react";
import { ActionCard } from "@/components/ActionCard";
import { SkillPageLayout } from "@/components/SkillPageLayout";
import { useMc } from "@/containers/mc";
import { rollForLoot } from "@/helpers";
import { Skill } from "@/models";
import type { SkillPageLayoutProps } from "@/components/SkillPageLayout";
import type { Action } from "@/models";

type GatheringSkillTypePageLayoutProps = Pick<SkillPageLayoutProps, "title"> & {
	actions: Action[];
	skill: Skill;
};

export const GatheringSkillTypePageLayout = ({ actions, skill, title }: GatheringSkillTypePageLayoutProps) => {
	const [currentAction, setCurrentAction] = useState<Action>();
	const mc = useMc();

	const currentExp = mc.getSkillExp(skill);

	return (
		<SkillPageLayout currentExp={currentExp} title={title}>
			{actions.map((action) => {
				const isPerformingAction = currentAction?.name === action.name;

				return (
					<ActionCard
						key={action.id}
						action={action}
						actionText={action.actionText}
						isDisabled={(mc.isBusy && !isPerformingAction) || action.requiredExp > currentExp}
						isPerformingAction={isPerformingAction}
						onActionComplete={(rewardTable, rewardedExp) => {
							rollForLoot(rewardTable).forEach((reward) => {
								mc.inventory.add(reward);
							});

							mc.increaseSkillExpBy(rewardedExp, skill);
						}}
						onClick={(isPerformingAction) => {
							mc.setBusy(!isPerformingAction);
							setCurrentAction(isPerformingAction ? undefined : action);
						}}
					/>
				);
			})}
		</SkillPageLayout>
	);
};
