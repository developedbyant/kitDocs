<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Logo";data.description="A svelte component that render your logo into the top navigation."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
</script>

<Header type="h1" id="logo">
    Logo
</Header>
<Text>A svelte component that render your logo into the top navigation, it can be found and edit at <InlineCode code="/kitDocs/Logo.svelte" />, 
any changes made to this component will stay like that even after running the update command.</Text>