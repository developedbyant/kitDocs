---
layout: Introduction
title: Getting started
description: What to do after installing kitDocs, A step by step guide.
---

# Getting started
After installing kitDocs you will need to do the following:
- Add `src` alias to svelte.config.js
- Add the markdown to svelte plugin
- create pages (routes)

## Adding alias
Inside `svelte.config.js` add the src alias needed for kitDocs to work.
```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
            src:"src/*"//[H]
        }
	}
};
export default config;
```

## Add plugin
In order to convert your markdown files to svelte pages, you needed to add kitDocs plugin from 
`src/kitDocs/lib/plugin` to the `vite.config.ts` file.
```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import kitDocsPlugin from "./src/kitDocs/lib/plugin";//[H]
export default defineConfig({
	plugins: [
        kitDocsPlugin(),//[H]
        sveltekit()
    ]
});
```

## Create pages folder
To create a route/page create a folder named `pages` in your working directory, 
inside that folder you will create a your markdowns that will be converted into svelte pages.
```text
┌ pages/
│ ├ sub-folder/
│ │ └ [1]index.md
│ │ └ [2]route-slug.md
│ │ └ [3]route-slug-3.md
│ │
│ ├ [2]sub-folder-2/
│ │ └ [1]index.md
│ │ └ [2]route-slug.md
│ │ └ [3]route-slug-3.md
│ │
├ [1]index.md
└ [2]installation.md
```
All markdown files most have the following keys on top of the files.
- layout : Indicates which group current file belongs to
- title : title for the route/page
- description : description for the route/page
- new (optional) : will added the new badge next to the link
```text
    ---
    layout: Introduction
    title: Installation
    description: How to install kitDocs.
    ---
    # What is kitDocs
    KitDocs is a documentation builder for svelte kit apps.
    ```bash
    npx kitdocs@latest
    ```
    You will see something like this from your terminal
```