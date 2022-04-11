module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#18181b',
				secondary: '#202024',
				highlight: '#22d3ee',
				underline: '#155e75'
			}
		}
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
	darkMode: 'media',
	important: true
};
