<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Tags";data.description="A list of super key you can use inside your markdowns."; return data })

</script>

<h1 data-section data-kb="header" id="special-tags">
    Special tags
</h1>
<p data-kb="p">KitDocs has a list of super key you can use inside your markdowns to 
do things like code highlight,display code, display code and highlight at the same time, insert css,add custom ts or js code,add warning and more.</p>