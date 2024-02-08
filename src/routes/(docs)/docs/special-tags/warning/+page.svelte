<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="WARNING";data.description="Display a warning message."; return data })
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

<h1 data-section data-kb="header" id="warning">
    Warning
</h1>
<p data-kb="p">To display a warning message, just add the <code data-kb="inline-code">[WARNING]</code> code tag to your md file.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```[WARNING]</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    This is a warning message</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></div>
<div data-kb="space"></div>
<p data-kb="p">Preview</p>
<div data-kb="warning">This is a warning message</div>