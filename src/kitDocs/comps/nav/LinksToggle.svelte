<script lang="ts">
    import { appStore } from "kitDocs/lib/stores";
    import ArrowRightIcon from "kitDocs/icons/ArrowRight.svelte";
    /** Open or close nav links */
    const openNave = ()=> appStore.update(data=>{
        data['navIsOpen'] = !data['navIsOpen'] ; return data
    })
</script>

<button class="btn" class:open={$appStore.navIsOpen} on:click={openNave}>
    <ArrowRightIcon />
</button>

<style>
    .btn{
        all: unset;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        min-height: 30px;
        min-width: 30px;
        transition: transform 0.3s ease-in-out;
        & svg{ stroke: var(--nav-icon-color); }
    }
    /* on hover */
    .btn:hover{ opacity: 80%; }
    /* when nav is open */
    .btn.open{ transform: rotate(180deg); }
    /* mobile */
    @media(max-width:700px){
        .btn{ display: flex; }
    }
</style>