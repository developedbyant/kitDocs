---
layout: Introduction
title: Custom style
description: Create custom style for kitDocs.
---
# Creating your own style
Instead of using the default style from kitDocs, you can create your own.<br>
Here is a necessary css variables used by kitDocs, just replaced them with your own colors and info.
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
html{
    scroll-behavior: smooth;
}
.shiki{
    border-radius: 5px;
    font-size: 14px;
    font-weight: 300;
    overflow-x: scroll;
    & code{
        display: flex;
        flex-direction: column;
        padding: 5px 0;
    }
}
.shiki::-webkit-scrollbar {
    height: 10px;
}
.shiki::-webkit-scrollbar-thumb {
    background: var(--border-color); 
    border: 1.5px solid var(--app-bg);
    border-radius: 10px;
}
.shiki .line{
    padding: 1px 10px;
}
.shiki .line.added{
    background-color: var(--code-line-added-bg);
}
.shiki .line.removed{
    background-color: var(--code-line-removed-bg);
}

/* dark mode */
.kitDocs{
    transition: background-color ease 0.3s,color ease 0.3s;
    /* app */
    --app-bg:#18181A;
    --app-fb:#27282D;
    --blur-bg: #ebebeb7d;
    --header-color:#ffffff;
    --text-color:#a1a1aa;
    --border-color:#2D3035;
    --icon-color: #949494;
    --max-width:1400px;
    --shadow:rgba(0,0,0,5%);
    --main-color:#38bdf8;
    --second-color:#38bdf8;
    --error-bg: #cc7d7d;
    --error-color: #fff;
    /* search */
    --search-bg:#27282D;
    --search-color:#b3b3b3;
    /* nav */
    --nav-bg:#18181A;
    --nav-link-color:#d8dade;
    --nav-link-hover-color:#272728;
    /* card */
    --card-bg:#27282D;
    --card-fb:#27282D;
    --card-header-color:#ffffff;
    --card-text-color:#a0a0a0;
    /* data label */
    --data-label-bg:#383838;
    --data-label-color:#cfcfcf;
    /* button */
    --button-bg: #38bdf8;
    --button-color:#fff;
    /* code */
    --code-bg:var(--app-fb);
    --code-text-color:var(--text-color);
    --code-line-added-bg:#4d8aac40;
    --code-line-removed-bg:#917a7a52;

    --shiki-color-text: #b8cdd9;
    --shiki-color-background: var(--app-fb);
    --shiki-token-constant: #4EC9B0;
    --shiki-token-string: #B58672;
    --shiki-token-comment: #538b46;
    --shiki-token-keyword: #B97FB4;
    --shiki-token-parameter: #38bdf8;
    --shiki-token-function: #dbdba6;
    --shiki-token-string-expression: #CC9077;
    --shiki-token-punctuation: #b8cdd9;
    --shiki-token-link: #b8cdd9;
}
/* light mode */
.kitDocs.light{
    /* app */
    --app-bg:#fff;
    --app-fb:#e6ebee;
    --blur-bg: #ebebeb7d;
    --header-color:#6f6f6f;
    --text-color:#7f7f7f;
    --border-color:#eeeeee;
    --icon-color: #2a2a2a;
    --shadow:rgba(0,0,0,5%);
    --main-color:#38bdf8;
    --second-color:#38bdf8;
    --error-bg: #cc7d7d;
    --error-color: #fff;
    /* search */
    --search-bg:#f9f9f9;
    --search-color:#7f7f7f;
    /* nav */
    --nav-bg:#18181A;
    --nav-link-color:#7f7f7f;
    --nav-link-hover-color:#f6f6f6;
    /* card */
    --card-bg:#27282D;
    --card-fb:#27282D;
    --card-header-color:#ffffff;
    --card-text-color:#a0a0a0;
    /* data label */
    --data-label-bg:#383838;
    --data-label-color:#cfcfcf;
    /* button */
    --button-bg: #38bdf8;
    --button-color:#fff;
    /* code */
    --code-bg:#f2f7fd;
    --code-text-color:#383838;
    --shiki-color-text: #b8cdd9;
    --shiki-color-background: #292929;
    --shiki-token-constant: #4EC9B0;
    --shiki-token-string: #B58672;
    --shiki-token-comment: #538b46;
    --shiki-token-keyword: #B97FB4;
    --shiki-token-parameter: #38bdf8;
    --shiki-token-function: #dbdba6;
    --shiki-token-string-expression: #CC9077;
    --shiki-token-punctuation: #b8cdd9;
    --shiki-token-link: #b8cdd9;
}
```