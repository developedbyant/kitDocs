<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="KitDocs";data.description="Build documentation site using svelteKit and kitDocs."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Link from 'kitDocs/components/Link.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    // custom code

</script>

<Header type="h2" id="what-is-kitdocs">
    What is kitDocs ?
</Header>
<Link href="/docs/quick-start" id="get-started"></Link><Text>KitDocs let you create documentation website for your project using svelteKit, learn how to create one [Get started](/docs/quick-start).</Text>
<Space />
<Header type="h2" id="how-kitdocs-work">
    How kitDocs work ?
</Header>
<Link href="https://www.npmjs.com/package/globby" id="globby"></Link><Link href="https://www.npmjs.com/package/marked" id="marked"></Link><Link href="https://www.npmjs.com/package/shiki" id="shiki"></Link><Text>KitDocs uses [globby](https://www.npmjs.com/package/globby) to read files,[marked](https://www.npmjs.com/package/marked) to read markdown files and [shiki](https://www.npmjs.com/package/shiki) for code highlighting<br />
After that we covert your markdown files to svelte routes using our custom components from <InlineCode code="kitDocs/components" />.<br /></Text>
<Space />
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