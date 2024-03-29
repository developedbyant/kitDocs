<script lang="ts">
    import "src/kitDocs/app/styles/app.css"
    import "src/kitDocs/app/styles/docs.css"
    import "src/kitDocs/app/styles/md.css"
    import { page } from "$app/stores";
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    import { appStore } from "src/kitDocs/lib/stores";
    import SearchDocs from "src/kitDocs/components/SearchDocs.svelte";
    import MainNav from "src/kitDocs/components/nav/MainNav.svelte";
    import SideNav from "src/kitDocs/components/SideNav.svelte";
    import OnPageLinks from "src/kitDocs/components/OnPageLinks.svelte";
    import PageNav from "src/kitDocs/components/PageNav.svelte";
    import Footer from "src/kitDocs/components/Footer.svelte";
    import { onMount } from "svelte";
    import { onNavigate } from "$app/navigation";
    // variables ===============
    let theme:string = ""
    const hide = true // set to true to hide side nav
    let appElement:HTMLDivElement
    // get theme mode
    onMount(()=>{
        const localTheme = localStorage.getItem("theme")
        theme = localTheme || "dark"
        // update app store
        appStore.update(data=>{ data['theme']=theme ; return data }) 
    })

    /** Change current theme color */
    async function changeTheme() {
        const localTheme = localStorage.getItem("theme")
        const newTheme = ( localTheme && localTheme==="dark" ) ? "light" : "dark"
        // update local storage theme
        localStorage.setItem("theme",newTheme)
        // update app store
        appStore.update(data=>{ data['theme']=newTheme ; return data }) 
        // update theme
        theme = newTheme
    }
    // Track scrollY position
	function handleScroll() {
        appStore.update(data=>{ data.scrollY=appElement.scrollTop ; return data }) 
	}

    /** Scroll up when click on a link */
    onNavigate(data=>{
        if(data.from?.url=== data.to?.url) return
        // scroll up
        appElement.scrollTo({ top: 0, behavior: 'smooth' });
    })
    // set mete tags ==========
    $: url = $page.url.href
    $: appName = $metaTagsStore.appName
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : "/favicon.png"
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" 
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | svelteKit docs builder`
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"Create documentation websites rapidly using SvelteKit." 
    $: image = $metaTagsStore.image ? $metaTagsStore.image: "/favicon.png"
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

<div class="app" class:dark={theme==="dark"} bind:this={appElement} on:scroll={handleScroll}>
<SearchDocs />
    <MainNav on:changeTheme={changeTheme}/>
    {#if hide}
        <main data-sb="main">
            <slot />
        </main>
    {:else}
        <div class="content">
            <SideNav />
            <main data-sb="main">
                <slot />
                <PageNav />
                <Footer />
            </main>
            <OnPageLinks />
        </div>
    {/if}
</div>

<style>
    .app{
        display: flex;
        flex-direction: column;
        background: var(--background);
        color: var(--text-color);
        height: 100vh;
        overflow-y: auto;
    }
    .content{
        max-width: var(--max-width);
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    main{
        flex: 1;
        padding: 20px 0;
    }
    /* on mobile */
    @media(max-width:700px){
        .content{
            flex-direction: column-reverse;
            gap: 10px;
        }
    }
</style>