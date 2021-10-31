import { ActivityCard, Inventory } from "@/components";
import { useMainCharacter } from "@/containers";
import { Skill } from "@/enums";
import { canCreateRecipe, getActivityList, getName, rollLoot } from "@/helpers";

type PageLayoutProps = {
	skill: Skill;
};

export const PageLayout = ({ skill }: PageLayoutProps) => {
	const mainCharacter = useMainCharacter();

	const activityList = getActivityList(skill);
	const experience = mainCharacter.getExperience(skill);
	const name = getName(skill);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{name}</h1>
			<div>
				<span className="font-bold">{name} experience:</span> {experience}
			</div>
			<div className="grid grid-cols-4 gap-4">
				{activityList.map((activity) => {
					const isDisabled =
						activity.requiredExperience > experience ||
						!canCreateRecipe(mainCharacter.inventory.itemList, activity.recipe);
					const isPerformingActivity = mainCharacter.activity?.name === activity.name && !isDisabled;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							onActivityComplete={(experienceReward, lootTable) => {
								mainCharacter.increaseExperience(experienceReward, skill);
								mainCharacter.inventory.bulkAdd(rollLoot(lootTable));

								if (activity.recipe) {
									mainCharacter.inventory.bulkDestroy(activity.recipe);
								}
							}}
							onClick={(isPerformingActivity) => {
								mainCharacter.setActivity(isPerformingActivity ? undefined : activity);
							}}
						/>
					);
				})}
			</div>
			<Inventory
				isDisabled={!!mainCharacter.activity}
				itemList={mainCharacter.inventory.itemList}
				onItemDestroy={(_, position) => {
					mainCharacter.inventory.destroyAt(position);
				}}
			/>
		</div>
	);
};
