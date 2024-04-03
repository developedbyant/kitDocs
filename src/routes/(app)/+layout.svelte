<script lang="ts">
    export let data:LayoutData
    import type { LayoutData } from "./$types";
    import "src/kitDocs/app/styles/app.css"
    import "src/kitDocs/app/styles/docs.css"
    import "src/kitDocs/app/styles/md.css"
    import { appStore } from "src/kitDocs/lib/stores";
    import apiRequest from "src/kitDocs/lib/api";
    import SearchDocs from "src/kitDocs/components/SearchDocs.svelte";
    import MainNav from "src/kitDocs/components/nav/MainNav.svelte";
    import SideNav from "src/kitDocs/components/SideNav.svelte";
    import OnPageLinks from "src/kitDocs/components/OnPageLinks.svelte";
    import PageNav from "src/kitDocs/components/PageNav.svelte";
    import Footer from "src/kitDocs/components/Footer.svelte";
    import { onNavigate } from "$app/navigation";
    // variables ===============
    const hide = true // set to true to hide side nav
    let appElement:HTMLDivElement
    let theme = data.theme

    /** Change current theme color */
    async function changeTheme() {
        const response = await apiRequest("/docs/api/set-theme",undefined)
        const newTheme = response.data.theme
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
</script>

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