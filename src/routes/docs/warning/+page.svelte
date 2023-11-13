<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Warning";data.description="Display a warning message."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Warning from 'kitDocs/components/Warning.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" id="warning">
    Warning
</Header>
<Text>To add an warning message, just add the <InlineCode code="[WARNING]" /> to a code tag.<br></Text>
<Space />
<Text>Preview</Text>
<Warning>This is a warning message</Warning>
<Space />
<Text>Code</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-string)">    ```[WARNING]</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    This is a warning message</span></span>
<span class="line"><span style="color: var(--shiki-token-string)">    ```</span></span></code></pre></Code>