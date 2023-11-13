import MdPlugin from './src/kitDocs/lib/plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),MdPlugin()]
});