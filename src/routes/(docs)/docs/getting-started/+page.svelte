<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Getting started";data.description="What to do after installing kitDocs, A step by step guide."; return data })
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

<h1 data-section data-kb="header" id="getting-started">
    Getting started
</h1>
<p data-kb="p">After installing kitDocs you will need to do the following:</p>
<ul data-kb="list">
    <li>Add <code data-kb="inline-code">src</code> alias to svelte.config.js</li>
    <li>Add the markdown to svelte plugin</li>
    <li>create pages (routes)</li>
</ul>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="adding-alias">
    Adding alias
</h2>
<p data-kb="p">Inside <code data-kb="inline-code">svelte.config.js</code> add the src alias needed for kitDocs to work.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> adapter </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/adapter-auto&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; vitePreprocess } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/kit/vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">/** </span><span style="color: var(--shiki-token-keyword)">@type</span><span style="color: var(--shiki-token-comment)"> </span><span style="color: var(--shiki-token-function)">&#123;import(&#39;@sveltejs/kit&#39;).Config}</span><span style="color: var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    preprocess</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">vitePreprocess</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    kit</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        adapter</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">adapter</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        alias</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            src</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;src/*&quot;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> config;</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-plugin">
    Add plugin
</h2>
<p data-kb="p">In order to convert your markdown files to svelte pages, you needed to add kitDocs plugin from 
<code data-kb="inline-code">src/kitDocs/lib/plugin</code> to the <code data-kb="inline-code">vite.config.ts</code> file.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; sveltekit } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/kit/vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; defineConfig } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line added"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> kitDocsPlugin </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;./src/kitDocs/lib/plugin&quot;</span><span style="color: var(--shiki-color-text)">;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">defineConfig</span><span style="color: var(--shiki-color-text)">(&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    plugins</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-function)">kitDocsPlugin</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-function)">sveltekit</span><span style="color: var(--shiki-color-text)">()</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="create-pages-folder">
    Create pages folder
</h2>
<p data-kb="p">To create a route/page create a folder named <code data-kb="inline-code">pages</code> in your working directory, 
inside that folder you will create a your markdowns that will be converted into svelte pages.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ pages/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ sub-folder/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [2]route-slug.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ [2]sub-folder-2/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [2]route-slug.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└ [2]installation.md</span></span></code></pre></div>
<p data-kb="p">All markdown files most have the following keys on top of the files.</p>
<ul data-kb="list">
    <li>layout : Indicates which group current file belongs to</li>
    <li>title : title for the route/page</li>
    <li>description : description for the route/page</li>
    <li>new (optional) : will added the new badge next to the link</li>
</ul>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    layout: Introduction</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title: Installation</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    description: How to install kitDocs.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # What is kitDocs</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    KitDocs is a documentation builder for svelte kit apps.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```bash</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    npx kitdocs@latest</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    You will see something like this from your terminal</span></span></code></pre></div>