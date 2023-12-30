---
layout: Introduction
title: Getting start
description: Getting started after creating kitDocs project.
---

# Getting started
After creating a kitDocs project you need to learn how to create a page,page structure,tags and all things needed to create a full documentation website.

## Key notes
- Structure
    - learn how your project structure should look
- Create page (route)
    - How to create a route using the pages folder

## Project structure
Your project structure should look something like this.
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

## Create route
To create a page(route), all you need to do is create a markdown file inside the `pages` 
folder with the needed metadata.
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
To sort files and folders user the [] follow by the order number inside [1] or [2], example 
[1]index.md will be show before [2]installation.md since [1]index.md start with [1].

## First page
Let's create your first page by adding the metadata tags that are required.<br>
The layout,title and description are required at the top of any markdown file, key new it's 
optional to allow us to add the new chip next to link on side nav.
```markdown
    ---
    layout: Introduction
    title: Add to project
    description: How to install kitDocs.
    ---
```
Add header tag and all tags supported by markdown
```markdown
# This is the page title
```
Here is a simple page
```text
    ---
    layout: Introduction
    title: Installation
    description: How to install kitDocs.
    ---

    # Installation
    To install,update or add kitDocs, simply run the following command in your terminal and follow the prompts:
    ```bash
    npx kitdocs@latest
    ```
    You will see something like this from your terminal
    ```bash
    ┌  Welcome
    │
    ◆  What would you like to do ?
    │  ● Create new project
    │  ○ Add to project
    │  ○ Update
    └
    ```
```
See all super tags you can use inside your markdown files [Special tags](/docs/special-tags).