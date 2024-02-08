<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="CODE";data.description="Add custom js code to script tag."; return data })
    // custom code ===================
    let isDarkMode:boolean = false
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

<h1 data-sb="header" id="adding-style">
    Adding style
</h1>
<p data-sb="p">To add custom code to a route, use the <code data-sb="inline-code">js [CODE]</code> or <code data-sb="inline-code">ts [CODE]</code> tag after metadata code on top of your .md file.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```js [CODE]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> isDarkMode</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></div>
<p data-sb="p">Code example</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">on</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;()</span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)">isDarkMode</span><span style="color: var(--shiki-token-keyword)">=!</span><span style="color: var(--shiki-color-text)">isDarkMode}&gt;SetTheme&lt;/</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">h2</span><span style="color: var(--shiki-color-text)">&gt;Current theme is:&#123;isDarkMode</span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-token-string-expression)">&quot;dark&quot;</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;light&quot;</span><span style="color: var(--shiki-color-text)">} mode&lt;/</span><span style="color: var(--shiki-token-string-expression)">h2</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<p data-sb="p">Code example preview</p>
<button on:click={()=>isDarkMode=!isDarkMode}>SetTheme</button>
<h2>Current theme is:{isDarkMode?"dark":"light"} mode</h2>

<style>
    button{
        all:unset;
        cursor:pointer;
        width:fit-content;
        padding:5px 10px;
        border:1.5px solid var(--border-color);
        background-color:var(--button-bg);
        color:var(--button-color);
        border-radius:5px;
        font-size:14px;
        font-weight:600;
    }
</style>