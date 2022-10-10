/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'hgc-white': '#FCF2EE',
				'hgc-black': '#201335',
				'hgc-accent': 'rgba(252,70,107,1)',
			},
		},
		fontFamily: {
			'roboto': ['roboto'],
			'inter': ['inter'],
		},
	},
	plugins: [],
}
