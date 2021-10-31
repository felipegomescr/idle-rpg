const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["**/*.tsx"],
	theme: {
		extend: {
			colors: {
				main: "#525252",
			},
			fontFamily: {
				sans: ["Gluten", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},
};
