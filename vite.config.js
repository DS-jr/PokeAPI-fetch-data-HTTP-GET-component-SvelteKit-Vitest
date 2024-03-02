import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [
		sveltekit(),
		svelte({ hot: !process.env.VITEST }),
	],
	test: {
		globals: true,
		environment: 'jsdom',
	  },
});
