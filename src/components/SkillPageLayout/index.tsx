import { useState } from "react";
import { ActivityCard, Inventory } from "@/components";
import { useMc } from "@/containers";
import { Skill } from "@/enums";
import { canCreateRecipe, getSkillActivityList, getSkillName, rollLoot } from "@/helpers";
import type { Activity } from "@/types";

type SkillPageLayoutProps = {
	skill: Skill;
};

export const SkillPageLayout = ({ skill }: SkillPageLayoutProps) => {
	const [currentActivity, setCurrentActivity] = useState<Activity>();
	const mc = useMc();

	const skillActivityList = getSkillActivityList(skill);
	const skillExp = mc.getSkillExp(skill);
	const skillName = getSkillName(skill);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{skillName}</h1>
			<div>
				<span className="font-bold">{skillName} experience:</span> {skillExp}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{skillActivityList.map((activity) => {
					const isDisabled = activity.requiredExp > skillExp || !canCreateRecipe(mc.inv.itemList, activity.recipe);
					const isPerformingActivity = currentActivity?.name === activity.name;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							onActivityComplete={(expReward, lootTable) => {
								mc.increaseSkillExpBy(expReward, skill);
								mc.inv.bulkAdd(rollLoot(lootTable));

								if (activity.recipe) {
									mc.inv.bulkDestroy(activity.recipe);
								}
							}}
							onClick={(isPerformingActivity) => {
								setCurrentActivity(isPerformingActivity ? undefined : activity);
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
