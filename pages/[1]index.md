---
layout: Introduction
title: KitDocs
description: Build documentation site using SvelteKit and kitDocs.
---

# What is kitDocs?
KitDocs is a powerful tool that enables you to create documentation websites rapidly using SvelteKit and markdown.

## Getting Started
To get started using kitDocs it's super simple, just run `npx kitdocs@latest` from your terminal 
and follow the prompts.
```bash
npx kitdocs@latest
```
You will see something like this from your terminal
```bash
┌  Welcome
│
◆  What would you like to do ?
│  ● Create new project
│  ○ Update
└
```

## Updating kitDocs
Just like the installing run `npx kitdocs@latest` and select option update when prompt with the selection, 
it will add the latest changes to kitDocs and will not update anything inside `src/kitDocs/app`.
```bash
npx kitdocs@latest
```
Select update
```bash
┌  Welcome
│
◆  What would you like to do ?
│  ○ Create new project
│  ● Update
└
```

## Project structure
```text
┌ project/
├ src/
│ ├ kitDocs/
│ │ └ Logo.svelte
│ │ └ style.css
│ │ └ app.json
│ │ └ and more..
│ │
│ ├ routes/
│ │ └ (app) # all your app routes here
│ │ └ (docs) # this should not be touched
└ └   └ kitDocs/
```

After the installation you can follow the [Getting started](/docs/getting-started) guide to complete installation.