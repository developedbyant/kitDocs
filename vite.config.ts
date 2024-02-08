import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import MdPlugin from './src/kitDocs/lib/plugin';

export default defineConfig({
	plugins: [sveltekit(),MdPlugin()]
});
