<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="CSS";data.description="Adding custom style to page."; return data })
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

<h1 data-section data-sb="header" id="adding-style">
    Adding style
</h1>
<p data-sb="p">To add style to the style tag, use the <code data-sb="inline-code">css [CODE]</code> tag after metadata code on top of your .md file.<br>
Markdown code</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```css [CODE]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-function)">.card</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">padding</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">10</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">border</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">1.5</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-token-constant)"> solid </span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--border-color)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--app-bg)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">border-radius</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">15</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--app-fb)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```svelte</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    &lt;div class=&quot;card&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">        Custom css</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    &lt;/div&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></div>
<div data-sb="space"></div>
<p data-sb="p">Preview</p>
<div class="card">
    Custom css
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