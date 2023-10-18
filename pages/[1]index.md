---
layout: Introduction
title: KitDocs
description: Build documentation site using svelteKit and kitDocs.
---
```css [CODE]
    .card{
        display:flex;
        padding:10px;
        border:1.5px solid var(--border-color);
        background-color:var(--app-bg);
        border-radius: 15px;
        background-color: var(--app-fb);
    }
```
## What is kitDocs ?
KitDocs let you create documentation website for your project using svelteKit, learn how to create one [Get started](/docs/quick-start).

## How kitDocs work ?
KitDocs uses [globby](https://www.npmjs.com/package/globby) to read files,[marked](https://www.npmjs.com/package/marked) to read markdown files and [shiki](https://www.npmjs.com/package/shiki) for code highlighting<br />
After that we covert your markdown files to svelte routes using our custom components from `kitDocs/components`.<br />

```svelte [ADD]
<div class="card">
    HELLO
</div>
```