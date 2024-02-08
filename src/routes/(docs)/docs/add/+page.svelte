<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Add to project";data.description="How to install kitDocs."; return data })
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

<h1 data-sb="header" id="installation">
    Installation
</h1>
<p data-sb="p">To install,update or add kitDocs, simply run the following command in your terminal and follow the prompts:</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></div>
<p data-sb="p">You will see something like this from your terminal</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-sb="space"></div>
<h2 data-sb="header" id="updating-kitdocs">
    Updating kitDocs
</h2>
<p data-sb="p">Updating kitDocs is as easy as installing it. Run the following command to ensure you have the latest version:</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></div>
<p data-sb="p">And Select update</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></div>
<div data-sb="space"></div>
<h2 data-sb="header" id="add-to-project">
    Add to project
</h2>
<p data-sb="p">To add kitDocs to a current project run <code data-sb="inline-code">npx kitdocs@latest</code> from your project root and select the option Add to project.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></div>
<p data-sb="p">You can find a full guide of what to do after adding kitDocs to a project <a data-sb="a" href="/docs/add">
    Adding to project
</a>.</p>