<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="WARNING";data.description="Display a warning message."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Warning from 'kitDocs/components/Warning.svelte';
</script>

<Header type="h1" id="warning">
    Warning
</Header>
<Text>To display a warning message, just add the <InlineCode code="[WARNING]" /> code tag to your md file.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```[WARNING]</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    This is a warning message</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></Code>
<Space />
<Text>Preview</Text>
<Warning>This is a warning message</Warning>