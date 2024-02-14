import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteMdToSvelte from "./src/kitDocs/lib/plugin"

export default defineConfig({
	plugins: [viteMdToSvelte("src/routes/(docs)/docs","KitDocs"),sveltekit()]
});