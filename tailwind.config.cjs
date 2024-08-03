const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
				'serif': ['Georgia', 'ui-serif'],
				'display': ['"EB Garamond"', 'ui-serif', 'Georgia'],
			}
		},
	},
	plugins: [
		plugin(function({ addUtilities }) {
			addUtilities({
				'.text-shadow': {
					'text-shadow': '1px 1px 0 #000',
				},
				'.bg-opacity-15': {
					'background-color': 'rgba(0, 0, 0, 0.15)',
				}
			})
		})
	]
}
