import Image from "next/image";
import { notFoundPlaceholderIcon } from "@/values";

type ToastProps = {
	icon?: string;
	message: string;
};

export const Toast = ({ icon, message }: ToastProps) => {
	return (
		<div className="flex items-center w-full max-w-sm p-2 space-x-2 bg-gray-800 border-2 border-gray-700 rounded">
			{icon && (
				<div className="relative w-6 h-6">
					<Image alt="" layout="fill" src={icon || notFoundPlaceholderIcon} />
				</div>
			)}
			<div className="font-medium">{message}</div>
		</div>
	);
};
