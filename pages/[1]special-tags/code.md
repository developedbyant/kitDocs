---
layout: Special tags
title: CODE
description: Add custom js code to script tag.
---
```js [CODE]
    let isDarkMode:boolean = false
```
```css [CODE]
    button{
        all:unset;
        cursor:pointer;
        width:fit-content;
        padding:5px 10px;
        border:1.5px solid var(--border-color);
        background-color:var(--button-bg);
        color:var(--button-color);
        border-radius:5px;
        font-size:14px;
        font-weight:600;
    }
```
# Adding style
To add custom code to a route, use the `js [CODE]` or `ts [CODE]` tag after metadata code on top of your .md file.
```markdown
    ```js [CODE]
        let isDarkMode:boolean = false
    ```
```
Code example
```svelte
<button on:click={()=>isDarkMode=!isDarkMode}>SetTheme</button>
<h2>Current theme is:{isDarkMode?"dark":"light"} mode</h2>
```
Code example preview
```svelte [add]
<button on:click={()=>isDarkMode=!isDarkMode}>SetTheme</button>
<h2>Current theme is:{isDarkMode?"dark":"light"} mode</h2>
```