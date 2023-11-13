<script lang="ts">
    export let open:boolean
    // click modal container to close it with animation
    export let modalDiv:HTMLDivElement|undefined = undefined
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    let closed:boolean = false
    /** custom style */
    let style = `--maxHeight:95vh ; --maxWidth:500px ; --height:auto ; --padding:10px`
    /** Wait 400 milliseconds and close modal after */
    const closeFunc = ()=>{ closed=true; setTimeout(()=>{ closed=false;open=false;dispatch("close") },400) }
    /** Handle click on modal */
    function onModalClick(e:MouseEvent,close?:boolean){
        // Close modal
        if(close){ closeFunc() ; return }
        // Click modal if modal is clicked
        const targetElement = e.target as HTMLDivElement
        const closeModal = "data-modal" in targetElement.attributes
        if(closeModal) closeFunc() 
    }
</script>

{#if open}
    <div class="modal" bind:this={modalDiv} {style} class:closed data-modal on:click={onModalClick} role="none">
        <div class="content">
            <slot />
        </div>
    </div>
{/if}

<style>
    .modal{
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.2);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        animation: onOpenModal 0.3s;
        top: 0;
        left: 0;
        z-index: 10;
        padding: var(--padding);
    }
    .content{
        max-width: var(--maxWidth);
        max-height: var(--maxHeight);
        height: var(--height);
        overflow-y: scroll;
        width: 100%;
        /* transition */
        transition: transform ease 0.2s;
        animation: onOpenContent 0.2s;
    }
    .content::-webkit-scrollbar{ display: none; }
    .modal.closed{
        animation: onClosedModal 0.4s;
    }
    .modal.closed > .content{
        transform: scale(0.0);
    }    
    @keyframes onOpenContent{
        from{ transform: scale(0.0); }
        to{ transform: scale(1) }
    }
    @keyframes onOpenModal{
        from{ opacity: 0%; }
        to{ opacity: 100%; }
    }
    @keyframes onClosedModal{
        from{ opacity: 100%; }
        to{ opacity: 0%; }
    }
</style>