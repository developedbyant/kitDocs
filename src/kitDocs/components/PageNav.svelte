<script lang="ts">
    import { page } from "$app/stores";
    import appData from "src/kitDocs/app/app.json"
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
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
        background-color: var(--foreground);
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