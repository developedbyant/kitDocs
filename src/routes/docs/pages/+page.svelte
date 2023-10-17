<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Pages";data.description="How to install kitDocs step by step."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Warning from 'kitDocs/components/Warning.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" text="Markdown page" />
<Text>Inside <InlineCode code="pages"/> folder you can create all the pages necessary for your project.</Text>
<Space />
<Warning>All md files most have a yaml tag at the top of the file with tags layout,title and description</Warning>
<Space />
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">---</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">layout</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">Introduction</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">Installation</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">description</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">How to install kitDocs step by step.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">---</span></span></code></pre></Code>
<Text>If you want to create route <InlineCode code="docs/update"/> create md file <InlineCode code="update.md"/> or <InlineCode code="[..]update.md"/> to sort routes</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">pages/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">|- [.]install.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">|- update.md</span></span></code></pre></Code>
<Space />
<Text>You can also create sub folders, example to create <InlineCode code="docs/components/button"/> create folder <InlineCode code="components"/> inside the <InlineCode code="pages"/> folder.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">pages/components</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">|- button.md</span></span></code></pre></Code>