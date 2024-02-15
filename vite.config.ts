import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteMdToSvelte from "./src/kitDocs/lib/plugin"
const kitDocsOptions = {
	appName:"KitDocs",domainUrl:"https://kitdocs.dev",
	defaultImage:"https://kitdocs.dev/images/backdrop.png", devMode:true
}
export default defineConfig({
	plugins: [
		viteMdToSvelte("src/routes/(docs)/docs",kitDocsOptions),
		sveltekit()
	]
});