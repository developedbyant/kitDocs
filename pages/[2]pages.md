---
layout: Introduction
title: Pages
description: How to install kitDocs step by step.
---
# Markdown page
Inside `pages` folder you can create all the pages necessary for your project.

```[WARNING]
All md files most have a yaml tag at the top of the file with tags layout,title and description
```

```yaml
---
layout: Introduction
title: Installation
description: How to install kitDocs step by step.
---
```
If you want to create route `docs/update` create md file `update.md` or `[..]update.md` to sort routes
```text
pages/
|- [.]install.md
|- update.md
```

You can also create sub folders, example to create `docs/components/button` create folder `components` inside the `pages` folder.
```text
pages/components
|- button.md
```