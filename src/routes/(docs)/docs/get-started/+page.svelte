<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Getting start";data.description="Getting started after creating kitDocs project."; return data })
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

<h1 data-sb="header" id="getting-started">
    Getting started
</h1>
<p data-sb="p">After creating a kitDocs project you need to learn how to create a page,page structure,tags and all things needed to create a full documentation website.</p>
<div data-sb="space"></div>
<h2 data-sb="header" id="key-notes">
    Key notes
</h2>
<ul>
<li>Structure<ul>
<li>learn how your project structure should look</li>
</ul>
</li>
<li>Create page (route)<ul>
<li>How to create a route using the pages folder</li>
</ul>
</li>
</ul>
<div data-sb="space"></div>
<h2 data-sb="header" id="project-structure">
    Project structure
</h2>
<p data-sb="p">Your project structure should look something like this.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ project/</span></span>
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
<div data-sb="space"></div>
<h2 data-sb="header" id="create-route">
    Create route
</h2>
<p data-sb="p">To create a page(route), all you need to do is create a markdown file inside the <code data-sb="inline-code">pages</code> 
folder with the needed metadata.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ pages/</span></span>
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
<p data-sb="p">To sort files and folders user the [] follow by the order number inside [1] or [2], example 
[1]index.md will be show before [2]installation.md since [1]index.md start with [1].</p>
<div data-sb="space"></div>
<h2 data-sb="header" id="first-page">
    First page
</h2>
<p data-sb="p">Let's create your first page by adding the metadata tags that are required.<br>
The layout,title and description are required at the top of any markdown file, key new it's 
optional to allow us to add the new chip next to link on side nav.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    layout: Introduction</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title: Add to project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    description: How to install kitDocs.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span></code></pre></div>
<p data-sb="p">Add header tag and all tags supported by markdown</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text); font-weight: bold"># This is the page title</span></span></code></pre></div>
<p data-sb="p">Here is a simple page</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    layout: Introduction</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title: Installation</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    description: How to install kitDocs.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # Installation</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    To install,update or add kitDocs, simply run the following command in your terminal and follow the prompts:</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```bash</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    npx kitdocs@latest</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    You will see something like this from your terminal</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```bash</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ┌  Welcome</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ◆  What would you like to do ?</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ● Create new project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ○ Add to project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ○ Update</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    └</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```</span></span></code></pre></div>
<p data-sb="p">See all super tags you can use inside your markdown files <a data-sb="a" href="/docs/special-tags">
    Special tags
</a>.</p>