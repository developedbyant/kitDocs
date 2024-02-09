<script lang="ts">
    import { page } from "$app/stores";
    import { appStore } from "src/kitDocs/lib/stores";
    import docs from "src/kitDocs/app/app.json"
    const sideNavLinks = Object.entries(docs.kitDocs)
    $: open = $appStore.sideNavIsOpen
    /** Close side nav when click link */
    const handleLinkClick = ()=>{
        // close nav
        appStore.update(data=>{ data['sideNavIsOpen']=false ; return data })
    }
</script>

<aside class="sideNav" class:open>
    {#each sideNavLinks as [title,links]}
        <div class="sideNavBlock">
            <span class="sideNavLinkTitle">
                { title }
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </span>
            <ul class="sideNavLinks">
                {#each links as link}
                {@const active = link.href===$page.url.pathname}
                    <li class="sideNavLink" on:click={handleLinkClick} role="none">
                        <a class:active href={link.href}>{ link.title }</a>
                        {#if link.new}
                            <div class="badge">New</div>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</aside>

<style>
    .sideNav{
        padding: 20px 30px 0 0;
        position: sticky;
        height: calc(100vh - var(--nav-height));
        left: 0;
        top: var(--nav-height);
        border-right: 1.5px solid var(--border-color);
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: auto;
        min-width: fit-content;
    }
    .sideNavBlock{
        display: flex;
        flex-direction: column;
        list-style: inside;
        gap: 10px;
    }
    .sideNavLinks{
        display: flex;
        flex-direction: column;
        list-style: inside;
        gap: 10px;
        margin-left: 10px;
    }
    .sideNavLinkTitle{
        cursor: pointer;
        color: var(--nav-header-color);
        font-size: 17px;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .sideNavLinkTitle svg{
        width: 25px;
        height: 25px;
        stroke-width: 1.5px;
        stroke: var(--nav-icon-color);
    }
    .sideNavLink{
        font-size: 15px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 2px;
    }
    .sideNavLink a{
        text-decoration: none;
        color: var(--nav-link-color)
    }
    .sideNavLink .badge{
        padding: 4px 7px;
        font-size: 10px;
        font-weight: 300;
        background: var(--second-color);
        color: var(--button-color);
        border-radius: 50px;
    }
    .sideNavLink .active,.sideNavLink:hover > a{
        color: var(--nav-active-link-color);
    }

    /* mobile */
    @media(max-width:700px){
        .sideNav{
            position: fixed;
            width: 100%;
            background-color: var(--blur-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            z-index: 1;
            padding: 20px;
            transition: transform 0.2s ease-in-out;
            transform: translateX(-100%);
        }
        .sideNav.open{
            transform: translateX(0%);
        }
    }
</style>