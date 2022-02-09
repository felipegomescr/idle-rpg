import * as heroicons from "@heroicons/react/solid";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

enum ColorScheme {
	GREEN,
	RED,
}

type IconButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
	colorScheme?: ColorScheme;
	icon: keyof typeof heroicons;
};

const colorSchemeToClassList = (colorScheme: ColorScheme) => {
	switch (colorScheme) {
		case ColorScheme.GREEN:
			return "bg-green-600 border-green-400 hover:bg-green-400 disabled:hover:bg-green-600";
		case ColorScheme.RED:
			return "bg-red-600 border-red-400 hover:bg-red-400 disabled:hover:bg-red-600";
	}
};

export const IconButton = ({ className, colorScheme = ColorScheme.GREEN, icon, ...otherProps }: IconButtonProps) => {
	const classList = colorSchemeToClassList(colorScheme);
	const Icon = heroicons[icon];

	return (
		<button
			{...otherProps}
			className={clsx(
				classList,
				className,
				"inline-flex leading-0 justify-center items-center p-4 transition duration-200 border-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
			)}
		>
			<Icon className="w-5 h-5" />
		</button>
	);
};

IconButton.ColorScheme = ColorScheme;
