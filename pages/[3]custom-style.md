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
    & code{
        display: flex;
        flex-direction: column;
        padding: 5px 0;
        /* overflow-x: scroll; */
    }
}
.shiki .line{
    padding: 1px 10px;
}
.shiki .line.highlight{
    background-color: #4d8aac40;
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
    --text-color:#999999;
    --border-color:#eeeeee;
    --icon-color: #9a9a9a;
    --shadow:rgba(0,0,0,5%);
    --main-color:#38bdf8;
    --second-color:#38bdf8;
    --error-bg: #cc7d7d;
    --error-color: #fff;
    /* search */
    --search-bg:#f9f9f9;
    --search-color:#b1b1b1;
    /* nav */
    --nav-bg:#18181A;
    --nav-link-color:#9a9a9a;
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
/* label data */
[data-label]{
    position: relative;
}
[data-label]:hover::before{
    content: attr(data-label);
    width: max-content;
    position: absolute;
    top: 0; left: 0;
    z-index: 10;
    background-color: var(--data-label-bg);
    color: var(--data-label-color);
    font-size: 12px;
    font-weight: 400;
    border-radius: 5px;
    padding: 7px 13px;
    top: calc(100% + 10px);
    left: 50%; transform: translateX(-50%);
}
[data-label-tr]:hover::before,[data-label-tl]:hover::before,[data-label-br]:hover::before,[data-label-bl]:hover::before{
    transform: none;
}
[data-label-tr]:hover::before{
    top: calc(-100% - 15px);
    left: calc(100% + 5px);
}
[data-label-tl]:hover::before{
    top: calc(-100% - 15px);
    right: calc(100% + 5px);
    left: auto;
}
[data-label-bl]:hover::before{
    top: calc(100% + 5px);
    right: calc(100% + 5px);
    left: auto;
}
[data-label-br]:hover::before{
    top: calc(100% + 5px);
    right: auto;
    left: calc(100% + 5px);
}
```