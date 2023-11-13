<script lang="ts">
    export let activeID:string = ""
    import { page } from "$app/stores";
    import { appStore } from "kitDocs/lib/stores";
    import appData from "kitDocs/app.json"
    import Icon from "kitDocs/icons/UpDown.svelte";
    let linksOpen:boolean = false
    $: links = Object.values(appData.kitDocs).flatMap(data => data.map(item => item))
    $: currentData = links.find(data=>data.href===$page.url.pathname)
    $: pageLinks = currentData ? currentData.pageLinks : []
    $: scrollY = $appStore.scrollY

    // Run this code when scrollY have been set
    $: if(scrollY!==0){
        const sections = document.querySelectorAll('[data-section]') as NodeListOf<HTMLDivElement>
        sections.forEach(section=>{
            if(scrollY >= (section.offsetTop-80)) activeID = section.id
        })
    }
    const openLinks = ()=> linksOpen=!linksOpen
</script>

<div class="onThisPage">
    <span class="title" on:click={openLinks} role="none">
        On this page
        <div class="icon">
            <Icon />
        </div>
    </span>
    <ul class="links" class:linksOpen>
        {#each pageLinks as link}
        {@const active = activeID.toLowerCase().trim()===link.id}
            <a href="#{link.id}" class="link" class:active data-section-id on:click={openLinks}>
                {link.text}
            </a>
        {/each}
    </ul>
</div>

<style>
    .onThisPage{
        padding: 10px 0 0 0;
        width: fit-content;
        position: sticky;
        height: calc(100vh - var(--nav-height));
        left: 0;
        top: var(--nav-height);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .title{
        cursor: pointer;
        color: var(--header-color);
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        stroke: var(--icon-color);
        width: 25px;
        height: 25px;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .link{
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
        color: var(--text-color);
        padding: 2px 6px;
        border-radius: 5px;
        border: 1px solid transparent;
    }
    .link.active{
        background: var(--foreground);
        border: 1px solid var(--main-color);
    }
    /* on mobile */
    @media(max-width:700px){
        .onThisPage{
            height: fit-content;
            width: 100%;
            border-radius: 5px;
            border: 2px solid var(--border-color);
            background: var(--foreground);
            padding: 5px 10px;
            gap: 0px;
            top: calc(var(--nav-height) + 5px);
        }
        .links{
            overflow: hidden;
            transition: all 0.4s ease-in-out;
            max-height: 0px;
            min-height: 0px;
        }
        .linksOpen{
            margin-top: 10px;
            min-height: 100%;
            max-height: 100%;
        }
    }
</style>