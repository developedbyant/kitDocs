---
layout: Special tags
title: //H
description: Highlight code sections.
new: true
---

# Highlight code
To highlight a code block you can use the tag `//[H]` after the code you want to highlight.
```markdown
    ```js
        const user = {
            name:"Tony",
            admin:true//[H ]
        }
    ```
```
This will highlight `admin:true`.<br>
Preview
```js
const user = {
    name:"Tony",
    admin:true//[H]
}
```