import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				//bold, heading font
				primary: '#2D0A62',
				//detail font
				secondary: '#5D5182',
				//border, highlight element
				tertiary: '#40272F',

				//background
				pearl: '#EDE5DC',
			},
		},
	},
	plugins: [],
}
export default config
