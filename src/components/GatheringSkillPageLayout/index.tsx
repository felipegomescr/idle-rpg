import { useState } from "react";
import { BaseSkillPageLayout } from "@/components/BaseSkillPageLayout";
import { GatheringActionCard } from "@/components/GatheringActionCard";
import { Inventory } from "@/components/Inventory";
import { useMc } from "@/containers/mc";
import { getSkillActions, getSkillName, rollForLoot } from "@/helpers";
import { Skill } from "@/models";
import type { GatheringAction } from "@/models";

type GatheringSkillPageLayoutProps = {
	skill: Skill;
};

export const GatheringSkillPageLayout = ({ skill }: GatheringSkillPageLayoutProps) => {
	const [currentAction, setCurrentAction] = useState<GatheringAction>();
	const mc = useMc();

	const skillActions = getSkillActions(skill);
	const skillExp = mc.getSkillExp(skill);
	const skillName = getSkillName(skill);

	return (
		<BaseSkillPageLayout skillExp={skillExp} skillName={skillName}>
			<div className="grid grid-cols-4 gap-4">
				{skillActions.map((action) => {
					const isPerformingAction = currentAction?.name === action.name;

					return (
						<GatheringActionCard
							key={action.id}
							action={action}
							actionText={action.actionText}
							isDisabled={action.requiredExp > skillExp}
							isPerformingAction={isPerformingAction}
							onActionComplete={(expReward, lootTable) => {
								mc.increaseSkillExpBy(expReward, skill);
								rollForLoot(lootTable).forEach((item) => {
									mc.inventory.keep(item);
								});
							}}
							onClick={(isPerformingAction) => {
								setCurrentAction(isPerformingAction ? undefined : action);
							}}
						/>
					);
				})}
			</div>
			<Inventory
				items={mc.inventory.items}
				onItemDestroy={(_, itemIndex) => {
					mc.inventory.destroyAt(itemIndex);
				}}
			/>
		</BaseSkillPageLayout>
	);
};
