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
    <title>//H | TestApp</title>
    <meta name="title" content="//H | TestApp" />
    <meta name="description" content="Highlight code sections." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://developedbyant.com/blog/special-tags/h" />
    <meta property="og:title" content="//H | TestApp" />
    <meta property="og:description" content="Highlight code sections." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://developedbyant.com/blog/special-tags/h" />
    <meta property="twitter:title" content="//H | TestApp" />
    <meta property="twitter:description" content="Highlight code sections." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="highlight-code">
    Highlight code
</h1>
<p data-md="p">To highlight a code block you can use the tag <code data-md="inline-code">//[H]</code> after the code you want to highlight.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-string)">    ```js</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        const</span><span style="color:var(--shiki-token-constant)"> user</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">            name</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"Tony"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">            admin</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)">true</span><span style="color:var(--shiki-token-comment)">//[H ]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    ```</span></span></code></pre></div>
<p data-md="p">This will highlight <code data-md="inline-code">admin:true</code>.<br>
Preview</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">const</span><span style="color:var(--shiki-token-constant)"> user</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    name</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"Tony"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    admin</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)">true</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
