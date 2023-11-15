---
layout: Special tags
title: CSS
description: Adding custom style to page.
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
# Adding style
To add style to the style tag, use the `css [CODE]` tag after metadata code on top of your .md file.<br>
Markdown code
```md
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
    ```svelte
    <div class="card">
        Custom css
    </div>
    ```
```

Preview
```svelte [ADD]
<div class="card">
    Custom css
</div>
```