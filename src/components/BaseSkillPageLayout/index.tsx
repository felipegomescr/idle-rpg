import { ReactNode } from "react";

export type BaseSkillPageLayoutProps = {
	children: ReactNode;
	skillExp: number;
	skillName: string;
};

export const BaseSkillPageLayout = ({ children, skillExp, skillName }: BaseSkillPageLayoutProps) => {
	return (
		<div className="p-4 space-y-4">
			<h1 className="text-4xl font-bold">{skillName}</h1>
			<div>
				<span className="font-bold">{skillName} experience:</span> {skillExp}
			</div>
			{children}
		</div>
	);
};
