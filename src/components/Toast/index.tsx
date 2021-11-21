import Image from "next/image";
import { notFoundPlaceholderIcon } from "@/values";

type ToastProps = {
	icon?: string;
	message: string;
};

export const Toast = ({ icon, message }: ToastProps) => {
	return (
		<div className="flex items-center space-x-2">
			{icon && (
				<div className="relative w-6 h-6">
					<Image alt="" layout="fill" src={icon || notFoundPlaceholderIcon} />
				</div>
			)}
			<span>{message}</span>
		</div>
	);
};
