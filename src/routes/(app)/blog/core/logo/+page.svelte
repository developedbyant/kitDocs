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
    <title>Logo | TestApp</title>
    <meta name="title" content="Logo | TestApp" />
    <meta name="description" content="A svelte component that render your logo into the top navigation." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://developedbyant.com/blog/core/logo" />
    <meta property="og:title" content="Logo | TestApp" />
    <meta property="og:description" content="A svelte component that render your logo into the top navigation." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://developedbyant.com/blog/core/logo" />
    <meta property="twitter:title" content="Logo | TestApp" />
    <meta property="twitter:description" content="A svelte component that render your logo into the top navigation." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="logo">
    Logo
</h1>
<p data-md="p">A svelte component that render your logo into the top navigation, it can be found and edit at <code data-md="inline-code">src/kitDocs/app/Logo.svelte</code>, 
any changes made to this component will stay like that even after running the update command.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">a</span><span style="color:var(--shiki-token-function)"> href</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"/"</span><span style="color:var(--shiki-token-function)"> class</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"logo"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    Logo</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">a</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">style</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-token-function)">    .logo</span><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        display</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> flex</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        align-items</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> center</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        justify-content</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> center</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        width</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> 40</span><span style="color:var(--shiki-token-keyword)">px</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        height</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> 40</span><span style="color:var(--shiki-token-keyword)">px</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        min-width</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> 40</span><span style="color:var(--shiki-token-keyword)">px</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        min-height</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> 40</span><span style="color:var(--shiki-token-keyword)">px</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        background</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> var</span><span style="color:var(--shiki-token-constant)">(--main-color)</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant)">        border-radius</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> 5</span><span style="color:var(--shiki-token-keyword)">px</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">style</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
