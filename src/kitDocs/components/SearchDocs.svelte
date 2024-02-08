<script lang="ts">
    import { appStore } from "src/kitDocs/lib/stores";
    import Modal from "./Modal.svelte";
    import appData from "src/kitDocs/app/app.json"
    let modalDiv:HTMLDivElement
    let value:string = ""
    let result:{title:string,href:string,description:string}[] = []
    $: docLinks = Object.values(appData.kitDocs).flatMap(data => data.map(item => ({ title: item.title, href: item.href }))).slice(0,4)
    /** search generated docs */
    function search(e:KeyboardEvent){
        const links = Object.values(appData.kitDocs).flatMap(data => data.map(item => ({ title: item.title, href: item.href, description: item.description })))
        const searchResult = links.filter(data=>data.href.match(new RegExp(value,"ig"))||data.title.match(new RegExp(value,"ig"))||data.description.match(new RegExp(value,"ig")))
        if(searchResult){
            result = searchResult.map(data=>{
                return {
                    title:data.title.replace(new RegExp(value, 'gi'), '<span style="color:var(--main-color)">$&</span>'),
                    description:data.description.replace(new RegExp(value, 'gi'), '<span style="color:var(--main-color)">$&</span>'),
                    href:data.href
                }
            })
        }else result = []
    }

    /** reset all stages */
    function resetAll(){
        value = ""
        result = []
        // click modal container to close it with animation
        if(modalDiv) modalDiv.click()
        // close side nav
        appStore.update(data=>{
            data['sideNavIsOpen'] = false ; return data
        })
    }
</script>

<Modal bind:modalDiv bind:open={$appStore.searchIsOpen} on:close={resetAll}>
    <div class="searchWrap">
        <div class="search">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </div>
            <!-- svelte-ignore a11y-autofocus -->
            <input bind:value type="text" autofocus placeholder="search..." on:keyup={search}>
        </div>
        <div class="content">
            {#if result.length>0}
                <ul class="links">
                    {#each result as link (link.href)}
                        <a href={link.href} class="link" on:click={resetAll}>
                            <p class="title">{@html link.title}</p>
                            <p class="desc">{@html link.description}</p>
                        </a>
                    {/each}
                </ul>
            {:else if result.length===0 && value.trim()===""}
                <ul class="links">
                    {#each docLinks as link (link.href)}
                        <a href={link.href} class="link" on:click={resetAll}>{link.title}</a>  
                    {/each}
                </ul>
            {:else}
                <div class="noResult">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m7 15 5 5 5-5" />
                            <path d="m7 9 5-5 5 5" />
                        </svg>
                    </div>
                    <p>No results found, try another input</p>
                </div>
            {/if}
        </div>
    </div>
</Modal>

<style>
    .searchWrap{
        background: var(--background);
        border: 2px solid var(--border-color);
        border-radius: 10px;
    }
    .search{
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 2px solid var(--border-color);
        padding: 10px;
    }
    .icon{
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        stroke: var(--icon-color);
    }
    .search input{
        border: none;
        width: 100%;
        background-color: transparent;
        padding: 5px 0;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
    }
    .search input:focus{
        outline: none;
    }
    .content{
        padding: 10px;
        font-size: 15px;
        font-weight: 300;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .link{
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
        color: var(--text-color);
        padding: 5px;
        border-radius: 5px;
    }
    .link:hover{
        background-color: var(--app-bg);
    }
    .desc{
        font-size: 13px;
        font-weight: 200;
    }
    .noResult{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        padding: 10px;
        font-size: 15px;
        font-weight: 300;
    }
</style>