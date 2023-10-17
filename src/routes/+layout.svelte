<script lang="ts">
    export let data
    import"kitDocs/style.css"
    import { page } from "$app/stores";
    import Layout from "kitDocs/Layout.svelte";
    // only show if we are viewing /docs
    $: showSides = $page.url.pathname.startsWith("/docs")
</script>

<Layout {data} {showSides}>
    <slot />
</Layout>