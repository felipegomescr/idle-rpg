const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["**/*.tsx"],
	theme: {
		extend: {
			colors: {
				gray: colors.warmGray,
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},
};
