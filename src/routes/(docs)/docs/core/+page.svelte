<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Files";data.description="The most important files that makes kitDocs function."; return data })
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

<h1 data-sb="header" id="core-files">
    Core files
</h1>
<p data-sb="p">KitDocs uses create some files that are use to make sure your app work as it should be, file like <code data-sb="inline-code">kitDocs/app.json</code> helps us keep track 
of your generated links and other info about your app, <code data-sb="inline-code">kitDocs/Logo.svelte</code> can be edit by you and we will not remove it when updating, 
<code data-sb="inline-code">kitDocs/style.css</code> styles kitDocs so any changes you want to make to your project can be done there.</p>