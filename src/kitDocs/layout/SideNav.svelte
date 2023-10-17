<script lang="ts">
    import { page } from "$app/stores";
    import { appStore } from "kitDocs/stores";
    import appData from "../../app.json"
    const capitalize = (data:string) => data.charAt(0).toUpperCase()+data.slice(1)

    /** Close side nav on mobile */
    const closeSideNav = (e:any)=>{
        if(e.target.classList) appStore.update(data=>{ data['sideNavIsOpen']=false ; return data})
    }

    $: open = $appStore.sideNavIsOpen
</script>

<aside class="sideNav" class:open on:click={closeSideNav} role="none">
    <ul class="links">
        {#each Object.entries(appData.kitDocs) as [title,links]}
        <div class="linkWrap">
            <span class="title">{capitalize(title)}</span>
            <ul class="subLinks">
                {#each links as link}
                    <li><a href={link.href} class="subLink" class:active={link.href===$page.url.pathname}>{capitalize(link.title)}</a></li>
                {/each}
            </ul>
        </div>
        {/each}
    </ul>
</aside>

<style>
    aside{
        position: sticky;
        left: 0;
        top: 0;
        overflow-y: scroll;
        min-width: fit-content;
    }
    aside::-webkit-scrollbar{
        display: none;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .linkWrap{
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
        overflow: hidden;
    }
    .title{
        font-size: 20px;
        font-weight: 600;
        color: var(--header-color);
    }
    .title::after{
        background-color: var(--border-color);
        position: absolute;
        content: "";
        left: 0;
        height: 100%;
        top: 30px;
        width: 2px;
        border-radius: 10px;
    }
    .subLinks{
        list-style: none;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .subLink{
        text-decoration: none;
        font-size: 17px;
        font-weight: 600;
        color: var(--nav-link-color);
        transition: color ease-in-out 0.3s;
    }
 
    .subLink{
        font-size: 15px;
        font-weight: 400;
    }
    .subLink.active{
        color: var(--main-color);
    }
    /* on mobile */
    @media(max-width:700px){
        aside{
            position: fixed;
            top: 0;
            z-index: 10;
            background-color: rgba(0,0,0,20%);
            width: 100%;
            height: 100vh;
            /* transition */
            transition: all ease-in-out 0.5s;
            display: none;
            opacity: 0%;
        }
        .links{
            padding: 15px;
            background-color: var(--app-bg);
            width: fit-content;
            height: 100vh;
            border-right: 1.5px solid var(--border-color);
            /* transition */
            transition: all ease-in-out 0.5s;
            transform: translateX(-100%);
        }
        aside.open{
            display: flex;
            opacity: 100%;
        }
        aside.open > .links{
            transform: translateX(0);
        }
    }
</style>