import { useState } from "react";
import { ActivityCard, Inventory } from "@/components";
import { useMc } from "@/containers";
import { Skill } from "@/enums";
import { canCreateRecipe, getActivityList, getName, rollLoot } from "@/helpers";
import type { Activity } from "@/types";

type PageLayoutProps = {
	skill: Skill;
};

export const PageLayout = ({ skill }: PageLayoutProps) => {
	const [currentActivity, setCurrentActivity] = useState<Activity>();
	const mc = useMc();

	const activityList = getActivityList(skill);
	const exp = mc.getExp(skill);
	const name = getName(skill);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{name}</h1>
			<div>
				<span className="font-bold">{name} experience:</span> {exp}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{activityList.map((activity) => {
					const isDisabled = activity.requiredExp > exp || !canCreateRecipe(mc.inv.itemList, activity.recipe);
					const isPerformingActivity = currentActivity?.name === activity.name;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							onActivityComplete={(expReward, lootTable) => {
								mc.increaseExp(expReward, skill);
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
