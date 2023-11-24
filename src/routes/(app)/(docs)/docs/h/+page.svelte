<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="//H";data.description="Highlight code sections."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" id="highlight-code">
    Highlight code
</Header>
<Text>To highlight a code block you can use the tag <InlineCode code="//[H]" /> after the code you want to highlight.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">user</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;Tony&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            admin</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-comment)">//[H ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></Code>
<Text>This will highlight <InlineCode code="admin:true" />.<br>
Preview</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">user</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;Tony&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    admin</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></Code>