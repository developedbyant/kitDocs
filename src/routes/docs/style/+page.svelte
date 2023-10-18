<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="CSS";data.description="Adding custom style to page."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" text="Adding style" />
<Text>To add style to the style tag, use the <InlineCode code="css [CODE]"/> tag after metadata code on top of your .md file.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```css [CODE]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-function)">.card</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">padding</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">10</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">border</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">1.5</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-token-constant)"> solid </span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--border-color)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--app-bg)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">border-radius</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">15</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">background-color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">var</span><span style="color: var(--shiki-token-constant)">(--app-fb)</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></Code>
<Text>Card code</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;card&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    HELLO</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Text>Card preview with style</Text>
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