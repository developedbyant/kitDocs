<script lang="ts">
    export let showSides:boolean = true
    export let data:PageData
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { appStore,metaTagsStore } from "kitDocs/stores";
    import Nav from "./layout/Nav.svelte";
    import SideNav from "./layout/SideNav.svelte";
    import PageNav from "./layout/PageNav.svelte";
    import Search from "./layout/Search.svelte";
    // images
    // import backdropImageSrc from "svelteCMS/images/backdrop.png"
    // import faviconImageSrc from "svelteCMS/images/favicon.png"
    let backdropImageSrc = ""
    let faviconImageSrc = ""
    import type { PageData } from "../routes/$types"
    $: theme = $appStore.theme
    let appContentDiv:HTMLDivElement

    /** scroll up after navigating */
    afterNavigate(data=>{
        if((data.from && data.to) && data.from.url.pathname!==data.to.url.pathname){
            appContentDiv.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })

    /** Change theme color */
    async function handleThemeChange(e:any) {
        const newTheme:"dark"|"light" = e.detail
        appStore.update(data=>{ data['theme']=newTheme ; return data })
    }
    $: console.log(data,"src/kitDocs/layout/Layout.svelte")
    // set mete tags
    $: url = $page.url.href
    $: appName = $metaTagsStore.appName
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : faviconImageSrc
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" 
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | All in one svelte cms` 
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"All in one cms for your svelte and sveltekit projects." 
    $: image = $metaTagsStore.image ? $metaTagsStore.image: backdropImageSrc
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content="FinOnX | Finance on X" />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
</svelte:head>

<div class="kitDocs kitBlocks" class:light={theme==="light"}>
    <Search />
    <Nav on:themeChange={handleThemeChange} {showSides}/>
    <div class="appContent" bind:this={appContentDiv}>
        {#if showSides}
            <SideNav />
        {/if}
        <main>
            <slot />
            <PageNav />
        </main>
    </div>
</div>

<style>
    .kitDocs{
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: var(--app-bg);
        color: var(--text-color);
    }
    .appContent{
        flex: 1;
        display: flex;
        justify-content: space-between;
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
        gap: 50px;
        overflow-y: scroll;
        padding: 10px 5px;
    }
    .appContent::-webkit-scrollbar{
        display: none;
    }
    main{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    main::-webkit-scrollbar{
        display: none;
    }
</style>