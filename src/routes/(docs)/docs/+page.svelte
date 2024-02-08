<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="KitDocs";data.description="Build documentation site using SvelteKit and kitDocs."; return data })
    // custom code ===================

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

<h1 data-section data-kb="header" id="what-is-kitdocs">
    What is kitDocs?
</h1>
<p data-kb="p">KitDocs is a powerful tool that enables you to create documentation websites rapidly using SvelteKit and markdown.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="getting-started">
    Getting Started
</h2>
<p data-kb="p">To get started using kitDocs it's super simple, just run <code data-kb="inline-code">npx kitdocs@latest</code> from your terminal 
and follow the prompts.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></div>
<p data-kb="p">You will see something like this from your terminal</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="updating-kitdocs">
    Updating kitDocs
</h2>
<p data-kb="p">Just like the installing run <code data-kb="inline-code">npx kitdocs@latest</code> and select option update when prompt with the selection, 
it will add the latest changes to kitDocs and will not update anything inside <code data-kb="inline-code">src/kitDocs/app</code>.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></div>
<p data-kb="p">Select update</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="project-structure">
    Project structure
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ project/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├ src/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ kitDocs/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ Logo.svelte</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ style.css</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ app.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ and more..</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ routes/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ (app) # all your app routes here</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ (docs) # this should not be touched</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└ └   └ kitDocs/</span></span></code></pre></div>
<div data-kb="space"></div>
<p data-kb="p">After the installation you can follow the <a data-kb="a" href="/docs/getting-started">
    Getting started
</a> guide to complete installation.</p>