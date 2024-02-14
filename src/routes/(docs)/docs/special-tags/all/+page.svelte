<script lang="ts">

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
    <title>ALL | KitDocs</title>
    <meta name="title" content="ALL | KitDocs" />
    <meta name="description" content="Show highlighted code and add code to the page." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/special-tags/all" />
    <meta property="og:title" content="ALL | KitDocs" />
    <meta property="og:description" content="Show highlighted code and add code to the page." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/special-tags/all" />
    <meta property="twitter:title" content="ALL | KitDocs" />
    <meta property="twitter:description" content="Show highlighted code and add code to the page." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="highlight-and-show-code">
    Highlight and show code
</h1>
<p data-md="p">The <code data-md="inline-code">svelte [ALL]</code> tag let you highlight code and add code to the page at the same time.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-string)">    ```svelte [all]</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    &#x3C;div class="card"></span></span>
<span class="line"><span style="color:var(--shiki-token-string)">        HELLO</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    &#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    ```</span></span></code></pre></div>
<div data-md="space"></div>
<p data-md="p">Code will be Highlighted and added to the page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-token-function)"> class</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"card"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    HELLO</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div class="card">
    HELLO
</div>
<style>
    .card{
        display:flex;
        padding:10px;
        border:1.5px solid var(--border-color);
        background-color:var(--app-bg);
        border-radius: 15px;
        background-color: var(--app-fb);
    }
</style>