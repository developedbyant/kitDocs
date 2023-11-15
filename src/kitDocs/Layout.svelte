<script lang="ts">
    export let theme:string = "light"
    /** remove all layout only keeping the top nav */
    export let hide:boolean = false
    import "kitDocs/globals.css"
    import "kitDocs/variables.css"
    import { appStore } from "kitDocs/lib/stores";
    import apiRequest from "kitDocs/lib/api";
    import SearchDocs from "./comps/SearchDocs.svelte";
    import MainNav from "kitDocs/comps/nav/MainNav.svelte";
    import SideNav from "kitDocs/comps/SideNav.svelte";
    import OnPageLinks from "./comps/OnPageLinks.svelte";
    import PageNav from "./comps/PageNav.svelte";
    import Footer from "./comps/Footer.svelte";

    /** Change current theme color */
    async function changeTheme() {
        // update app store
        appStore.update(data=>{ data['theme']=data['theme']==="dark"?"light":"dark" ; return data }) 
        // send api request to update theme cookie
        const apiRes = await apiRequest("/api/setTheme",null)
        // update theme
        theme = apiRes.data.theme
    }

    // Track scrollY position
    let appElement:HTMLDivElement
	function handleScroll() {
        appStore.update(data=>{ data.scrollY=appElement.scrollTop ; return data }) 
	}
</script>

<div class="app" class:dark={theme==="dark"} bind:this={appElement} on:scroll={handleScroll}>
<SearchDocs />
    <MainNav {hide} on:changeTheme={changeTheme}/>
    {#if hide}
        <main>
            <slot />
        </main>
    {:else}
        <div class="content">
            <SideNav />
            <main>
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
        margin: auto;
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