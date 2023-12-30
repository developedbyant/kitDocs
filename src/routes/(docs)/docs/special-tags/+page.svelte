<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Tags";data.description="A list of super key you can use inside your markdowns."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
</script>

<Header type="h1" id="special-tags">
    Special tags
</Header>
<Text>KitDocs has a list of super key you can use inside your markdowns to 
do things like code highlight,display code, display code and highlight at the same time, insert css,add custom ts or js code,add warning and more.</Text>