import { useEffect, useState } from "react";
import { BaseSkillPageLayout } from "@/components/BaseSkillPageLayout";
import { GatheringActionCard } from "@/components/GatheringActionCard";
import { useMc } from "@/containers/mc";
import { rollForLoot } from "@/helpers";
import { Skill } from "@/models";
import type { BaseSkillPageLayoutProps } from "@/components/BaseSkillPageLayout";
import type { GatheringAction } from "@/models";

type GatheringSkillPageLayoutProps = Pick<BaseSkillPageLayoutProps, "title"> & {
	actions: GatheringAction[];
	skill: Skill;
};

export const GatheringSkillPageLayout = ({ actions, skill, title }: GatheringSkillPageLayoutProps) => {
	const [currentAction, setCurrentAction] = useState<GatheringAction>();
	const mc = useMc();

	const currentExp = mc.getSkillExp(skill);

	useEffect(() => {
		return () => {
			mc.setBusy(false);
		};
	}, []);

	return (
		<BaseSkillPageLayout currentExp={currentExp} title={title}>
			{actions.map((action) => {
				const isPerformingAction = currentAction?.name === action.name;

				return (
					<GatheringActionCard
						key={action.id}
						action={action}
						actionText={action.actionText}
						isDisabled={(mc.isBusy && !isPerformingAction) || action.requiredExp > currentExp}
						isPerformingAction={isPerformingAction}
						onActionComplete={(expReward, lootTable) => {
							rollForLoot(lootTable).forEach((item) => {
								mc.inventory.keep(item);
							});

							mc.increaseSkillExpBy(expReward, skill);
						}}
						onClick={(isPerformingAction) => {
							mc.setBusy(!isPerformingAction);
							setCurrentAction(isPerformingAction ? undefined : action);
						}}
					/>
				);
			})}
		</BaseSkillPageLayout>
	);
};
