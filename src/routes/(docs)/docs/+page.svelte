<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="KitDocs";data.description="Build documentation site using SvelteKit and kitDocs."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    import Link from 'kitDocs/components/Link.svelte';
</script>

<Header type="h1" id="what-is-kitdocs">
    What is kitDocs?
</Header>
<Text>KitDocs is a powerful tool that enables you to create documentation websites rapidly using SvelteKit.</Text>
<Space />
<Header type="h2" id="getting-started">
    Getting Started
</Header>
<Text>To install kitDocs, simply run the following command in your terminal and follow the prompts:</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">create-kitdocs-app@latest</span></span></code></pre></Code>
<Text>Or</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></Code>
<Text>For a more detailed installation guide, refer to the <Link href="/docs/installation">
    installation
</Link> guide.</Text>
<Space />
<Header type="h2" id="updating-kitdocs">
    Updating kitDocs
</Header>
<Text>Updating kitDocs is as easy as installing it. Run the following command to ensure you have the latest version:</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></Code>
<Text>The update script will automatically detect your existing kitDocs installation, save specific files, and replace others with the latest versions from kitDocs. Your custom files will remain unchanged during the update process.</Text>