import Image from "next/image";
import { notFoundPlaceholderIcon } from "@/values";

type ToastProps = {
	icon?: string;
	message: string;
};

export const Toast = ({ icon, message }: ToastProps) => {
	return (
		<div className="flex items-center w-full max-w-sm p-4 space-x-2 bg-white border border-gray-900 rounded-none">
			{icon && (
				<div className="relative w-6 h-6">
					<Image alt="" layout="fill" src={icon || notFoundPlaceholderIcon} />
				</div>
			)}
			<span>{message}</span>
		</div>
	);
};
