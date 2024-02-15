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
    <title>KitDocs | KitDocs</title>
    <meta name="title" content="KitDocs | KitDocs" />
    <meta name="description" content="Build documentation site using SvelteKit and kitDocs." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://kitdocs.dev/docs/" />
    <meta property="og:title" content="KitDocs | KitDocs" />
    <meta property="og:description" content="Build documentation site using SvelteKit and kitDocs." />
    <meta property="og:image" content="https://kitdocs.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://kitdocs.dev/docs/" />
    <meta property="twitter:title" content="KitDocs | KitDocs" />
    <meta property="twitter:description" content="Build documentation site using SvelteKit and kitDocs." />
    <meta property="twitter:image" content="https://kitdocs.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="what-is-kitdocs">
    What is kitDocs?
</h1>
<p data-md="p">KitDocs is a powerful tool that enables you to create documentation websites rapidly using SvelteKit and markdown.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="getting-started">
    Getting Started
</h2>
<p data-md="p">To get started using kitDocs it's super simple, just run <code data-md="inline-code">npx kitdocs@latest</code> from your terminal 
and follow the prompts.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> kitdocs@latest</span></span></code></pre></div>
<p data-md="p">You will see something like this from your terminal</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">┌</span><span style="color:var(--shiki-token-string)">  Welcome</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">◆</span><span style="color:var(--shiki-token-string)">  What would you like to do ?</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ● Create new project</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ○ Update</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="updating-kitdocs">
    Updating kitDocs
</h2>
<p data-md="p">Just like the installing run <code data-md="inline-code">npx kitdocs@latest</code> and select option update when prompt with the selection, 
it will add the latest changes to kitDocs and will not update anything inside <code data-md="inline-code">src/kitDocs/app</code>.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> kitdocs@latest</span></span></code></pre></div>
<p data-md="p">Select update</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">┌</span><span style="color:var(--shiki-token-string)">  Welcome</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">◆</span><span style="color:var(--shiki-token-string)">  What would you like to do ?</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ○ Create new project</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ● Update</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="project-structure">
    Project structure
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span>┌ project/</span></span>
<span class="line"><span>├ src/</span></span>
<span class="line"><span>│ ├ kitDocs/</span></span>
<span class="line"><span>│ │ └ Logo.svelte</span></span>
<span class="line"><span>│ │ └ style.css</span></span>
<span class="line"><span>│ │ └ app.json</span></span>
<span class="line"><span>│ │ └ and more..</span></span>
<span class="line"><span>│ │</span></span>
<span class="line"><span>│ ├ routes/</span></span>
<span class="line"><span>│ │ └ (app) # all your app routes here</span></span>
<span class="line"><span>│ │ └ (docs) # this should not be touched</span></span>
<span class="line"><span>└ └   └ kitDocs/</span></span></code></pre></div>
<div data-md="space"></div>
<p data-md="p">After the installation you can follow the <a data-md="a" href="/docs/getting-started">
    Getting started
</a> guide to complete installation.</p>
