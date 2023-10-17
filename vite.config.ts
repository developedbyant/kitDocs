import { mdToSveltePlugin } from './src/kitDocs/plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),mdToSveltePlugin()]
});