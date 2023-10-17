<script lang="ts">
    import ClipboardIcon from "kitDocs/icons/Clipboard.svelte"
    import ClipboardFillIcon from "kitDocs/icons/ClipboardFill.svelte"
    let button:HTMLButtonElement
    let copied:boolean = false
    /** Copy text to clipboard */
    async function copyText(){
        copied = true
        const code = button.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copied=false,500)
    }
</script>

<div class="code">
    <button bind:this={button} on:click={copyText}>
        {#if copied}<ClipboardFillIcon size=12/>{:else}<ClipboardIcon size=12/>{/if}
    </button>
    <slot />
</div>

<style>
    .code{
        position: relative;
        margin: 5px 0;
    }
    button{
        all: unset;
        cursor: pointer;
        background-color: var(--app-bg);
        padding: 5px 4px;
        border: 1px solid var(--border-color);
        border-radius: 3px;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--code-text-color);
    }
</style>