<script lang="ts">
    export let code:string
    // icons
    import ClipboardIcon from "kitDocs/icons/Clipboard.svelte"
    import ClipboardFillIcon from "kitDocs/icons/ClipboardFill.svelte"
    let copied:boolean = false
    /** Copy text to clipboard */
    async function copyText(){
        copied = true
        await navigator.clipboard.writeText(code)
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copied=false,500)
    }
</script>

<code on:click={copyText} role="none">
    {code}
    <button>
        {#if copied}<ClipboardFillIcon size=14/>{:else}<ClipboardIcon size=14/>{/if}
    </button>
</code>

<style>
    code{
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 5px;
        cursor: pointer;
        background-color: var(--code-bg);
        color: var(--code-text-color);
        font-size: 13px;
        font-weight: 400;
        padding: 3px 6px;
        border-radius: 5px;
    }
    button{
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--code-text-color);
    }
</style>