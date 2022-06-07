module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"background": "#121212",
				"primary": "rgba(255, 255, 255, 0.12)",
				"secondary": "rgba(255, 255, 255, 0.7)",
				"spotify": "#1ED760"
			},
			screens: {
				"fold": {"max": "320px"}
			}
		},
	},
	plugins: [],
};
