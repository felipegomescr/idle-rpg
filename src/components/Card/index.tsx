import { ReactNode } from "react";

type CardProps = {
	children: ReactNode;
	title: string;
};

export const Card = ({ children, title }: CardProps) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 space-y-4 border border-black">
			<span className="font-bold">{title}</span>
			{children}
		</div>
	);
};
