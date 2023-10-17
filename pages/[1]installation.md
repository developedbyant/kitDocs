---
layout: Introduction
title: Installation
description: How to install kitDocs.
---
# Installation
Learn how to install kitDocs step by step.<br />
To get started from your svelte kit root project run `npx kitdocs@latest` to install or update kitDocs.
```bash
# run this command to install or update
npx kitdocs@latest 
```
The output should look something like this.
```bash
kitDocs was updated version:0.0.6
Install dependencies:
    npm install globby shiki marked
    pnpm add globby shiki marked
```
```[WARNING]
don't forget to add <strong>logo-light.png</strong> and <strong>logo-dark.png</strong> to your asset/static folder.
```
## Plugin
To convert your markdown files to svelte pages, import `mdToSveltePlugin` from `src/kitDocs/plugin` and add it to your `vite.config.ts`.
```ts
// vite.config.ts
import { mdToSveltePlugin } from './src/kitDocs/plugin';//[H]
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),mdToSveltePlugin()]//[H]
});
```

## Alias
Add the kitDocs to your `svelte.config.js` file.
```js
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			kitDocs:"src/kitDocs/*" //[H]
		}
	}
};
```

## Layout and style
Start by adding importing kitDocs style or create your own [Create custom style](/docs/custom-style) from `kitDocs/style.css` and Layout from `kitDocs/Layout.svelte` to your project layout `src/routes/+layout.svelte`.<br>
```svelte
<script lang="ts">
    import"kitDocs/style.css"//[H]
    import Layout from "kitDocs/Layout.svelte"; //[H]
</script>

<Layout>
    <slot />
</Layout>
```

## Nav links
By default we only show the home link on your nav, but you can add internal or external links by editing `src/app.json`.
```json
{
    "navLinks": [
        {
            "text": "Home",
            "href": "/",
            "external": false
        }
    ]
}
```
Adding a link
```json
{
    "navLinks": [
        {
            "text": "Home",
            "href": "/",
            "external": false
        }
        ,{//[H]
            "text": "Documentation",//[H]
            "href": "/docs",//[H]
            "external": false//[H]
        }//[H]
    ]
}
```
Learn more about [app.json](/docs/files/app-json)