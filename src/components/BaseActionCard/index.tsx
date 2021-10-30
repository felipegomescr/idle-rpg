import { ReactNode } from "react";

type BaseActionCardProps = {
	children: ReactNode;
	title: string;
};

export const BaseActionCard = ({ children, title }: BaseActionCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-black">
			<span className="font-bold">{title}</span>
			{children}
		</div>
	);
};
