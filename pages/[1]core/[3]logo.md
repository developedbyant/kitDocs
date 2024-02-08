---
layout: Core files
title: Logo
description: A svelte component that render your logo into the top navigation.
---

# Logo
A svelte component that render your logo into the top navigation, it can be found and edit at `src/kitDocs/app/Logo.svelte`, 
any changes made to this component will stay like that even after running the update command.
```svelte
<a href="/" class="logo">
    Logo
</a>

<style>
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        background: var(--main-color);
        border-radius: 5px;
    }
</style>
```