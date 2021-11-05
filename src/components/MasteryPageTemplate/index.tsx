import { ActivityCard, Inventory } from "@/components";
import { useMainCharacter } from "@/containers";
import { canCreateRecipe, experienceToLevel, getActivityList, rollLoot, toNextLevel } from "@/helpers";
import { Mastery } from "@/values";

type MasteryPageTemplateProps = {
	mastery: Mastery;
};

export const MasteryPageTemplate = ({ mastery }: MasteryPageTemplateProps) => {
	const mainCharacter = useMainCharacter();

	const activityList = getActivityList(mastery);
	const experience = mainCharacter.getExperience(mastery);
	const level = experienceToLevel(experience);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{mastery}</h1>
			<div>
				<span className="font-bold">{mastery} level:</span> {level}
			</div>
			<div>
				<span className="font-bold">{mastery} experience:</span> <span>{experience}</span>
			</div>
			<div>
				<span className="font-bold">To next level:</span> <span>{toNextLevel(level + 1)}</span>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{activityList.map((activity) => {
					const isDisabled =
						activity.requiredLevel > level || !canCreateRecipe(mainCharacter.inventory.itemList, activity.recipe);
					const isPerformingActivity = mainCharacter.activity?.name === activity.name && !isDisabled;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							onActivityComplete={(experience, lootTable) => {
								mainCharacter.inventory.bulkAdd(rollLoot(lootTable));
								mainCharacter.setExperience(experience, mastery);

								if (activity.recipe) {
									mainCharacter.inventory.bulkDelete(activity.recipe);
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
				onItemDelete={(_, position) => {
					mainCharacter.inventory.deleteAt(position);
				}}
			/>
		</div>
	);
};
