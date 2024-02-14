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
    <title>WARNING | KitDocs</title>
    <meta name="title" content="WARNING | KitDocs" />
    <meta name="description" content="Display a warning message." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/special-tags/warning" />
    <meta property="og:title" content="WARNING | KitDocs" />
    <meta property="og:description" content="Display a warning message." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/special-tags/warning" />
    <meta property="twitter:title" content="WARNING | KitDocs" />
    <meta property="twitter:description" content="Display a warning message." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="warning">
    Warning
</h1>
<p data-md="p">To display a warning message, just add the <code data-md="inline-code">[WARNING]</code> code tag to your md file.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-string)">    ```[WARNING]</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    This is a warning message</span></span>
<span class="line"><span style="color:var(--shiki-token-string)">    ```</span></span></code></pre></div>
<div data-md="space"></div>
<p data-md="p">Preview</p>
<div data-md="warning">This is a warning message</div>
