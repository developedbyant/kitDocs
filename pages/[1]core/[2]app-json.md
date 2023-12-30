---
layout: Core files
title: AppJson
description: A json file that keeps track of important information about your app.
---

# What is the appJson?
The appJson file that keeps track of important information about your app, it can be found at `src/kitDocs/app.json`, there you will
find information like page links,generated docs links,footer info and more.

## Default data
```json
{
    "packageManager": "pnpm",
    "projectName": "kitDocs",
    "navLinks": [
        {
            "text": "Home",
            "href": "/",
            "external": false
        },
        {
            "text": "Documentation",
            "href": "/docs",
            "external": false
        }
    ],
    "socialMedias": {
        "twitter": "https://twitter.com/developedbyant",
        "github": "https://github.com/developedbyant/kitdocs"
    },
    "footer": {
        "links": [
            {
                "title": "Resources",
                "links": [
                    {
                        "text": "Home",
                        "href": "/",
                        "external": false
                    },
                    {
                        "text": "Svelte",
                        "href": "https://svelte.dev/",
                        "external": true
                    }
                ]
            }
        ]
    },
    "kitDocs": {}
}
```

## PackageManager
The packageManager key let us know what node js package manager you are using, so when it's time to install any 
dependencies we know what to run.

## ProjectName
Just let use know your project name just incase we need it in the future.

## NavLinks
Add your any link to be displayed on your top navigation, by default we display Home and Documentation.
```json
{
    "navLinks": [
        {
            "text": "Home",//[H]
            "href": "/",//[H]
            "external": false//[H]
        },
        {
            "text": "Documentation",//[H]
            "href": "/docs",//[H]
            "external": false//[H]
        }
    ]
}
```

## SocialMedias
The socialMedias key it's use to display your social media link on the top navigation next to the search bar.
```json
{
    "socialMedias": {
        "twitter": "https://twitter.com/developedbyant",
        "github": "https://github.com/developedbyant/kitdocs"
    }
}
```

## Footer
Footer key it's use to show things like footer links,footer text and other thing in the future.

## KitDocs

```[WARNING]
    Do not edit kitDocs key
```
The kitDocs key should not be touch by you, it will be auto generated when any change to the `pages` markdown are made.
```json
{
    "kitDocs": {}
}
```