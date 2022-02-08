import clsx from "clsx";
import { cloneElement } from "react";
import * as outline from "@heroicons/react/outline";
import * as solid from "@heroicons/react/solid";
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

enum Variant {
	OUTLINE,
	SOLID,
}

type IconButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
	colorScheme: ColorScheme;
	icon: keyof typeof outline & keyof typeof solid;
	variant?: Variant;
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
			return "bg-pink-600 border-pink-400 hover:bg-pink-400 di;/sabled:hover:bg-pink-600";
		case ColorScheme.PURPLE:
			return "bg-purple-600 border-purple-400 hover:bg-purple-400 disabled:hover:bg-purple-600";
		case ColorScheme.RED:
			return "bg-red-600 border-red-400 hover:bg-red-400 disabled:hover:bg-red-600";
		case ColorScheme.YELLOW:
			return "bg-yellow-600 border-yellow-400 hover:bg-yellow-400 disabled:hover:bg-yellow-600";
	}
};

export const IconButton = ({
	className,
	colorScheme,
	icon,
	variant = Variant.SOLID,
	...otherProps
}: IconButtonProps) => {
	const classList = colorSchemeToClassList(colorScheme);
	const Icon = cloneElement(variant === Variant.OUTLINE ? outline[icon] : solid[icon], {
		className: "w-5 h-5 mx-auto",
	});

	return (
		<button
			{...otherProps}
			className={clsx(
				classList,
				className,
				"inline-flex leading-none justify-center items-center p-4 transition duration-200 border-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
			)}
		>
			{}
		</button>
	);
};

IconButton.ColorScheme = ColorScheme;
IconButton.Variant = Variant;
