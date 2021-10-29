module.exports = {
	mode: "jit",
	purge: ["**/*.{ts,tsx}"],
	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},
};
