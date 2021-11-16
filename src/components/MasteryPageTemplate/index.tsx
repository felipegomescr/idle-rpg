import { ActivityCard, Backpack } from "@/components";
import { useMainCharacter } from "@/containers";
import { Mastery } from "@/enums";
import {
	experienceToLevel,
	getActivityList,
	levelToExperience,
	possessRequiredMaterialList,
	rollReward,
} from "@/helpers";
import { progressMultiplier } from "@/values";

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
				<span className="font-bold">Level:</span> {level}
			</div>
			<div>
				<span className="font-bold">Experience:</span> <span>{experience}</span>
			</div>
			<div>
				<span className="font-bold">To next level:</span> <span>{levelToExperience(level + 1) - experience}</span>
			</div>
			<div className="grid grid-cols-4 gap-2">
				{activityList.map((activity) => {
					const hasLevel = level >= activity.level;
					const hasRequiredMaterialList = activity.requiredMaterialList
						? possessRequiredMaterialList(mainCharacter.backpack.content, activity.requiredMaterialList)
						: true;
					const isDisabled = !hasLevel || !hasRequiredMaterialList;
					const isPerformingActivity = mainCharacter.activity?.name === activity.name && !isDisabled;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							onActionClick={() => {
								mainCharacter.setActivity(isPerformingActivity ? undefined : activity);
							}}
							onActivityComplete={() => {
								mainCharacter.setExperience(activity.experience * progressMultiplier, mastery);

								if (!!activity.rewardTable) {
									mainCharacter.backpack.store(rollReward(activity.rewardTable));
								}

								if (!!activity.requiredMaterialList) {
									mainCharacter.backpack.discardMultiple(activity.requiredMaterialList);
								}
							}}
						/>
					);
				})}
			</div>
			<Backpack
				content={mainCharacter.backpack.content}
				isDisabled={!!mainCharacter.activity}
				onAllDiscard={() => {
					if (confirm("Are you sure you want to discard all content?")) {
						mainCharacter.backpack.discardAll();
					}
				}}
				onMaterialDiscard={(material) => {
					const number = Number(prompt("Number to discard:")) || 0;

					mainCharacter.backpack.discard({
						...material,
						number,
					});
				}}
			/>
		</div>
	);
};
