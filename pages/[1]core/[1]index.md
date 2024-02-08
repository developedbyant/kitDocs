---
layout: Core files
title: CoreFiles
description: The most important files that makes kitDocs function.
---

# Core files
After installing kitDocs you will see some folder and files that were created by us, these files helps use 
keep track of any changes to your project, help us generate links for your side nav and other necessary stuff for kitDocs to work.

## Added folders
After installation we add 2 folders to your project.
- kitDocs : main folder where we add all thing related to kitDocs
- (docs) : where all generated pages will live

## KitDocs
KitDocs folder located on `src/kitDocs` contains all components for the website, TypeScript files and app folder.
- App folder contains logo,app data, css and all the files that you can edit.
- Components : components for kitDocs, it should not be touched.
- Lib : all TypeScrip files for kitDocs, it should not be touched.

## App folder
Any file inside the app folder can be edited, it contains `Logo.svelte` the component that will be showing on top nav of kitDocs, 
`app.json` the file that keep track of all generated links, social medias links and more information about your project, 
`global.css` your global app style, `tags.css` (may be updated if needed) it contains all styles for components/tags showing in generated pages, 
and `variables.css` all css variables for kitDocs, it contains size,color,background and more css variables.

## Docs
The `src/routes/(docs)` folder contains all generated pages, that were converted from `pages` folder, 
you should not touch this folder since it will be auto generated when ever any changes are made inside pages folder.