<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Logo";data.description="A svelte component that render your logo into the top navigation."; return data })
    // custom code ===================

    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }
</script>

<h1 data-sb="header" id="logo">
    Logo
</h1>
<p data-sb="p">A svelte component that render your logo into the top navigation, it can be found and edit at <code data-sb="inline-code">/kitDocs/Logo.svelte</code>, 
any changes made to this component will stay like that even after running the update command.</p>