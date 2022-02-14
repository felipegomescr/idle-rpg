const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["**/*.tsx"],
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				0: 0,
			},
		},
	},
};
