import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

enum ColorScheme {
	BLUE,
	GREEN,
	INDIGO,
	PINK,
	PURPLE,
	RED,
	YELLOW,
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	colorScheme: ColorScheme;
};

const colorSchemeToClassList = (colorScheme: ColorScheme) => {
	switch (colorScheme) {
		case ColorScheme.BLUE:
			return "bg-blue-600 border-blue-400 hover:bg-blue-400 disabled:hover:bg-blue-600";
		case ColorScheme.GREEN:
			return "bg-green-600 border-green-400 hover:bg-green-400 disabled:hover:bg-green-600";
		case ColorScheme.INDIGO:
			return "bg-indigo-600 border-indigo-400 hover:bg-indigo-400 disabled:hover:bg-indigo-600";
		case ColorScheme.PINK:
			return "bg-pink-600 border-pink-400 hover:bg-pink-400 disabled:hover:bg-pink-600";
		case ColorScheme.PURPLE:
			return "bg-purple-600 border-purple-400 hover:bg-purple-400 disabled:hover:bg-purple-600";
		case ColorScheme.RED:
			return "bg-red-600 border-red-400 hover:bg-red-400 disabled:hover:bg-red-600";
		case ColorScheme.YELLOW:
			return "bg-yellow-600 border-yellow-400 hover:bg-yellow-400 disabled:hover:bg-yellow-600";
	}
};

export const Button = ({ className, colorScheme, ...otherProps }: ButtonProps) => {
	const classList = colorSchemeToClassList(colorScheme);

	return (
		<button
			{...otherProps}
			className={clsx(
				classList,
				className,
				"h-10 inline-flex leading-none justify-center items-center space-x-2 px-4 font-medium transition duration-200 border-2 rounded min-w-[10rem] disabled:opacity-50 disabled:cursor-not-allowed"
			)}
		/>
	);
};

Button.ColorScheme = ColorScheme;
