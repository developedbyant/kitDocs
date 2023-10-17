<script lang="ts">
    import { appStore } from "kitDocs/stores";
    import Modal from "./Modal.svelte";
    import appData from "../../app.json"
    let modalDiv:HTMLDivElement
    let value:string = ""
    let result:{title:string,href:string}[] = []
    $: docLinks = Object.values(appData.kitDocs).flatMap(data => data.map(item => ({ title: item.title, href: item.href }))).slice(0,10)
    /** search generated docs */
    function search(e:KeyboardEvent){
        const links = Object.values(appData.kitDocs).flatMap(data => data.map(item => ({ title: item.title, href: item.href })))
        const searchResult = links.filter(data=>data.href.match(new RegExp(value,"ig")))
        if(searchResult){
            result = searchResult.map(data=>{
                return { title:data.title.replace(new RegExp(value, 'gi'), '<span style="color:var(--main-color)">$&</span>'),href:data.href }
            })
        }else result = []
    }

    /** reset all stages */
    function resetAll(){
        value = ""
        result = []
        // click modal container to close it with animation
        if(modalDiv) modalDiv.click()
    }
</script>

<Modal bind:modalDiv bind:open={$appStore.searchIsOpen} on:close={resetAll}>
    <div class="searchWrap">
        <div class="search">
            <svg class="searchSvg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <!-- svelte-ignore a11y-autofocus -->
            <input bind:value type="text" autofocus placeholder="search..." on:keyup={search}>
        </div>
        <div class="content">
            {#if result.length>0}
                <ul class="links">
                    {#each result as link (link.href)}
                        <a href={link.href} class="link" on:click={resetAll}>{@html link.title}</a>  
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16">
                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    <p>No results found, try another input</p>
                </div>
            {/if}
        </div>
    </div>
</Modal>

<style>
    .searchWrap{
        background-color: var(--app-fb);
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
    .searchSvg{
        width: 20px;
        height: 20px;
        fill: var(--icon-color);
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
    .noResult svg{
        fill: var(--icon-color);
        width: 20px;
        height: 20px;
    }
</style>