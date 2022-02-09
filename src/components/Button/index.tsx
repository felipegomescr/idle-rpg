import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

enum ColorScheme {
	GREEN,
	RED,
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	colorScheme?: ColorScheme;
};

const colorSchemeToClassList = (colorScheme: ColorScheme) => {
	switch (colorScheme) {
		case ColorScheme.GREEN:
			return "bg-green-600 border-green-400 hover:bg-green-400 disabled:hover:bg-green-600";
		case ColorScheme.RED:
			return "bg-red-600 border-red-400 hover:bg-red-400 disabled:hover:bg-red-600";
	}
};

export const Button = ({ className, colorScheme = ColorScheme.GREEN, ...otherProps }: ButtonProps) => {
	const classList = colorSchemeToClassList(colorScheme);

	return (
		<button
			{...otherProps}
			className={clsx(
				classList,
				className,
				"h-10 inline-flex leading-0 justify-center items-center space-x-2 px-4 font-medium transition duration-200 border-2 rounded min-w-[10rem] disabled:opacity-50 disabled:cursor-not-allowed"
			)}
		/>
	);
};

Button.ColorScheme = ColorScheme;
