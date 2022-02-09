import { ActivityCard, Backpack } from "@/components";
import { PROGRESS_MULTIPLIER } from "@/constants";
import { useMainCharacter } from "@/containers";
import { Mastery } from "@/enumerators";
import {
	experienceToLevel,
	getActivityList,
	levelToExperience,
	possessRequiredMaterialList,
	rollReward,
	toast,
} from "@/helpers";

type MasteryPageTemplateProps = {
	mastery: Mastery;
};

export const MasteryPageTemplate = ({ mastery }: MasteryPageTemplateProps) => {
	const mainCharacter = useMainCharacter();

	const activityList = getActivityList(mastery);
	const currentExperience = mainCharacter.getExperience(mastery);
	const currentLevel = experienceToLevel(currentExperience);

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{mastery}</h1>
			<div>
				<span className="font-bold">Current Level:</span> {currentLevel}
			</div>
			<div>
				<span className="font-bold">Current Experience:</span> <span>{currentExperience}</span>
			</div>
			<div>
				<span className="font-bold">To next level:</span>{" "}
				<span>{levelToExperience(currentLevel + 1) - currentExperience}</span>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{activityList.map((activity) => {
					const hasRequiredLevel = currentLevel >= activity.levelRequirement;
					const hasRequiredMaterialList = activity.requiredMaterialList
						? possessRequiredMaterialList(mainCharacter.backpack.content, activity.requiredMaterialList)
						: true;
					const isDisabled = !hasRequiredLevel || !hasRequiredMaterialList;
					const isPerformingActivity = mainCharacter.activity?.name === activity.name && !isDisabled;

					return (
						<ActivityCard
							key={activity.id}
							actionText={activity.actionText}
							activity={activity}
							isDisabled={isDisabled}
							isPerformingActivity={isPerformingActivity}
							showLevelRequirement={!hasRequiredLevel}
							onActionClick={() => {
								mainCharacter.setActivity(isPerformingActivity ? undefined : activity);
							}}
							onActivityComplete={() => {
								mainCharacter.setExperience(activity.experience * PROGRESS_MULTIPLIER, mastery);

								if (!!activity.rewardTable) {
									const reward = rollReward(activity.rewardTable);

									mainCharacter.backpack.store(reward);
									toast(`Obtained ${reward.number}x ${reward.name}.`, reward.icon);
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
				capacity={mainCharacter.backpack.capacity}
				content={mainCharacter.backpack.content}
				isDisabled={!!mainCharacter.activity}
				onAllDiscard={() => {
					if (confirm("Are you sure you want to discard all content?")) {
						mainCharacter.backpack.discardAll();
						toast("Discarded all content.");
					}
				}}
				onDiscard={(containerMaterial) => {
					const number = Number(prompt("How many?")) || 0;

					if (number > 0) {
						const possessedNumber = containerMaterial.number;

						mainCharacter.backpack.discard({
							...containerMaterial,
							number,
						});
						toast(
							number >= possessedNumber
								? `Discarded all ${containerMaterial.name}.`
								: `Discarded ${number}x ${containerMaterial.name}.`,
							containerMaterial.icon
						);
					}
				}}
			/>
		</div>
	);
};
