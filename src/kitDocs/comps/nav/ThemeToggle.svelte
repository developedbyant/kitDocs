<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { appStore } from "kitDocs/lib/stores";
    import MoonIcon from "kitDocs/icons/Moon.svelte";
    import SunIcon from "kitDocs/icons/Sun.svelte";
    const dispatch = createEventDispatcher()
    $: theme = $appStore.theme
</script>

<button class="btn" aria-label="Change theme color" on:click={()=>dispatch("changeTheme")}>
    {#if theme==="dark"}
        <SunIcon size="100%"/>
    {:else}
        <MoonIcon size="100%"/>
    {/if}
</button>

<style>
    .btn{
        all: unset;
        cursor: pointer;
        width: 35px;
        height: 35px;
        min-width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        & svg{
            stroke: var(--nav-icon-color,red);
        }
    }
    .btn:hover{
        opacity: 80%;
    }
    /* mobile */
    @media(max-width:700px){
        .btn{
            width: 25px;
            height: 25px;
        }
    }
</style>