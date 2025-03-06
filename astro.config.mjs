// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://choste.github.io',
	base: 'family-history',
	integrations: [
		starlight({
			title: 'Family History',
			social: {},
			sidebar: [
				{
					slug: 'family/amos_doris'
				},
			],
		}),
	],
});
