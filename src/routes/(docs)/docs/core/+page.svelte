<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Files";data.description="The most important files that makes kitDocs function."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
</script>

<Header type="h1" id="core-files">
    Core files
</Header>
<Text>KitDocs uses create some files that are use to make sure your app work as it should be, file like <InlineCode code="kitDocs/app.json" /> helps us keep track 
of your generated links and other info about your app, <InlineCode code="kitDocs/Logo.svelte" /> can be edit by you and we will not remove it when updating, 
<InlineCode code="kitDocs/style.css" /> styles kitDocs so any changes you want to make to your project can be done there.</Text>