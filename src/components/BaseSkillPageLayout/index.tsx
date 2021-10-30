import { ReactNode } from "react";
import { Inventory } from "@/components/Inventory";
import { useMc } from "@/containers/mc";

export type BaseSkillPageLayoutProps = {
	children: ReactNode;
	currentExp: number;
	title: string;
};

export const BaseSkillPageLayout = ({ children, currentExp, title }: BaseSkillPageLayoutProps) => {
	const mc = useMc();

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{title}</h1>
			<div>
				<span className="font-bold">Current experience:</span> {currentExp}
			</div>
			<div className="grid grid-cols-4 gap-4">{children}</div>
			<Inventory
				items={mc.inventory.items}
				onItemDestroy={(_, itemIndex) => {
					mc.inventory.destroyAt(itemIndex);
				}}
			/>
		</div>
	);
};
