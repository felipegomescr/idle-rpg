import { toast as hotToast } from "react-hot-toast";
import { Toast } from "@/components";

export const toast = (message: string, icon?: string) => {
	hotToast.custom(() => {
		return <Toast icon={icon} message={message} />;
	});
};
