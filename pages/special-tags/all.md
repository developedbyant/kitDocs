---
layout: Special tags
title: ALL
description: Show highlighted code and add code to the page.
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
# Highlight code and show
The `svelte [ALL]` tag let you highlight code and add code to the page at the same time.
```markdown
    ```svelte [all]
    <div class="card">
        HELLO
    </div>
    ```
```
Code will be Highlighted and added to the page.
```svelte [all]
<div class="card">
    HELLO
</div>
```