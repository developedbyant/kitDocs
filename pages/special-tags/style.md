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
To add style to the style tag, use the `css [CODE]` tag after metadata code on top of your .md file.
```markdown
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
```
Card code
```svelte
<div class="card">
    HELLO
</div>
```
Card preview with style
```svelte [add]
<div class="card">
    HELLO
</div>
```