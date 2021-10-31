import { useState } from "react";
import { ActionCard, Inventory } from "@/components";
import { useMc } from "@/containers";
import { Skill } from "@/enums";
import { canCreateRecipe, getSkillActionList, getSkillName, rollLoot } from "@/helpers";
import type { Action } from "@/types";

type SkillPageLayoutProps = {
	skill: Skill;
};

export const SkillPageLayout = ({ skill }: SkillPageLayoutProps) => {
	const [currentAction, setCurrentAction] = useState<Action>();
	const mc = useMc();

	const skillActionList = getSkillActionList(skill);
	const skillExp = mc.getSkillExp(skill);
	const skillName = getSkillName(skill);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{skillName}</h1>
			<div>
				<span className="font-bold">{skillName} experience:</span> {skillExp}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{skillActionList.map((action) => {
					const isDisabled = action.requiredExp > skillExp || !canCreateRecipe(mc.inv.itemList, action.recipe);
					const isPerformingAction = currentAction?.name === action.name;

					return (
						<ActionCard
							key={action.id}
							action={action}
							actionText={action.actionText}
							isDisabled={isDisabled}
							isPerformingAction={isPerformingAction}
							onActionComplete={(expReward, lootTable) => {
								mc.increaseSkillExpBy(expReward, skill);
								mc.inv.bulkAdd(rollLoot(lootTable));

								if (action.recipe) {
									mc.inv.bulkDestroy(action.recipe);
								}
							}}
							onClick={(isPerformingAction) => {
								setCurrentAction(isPerformingAction ? undefined : action);
							}}
						/>
					);
				})}
			</div>
			<Inventory
				itemList={mc.inv.itemList}
				onItemDestroy={(_, position) => {
					mc.inv.destroyAt(position);
				}}
			/>
		</div>
	);
};
