<script lang="ts">
    import { page } from "$app/stores";
    import appData from "../../app.json"
    import ArrowLeftIcon from "kitDocs/icons/ArrowLeft.svelte";
    import ArrowRightIcon from "kitDocs/icons/ArrowRight.svelte";
    $: links = Object.values(appData.kitDocs).flatMap(data => data.map(item => ({ title: item.title, href: item.href })))
    $: currentRoute = links.find(link=>link.href===$page.url.pathname)
    $: currLinkIndex = currentRoute ? links.findIndex(data=>data.href===currentRoute?.href) : 0
    $: prevLink = links.length>0 ? links[currLinkIndex-1] : undefined
    $: nextLink = links.length>0 ? links[currLinkIndex+1] : undefined
</script>

{#if currentRoute && (prevLink||nextLink)}
    <ul class="links">
        <div class="linkWrapper">
            {#if prevLink}
                <a href={prevLink.href} class="link">
                    <div class="icon">
                        <ArrowLeftIcon size="100%" />
                    </div>
                    {prevLink.title}
                </a>
            {/if}
        </div>
        <div class="linkWrapper">
            {#if nextLink}
                <a href={nextLink.href} class="link">
                    {nextLink.title}
                    <div class="icon">
                        <ArrowRightIcon size="100%" />
                    </div>
                </a>
            {/if}
        </div>
    </ul>
{/if}


<style>
    .links{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
    }
    .linkWrapper{
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 18px;
        font-weight: 600;
    }
    .link{
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--header-color);
        background-color: var(--app-fb);
        padding: 5px 10px;
        border-radius: 5px;
        border: 1.5px solid var(--border-color);
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        fill: var(--button-color);
        background-color: var(--button-bg);
        border-radius: 50%;
        padding: 5px;
    }
</style>