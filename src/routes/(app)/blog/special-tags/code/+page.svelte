<script lang="ts">
    let isDarkMode:boolean = false
    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>CODE | TestApp</title>
    <meta name="title" content="CODE | TestApp" />
    <meta name="description" content="Add custom js code to script tag." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://developedbyant.com/blog/special-tags/code" />
    <meta property="og:title" content="CODE | TestApp" />
    <meta property="og:description" content="Add custom js code to script tag." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://developedbyant.com/blog/special-tags/code" />
    <meta property="twitter:title" content="CODE | TestApp" />
    <meta property="twitter:description" content="Add custom js code to script tag." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="adding-style">
    Adding style
</h1>
<p data-md="p">To add custom code to a route, use the <code data-md="inline-code">js [CODE]</code> or <code data-md="inline-code">ts [CODE]</code> tag after metadata code on top of your .md file.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-string)">    ```js [CODE]</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        let</span><span style="color:var(--shiki-foreground)"> isDarkMode</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)">boolean</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-token-constant)"> false</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    ```</span></span></code></pre></div>
<p data-md="p">Code example</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">button</span><span style="color:var(--shiki-token-function)"> class</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"btnTest"</span><span style="color:var(--shiki-token-keyword)"> on</span><span style="color:var(--shiki-foreground)">:</span><span style="color:var(--shiki-token-function)">click</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">&#123;()</span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-foreground)">isDarkMode</span><span style="color:var(--shiki-token-keyword)">=!</span><span style="color:var(--shiki-foreground)">isDarkMode}>SetTheme&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">button</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">h2</span><span style="color:var(--shiki-foreground)">>Current theme is:&#123;isDarkMode</span><span style="color:var(--shiki-token-keyword)">?</span><span style="color:var(--shiki-token-string-expression)">"dark"</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"light"</span><span style="color:var(--shiki-foreground)">} mode&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">h2</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<p data-md="p">Code example preview</p>
<button class="btnTest" on:click={()=>isDarkMode=!isDarkMode}>SetTheme</button>
<h2>Current theme is:{isDarkMode?"dark":"light"} mode</h2>
<style>
    .btnTest{
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
</style>