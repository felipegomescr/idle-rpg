const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["**/*.tsx"],
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				0: 0,
			},
		},
	},
};
