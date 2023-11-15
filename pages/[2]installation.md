---
layout: Introduction
title: Installation
description: How to install kitDocs.
---

# Installation
To install kitDocs, run the following command in your terminal `npx kitdocs@latest`, Follow the prompts during the installation process. Once the script is completed, proceed with the following steps:
- **Add Plugin:**
   Add the kitDocs plugin to your project.
- **Add Alias:**
   Set up any necessary aliases as per your project requirements.
- **Handle Layout:**
   Customize and handle the layout according to your documentation needs.
- **Add nav link:**
   Add additional nav links.

## Add Alias
Step one, add the kitDocs alias to your `svelte.config.js` file.
```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			kitDocs:"src/kitDocs/*"//[H]
		}
	}
};

export default config;
```

## Add Plugin
From `./src/kitDocs/lib/plugin` import the default export(Plugin) and add it to the `vite.config.ts` file.
```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import kitDocs from "./src/kitDocs/lib/plugin"//[H]

export default defineConfig({
	plugins: [
        sveltekit(),
        kitDocs()//[H]
    ]
});
```

## Handle Layout
Import the Layout component from `kitDocs/Layout.svelte` and add it your `src/routes/+layout.svelte`.
```svelte
<script lang="ts">
    import Layout from "kitDocs/Layout.svelte";//[H]
</script>

<Layout theme="dark">
    <slot />
</Layout>
```
You can hide side bars from Layout, example if you only want to show the side nav when user it's browsing /docs, set `hide` to true.
```svelte
<script lang="ts">
    import { page } from "$app/stores";//[H]
    import Layout from "kitDocs/Layout.svelte";
    $: showSideNav = ! $page.url.pathname.startsWith("/docs")//[H]
</script>

<Layout theme="dark" hide={showSideNav}>
    <slot />
</Layout>
```

To handle theme, create a `src/routes/+layout.server.ts` file and return theme prop back.
```ts
import type { LayoutServerLoad } from "./$types";
export const load:LayoutServerLoad = ({ cookies })=>{
    const theme = cookies.get("theme") || "light" as "light"|"dark"
    return { theme }
}
```
After that you can pass prop `theme` to kitDocs Layout component.
```svelte
<script lang="ts">
    export let data//[H]
    import { page } from "$app/stores";
    import Layout from "kitDocs/Layout.svelte";
    $: showSideNav = ! $page.url.pathname.startsWith("/docs")
    $: showKitDocs = $page.url.pathname.startsWith("/docs")
    $: theme = data.theme//[H]
</script>

<Layout {theme} hide={showSideNav}>
    <slot />
</Layout>
```

## Metadata
To handle metadata import store `metaTagsStore` from `kitDocs/lib/stores` and add the following head tags to your layout.
```svelte
<script lang="ts">
    export let data
    import { page } from "$app/stores";
    import { metaTagsStore } from "kitDocs/lib/stores";
    import Layout from "kitDocs/Layout.svelte";
    $: showSideNav = ! $page.url.pathname.startsWith("/docs")
    $: showKitDocs = $page.url.pathname.startsWith("/docs")
    $: theme = data.theme
    // set mete tags
    $: url = $page.url.href//[H]
    $: appName = $metaTagsStore.appName//[H]
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : "/favicon.png"//[H]
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" //[H]
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | svelteKit docs builder`//[H]
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"Create documentation websites rapidly using SvelteKit." //[H]
    $: image = $metaTagsStore.image ? $metaTagsStore.image: "/favicon.png"//[H]
</script>

<svelte:head>//[H]
	<link rel="icon" href={favicon} />//[H]
    <!-- Primary Meta Tags -->//[H]
    <title>{title}</title>//[H]
    <meta name="title" content={title} />//[H]
    <meta name="description" content={description} />//[H]
    <!-- Open Graph / Facebook -->//[H]
    <meta property="og:type" content={ogType} />//[H]
    <meta property="og:url" content={url} />//[H]
    <meta property="og:title" content={title} />//[H]
    <meta property="og:description" content={description} />//[H]
    <meta property="og:image" content={image} />//[H]
    <!-- Twitter -->//[H]
    <meta property="twitter:card" content="summary_large_image" />//[H]
    <meta property="twitter:url" content={url} />//[H]
    <meta property="twitter:title" content="FinOnX | Finance on X" />//[H]
    <meta property="twitter:description" content={description} />//[H]
    <meta property="twitter:image" content={image} />//[H]
</svelte:head>//[H]

{#if showKitDocs}
    <Layout {theme} hide={showSideNav}>
        <slot />
    </Layout>
{:else}
    <!-- your custom layout -->
    <Layout {theme} hide={showSideNav}>
        <div class="content">
            <slot />
        </div>
    </Layout>
{/if}

<style>
    .content{
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
    }
</style>
```

## Adding nav links
To add additional links to the navigation, open `src/kitDocs/app.json` and add additional links to `navLinks` section.
```json
{
    "navLinks": [
        {
            "text": "Home",
            "href": "/",
            "external": false
        },
        {//[H]
            "text": "Documentation",//[H]
            "href": "/docs",//[H]
            "external": false//[H]
        },//[H]
        {//[H]
            "text": "SvelteKit",//[H]
            "href": "https://kit.svelte.dev/",//[H]
            "external": true//[H]
        }//[H]
    ]
}
```

## Creating pages
To create a page(route), inside `/pages` directory create any file ending in .md and kitDocs will compile that code into a svelte `+page.svelte` route.<br>
Let create a about route by creating file `pages/about.md` inside pages.
```md
    ---
    layout: Introduction
    title: Installation
    description: How to install kitDocs.
    ---
    # About
    This a about us route.
```
All md file need to have metadata tag on top of the file with the keys:<br>
- **layout**
    indicate what layout the route correspond to.
- **title**
    Tells us the title for the page.
- **description**
    indicate what layout the route correspond to.
