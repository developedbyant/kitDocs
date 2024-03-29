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
    <title>Getting started | KitDocs</title>
    <meta name="title" content="Getting started | KitDocs" />
    <meta name="description" content="What to do after installing kitDocs, A step by step guide." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://kitdocs.dev/docs/getting-started" />
    <meta property="og:title" content="Getting started | KitDocs" />
    <meta property="og:description" content="What to do after installing kitDocs, A step by step guide." />
    <meta property="og:image" content="https://kitdocs.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://kitdocs.dev/docs/getting-started" />
    <meta property="twitter:title" content="Getting started | KitDocs" />
    <meta property="twitter:description" content="What to do after installing kitDocs, A step by step guide." />
    <meta property="twitter:image" content="https://kitdocs.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="getting-started">
    Getting started
</h1>
<p data-md="p">To get started with KitDocs run the following command from your terminal.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> kitdocs@latest</span></span></code></pre></div>
<p data-md="p">It will prompts you the following prompts.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">┌</span><span style="color:var(--shiki-token-string)">  Welcome</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">◆</span><span style="color:var(--shiki-token-string)">  What would you like to do ?</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ● Create new project</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">│</span><span style="color:var(--shiki-token-string)">  ○ Update</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">└</span></span></code></pre></div>
<p data-md="p">Select the one for you, <code data-md="inline-code">Create new project</code> if creating a new project or <code data-md="inline-code">Update</code> if you are updating KitDocs.</p>
<div data-md="warning">To update run npx kitdocs@latest from current project directory</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="new-project">
    New project
</h2>
<p data-md="p">If you just created a new project, the following folders will be created to your directory.</p>
<ul data-md="list">
    <li><code data-md="inline-code">pages</code> the folder that contains all markdowns files.</li>
    <li><code data-md="inline-code">src/kitDocs</code> All files that makes kitDocs works.</li>
</ul>
<div data-md="space"></div>
<h2 data-section data-md="header" id="adding-alias">
    Adding alias
</h2>
<p data-md="p">Inside <code data-md="inline-code">svelte.config.js</code> add the src alias needed for kitDocs to work.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> adapter </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> '@sveltejs/adapter-auto'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> &#123; vitePreprocess } </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> '@sveltejs/kit/vite'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-comment)">/** </span><span style="color:var(--shiki-token-keyword)">@type</span><span style="color:var(--shiki-token-function)"> &#123;import('@sveltejs/kit').Config}</span><span style="color:var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">const</span><span style="color:var(--shiki-token-constant)"> config</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    preprocess</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> vitePreprocess</span><span style="color:var(--shiki-foreground)">()</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    kit</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        adapter</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> adapter</span><span style="color:var(--shiki-foreground)">()</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        alias</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">            src</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"src/*"</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">};</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">export</span><span style="color:var(--shiki-token-keyword)"> default</span><span style="color:var(--shiki-foreground)"> config;</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-plugin">
    Add plugin
</h2>
<p data-md="p">In order to convert your markdown files to svelte pages, you needed to add kitDocs plugin from 
<code data-md="inline-code">src/kitDocs/lib/plugin</code> to the <code data-md="inline-code">vite.config.ts</code> file.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> &#123; sveltekit } </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> '@sveltejs/kit/vite'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> &#123; defineConfig } </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> 'vite'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> viteMdToSvelte </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "./src/kitDocs/lib/plugin"</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">const</span><span style="color:var(--shiki-token-constant)"> kitDocsOptions</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    appName</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"KitDocs"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-foreground)">domainUrl</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"https://kitdocs.dev"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    defaultImage</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"https://kitdocs.dev/images/backdrop.png"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-foreground)"> devMode</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)">true</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">}</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">export</span><span style="color:var(--shiki-token-keyword)"> default</span><span style="color:var(--shiki-token-function)"> defineConfig</span><span style="color:var(--shiki-foreground)">(&#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    plugins</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-foreground)"> [</span></span>
<span class="line added"><span style="color:var(--shiki-token-function)">        viteMdToSvelte</span><span style="color:var(--shiki-foreground)">(</span><span style="color:var(--shiki-token-string-expression)">"src/routes/(docs)/docs"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-foreground)">kitDocsOptions)</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-token-function)">        sveltekit</span><span style="color:var(--shiki-foreground)">()</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    ]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">});</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="create-pages-folder">
    Create pages folder
</h2>
<p data-md="p">To create a route/page create a folder named <code data-md="inline-code">pages</code> in your working directory, 
inside that folder you will create a your markdowns that will be converted into svelte pages.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span>┌ pages/</span></span>
<span class="line"><span>│ ├ sub-folder/</span></span>
<span class="line"><span>│ │ └ [1]index.md</span></span>
<span class="line"><span>│ │ └ [2]route-slug.md</span></span>
<span class="line"><span>│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span>│ │</span></span>
<span class="line"><span>│ ├ [2]sub-folder-2/</span></span>
<span class="line"><span>│ │ └ [1]index.md</span></span>
<span class="line"><span>│ │ └ [2]route-slug.md</span></span>
<span class="line"><span>│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span>│ │</span></span>
<span class="line"><span>├ [1]index.md</span></span>
<span class="line"><span>└ [2]installation.md</span></span></code></pre></div>
<p data-md="p">All markdown files most have the following keys on top of the files.</p>
<ul data-md="list">
    <li>layout : Indicates which group current file belongs to</li>
    <li>title : title for the route/page</li>
    <li>description : description for the route/page</li>
    <li>new (optional) : will added the new badge next to the link</li>
</ul>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span>    ---</span></span>
<span class="line"><span>    layout: Introduction</span></span>
<span class="line"><span>    title: Installation</span></span>
<span class="line"><span>    description: How to install kitDocs.</span></span>
<span class="line"><span>    ---</span></span>
<span class="line"><span>    # What is kitDocs</span></span>
<span class="line"><span>    KitDocs is a documentation builder for svelte kit apps.</span></span>
<span class="line"><span>    ```bash</span></span>
<span class="line"><span>    npx kitdocs@latest</span></span>
<span class="line"><span>    ```</span></span>
<span class="line"><span>    You will see something like this from your terminal</span></span></code></pre></div>
