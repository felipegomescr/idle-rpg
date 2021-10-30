import { useState } from "react";
import { BaseSkillPageLayout } from "@/components/BaseSkillPageLayout";
import { GatheringActionCard } from "@/components/GatheringActionCard";
import { Inventory } from "@/components/Inventory";
import { useMc } from "@/containers/mc";
import { Skill } from "@/enums";
import { getSkillActions, getSkillName, hasRequiredItems, rollForLoot } from "@/helpers";
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
							isDisabled={action.requiredExp > skillExp || !hasRequiredItems(mc.inv.items, action.requiredItems)}
							isPerformingAction={isPerformingAction}
							onActionComplete={(expReward, lootTable) => {
								mc.increaseSkillExpBy(expReward, skill);
								rollForLoot(lootTable).forEach((item) => {
									mc.inv.keep(item);
								});
								// #TODO: Destruir requiredItems do inv.
							}}
							onClick={(isPerformingAction) => {
								setCurrentAction(isPerformingAction ? undefined : action);
							}}
						/>
					);
				})}
			</div>
			<Inventory
				items={mc.inv.items}
				onItemDestroy={(_, itemIndex) => {
					mc.inv.destroyAt(itemIndex);
				}}
			/>
		</BaseSkillPageLayout>
	);
};
