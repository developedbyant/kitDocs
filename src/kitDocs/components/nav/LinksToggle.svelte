<script lang="ts">
    import { appStore } from "src/kitDocs/lib/stores";
    /** Open or close nav links */
    const openNave = ()=> appStore.update(data=>{
        data['navIsOpen'] = !data['navIsOpen'] ; return data
    })
</script>

<button class="btn" class:open={$appStore.navIsOpen} on:click={openNave}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
        <path d="m9 18 6-6-6-6"/>
    </svg>
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
    }
    .btn svg{ stroke: var(--nav-icon-color); }
    /* on hover */
    .btn:hover{ opacity: 80%; }
    /* when nav is open */
    .btn.open{ transform: rotate(180deg); }
    /* mobile */
    @media(max-width:700px){
        .btn{ display: flex; }
    }
</style>