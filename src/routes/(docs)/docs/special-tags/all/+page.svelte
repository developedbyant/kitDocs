<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="ALL";data.description="Show highlighted code and add code to the page."; return data })
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

<h1 data-sb="header" id="highlight-and-show-code">
    Highlight and show code
</h1>
<p data-sb="p">The <code data-sb="inline-code">svelte [ALL]</code> tag let you highlight code and add code to the page at the same time.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```svelte [all]</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    &lt;div class=&quot;card&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">        HELLO</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    &lt;/div&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></div>
<div data-sb="space"></div>
<p data-sb="p">Code will be Highlighted and added to the page.</p>
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