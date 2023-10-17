<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="KitDocs";data.description="Build documentation site using svelteKit and kitDocs."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Link from 'kitDocs/components/Link.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    // custom code

</script>

<Header type="h2" text="What is kitDocs ?" />
<Text>KitDocs let you create documentation website for your project using svelteKit, learn how to create one <Link href="/docs/quick-start">Get started</Link>.</Text>
<Space />
<Header type="h2" text="How kitDocs work ?" />
<Text>KitDocs uses <Link href="https://www.npmjs.com/package/globby">globby</Link> to read files,<Link href="https://www.npmjs.com/package/marked">marked</Link> to read markdown files and <Link href="https://www.npmjs.com/package/shiki">shiki</Link> for code highlighting<br />
After that we covert your markdown files to svelte routes using our custom components from <InlineCode code="kitDocs/components"/>.<br /></Text>