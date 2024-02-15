<script lang="ts">

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

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>CoreFiles | KitDocs</title>
    <meta name="title" content="CoreFiles | KitDocs" />
    <meta name="description" content="The most important files that makes kitDocs function." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://kitdocs.dev/docs/core/" />
    <meta property="og:title" content="CoreFiles | KitDocs" />
    <meta property="og:description" content="The most important files that makes kitDocs function." />
    <meta property="og:image" content="https://kitdocs.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://kitdocs.dev/docs/core/" />
    <meta property="twitter:title" content="CoreFiles | KitDocs" />
    <meta property="twitter:description" content="The most important files that makes kitDocs function." />
    <meta property="twitter:image" content="https://kitdocs.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="core-files">
    Core files
</h1>
<p data-md="p">After installing kitDocs you will see some folder and files that were created by us, these files helps use 
keep track of any changes to your project, help us generate links for your side nav and other necessary stuff for kitDocs to work.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="added-folders">
    Added folders
</h2>
<p data-md="p">After installation we add 2 folders to your project.</p>
<ul data-md="list">
    <li>kitDocs : main folder where we add all thing related to kitDocs</li>
    <li>(docs) : where all generated pages will live</li>
</ul>
<div data-md="space"></div>
<h2 data-section data-md="header" id="kitdocs">
    KitDocs
</h2>
<p data-md="p">KitDocs folder located on <code data-md="inline-code">src/kitDocs</code> contains all components for the website, TypeScript files and app folder.</p>
<ul data-md="list">
    <li>App folder contains logo,app data, css and all the files that you can edit.</li>
    <li>Components : components for kitDocs, it should not be touched.</li>
    <li>Lib : all TypeScrip files for kitDocs, it should not be touched.</li>
</ul>
<div data-md="space"></div>
<h2 data-section data-md="header" id="app-folder">
    App folder
</h2>
<p data-md="p">Any file inside the app folder can be edited, it contains <code data-md="inline-code">Logo.svelte</code> the component that will be showing on top nav of kitDocs, 
<code data-md="inline-code">app.json</code> the file that keep track of all generated links, social medias links and more information about your project, 
<code data-md="inline-code">global.css</code> your global app style, <code data-md="inline-code">tags.css</code> (may be updated if needed) it contains all styles for components/tags showing in generated pages, 
and <code data-md="inline-code">variables.css</code> all css variables for kitDocs, it contains size,color,background and more css variables.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="docs">
    Docs
</h2>
<p data-md="p">The <code data-md="inline-code">src/routes/(docs)</code> folder contains all generated pages, that were converted from <code data-md="inline-code">pages</code> folder, 
you should not touch this folder since it will be auto generated when ever any changes are made inside pages folder.</p>
