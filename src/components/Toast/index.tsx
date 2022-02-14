import NextImage from "next/image";

type ToastProps = {
	icon?: string;
	message: string;
};

export const Toast = ({ icon, message }: ToastProps) => {
	return (
		<div className="flex items-center w-full max-w-sm p-2 space-x-2 bg-stone-800 border-2 border-stone-700 rounded">
			{icon && (
				<div className="relative w-6 h-6">
					<NextImage alt="" layout="fill" src={icon} />
				</div>
			)}
			<div className="font-medium">{message}</div>
		</div>
	);
};
