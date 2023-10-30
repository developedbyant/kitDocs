<script lang="ts">
    export let data:PageData
    import"../app.css"
    import"kitDocs/styles/app.css"
    import"kitDocs/styles/shiki.css"
    import { page } from "$app/stores";
    import Layout from "kitDocs/Layout.svelte";
    import type { PageData } from "./$types"
    // only show if we are viewing /docs
    $: showSides = $page.url.pathname.startsWith("/docs")
</script>

<Layout {data} {showSides}>
    <slot />
</Layout>