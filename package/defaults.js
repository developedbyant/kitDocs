import path from "path"
const CWD = process.cwd()

export default new class {

    TESTING = false

    /** @type {import("./types").ScriptInfo} Script information */
    scriptInfo = {
        packageManager:"",
        projectName: "",
        dependencies:[ "globby","shiki","marked" ],
        /** @type {import("./types").Action} what action to run */
        action:"create",
        paths:{
            // when testing remove test since we don't know the project path
            cwd: this.TESTING ? `${CWD}/test` : CWD,
            package: path.dirname(new URL(import.meta.url).pathname),
        }
    }

    /** Default appData for src/kitDocs/app.json */
    appData = {
        "packageManager":"pnpm",
        "projectName":"kitDocs",
        "navLinks": [ { "text": "Home", "href": "/", "external": false },{ "text": "Documentation", "href": "/docs", "external": false } ],
        "socialMedias": {
            "twitter": "https://twitter.com/developedbyant",
            "github": "https://github.com/developedbyant/kitdocs"
        },
        "footer":{
            "links":[
                {
                    "title":"Resources",
                    "links":[
                        {
                            "text": "Home",
                            "href": "/",
                            "external": false
                        },
                        {
                            "text": "Svelte",
                            "href": "https://svelte.dev/",
                            "external": true
                        }
                    ]
                }
            ]
        },
        "kitDocs": {}
    }

    /** Alias needed after install */
    alias = `alias:{ kitDocs:"src/kitDocs/*" }`

    viteConfig = `
    import MdPlugin from './src/kitDocs/lib/plugin';
    import { sveltekit } from '@sveltejs/kit/vite';
    import { defineConfig } from 'vite';
    export default defineConfig({
        plugins: [sveltekit(),MdPlugin()]
    });`

    /** Default markdown page for pages/index.md */
    indexPage = `---\nlayout: Introduction\ntitle: Introduction\ndescription: Welcome to kitDocs\n---\n# Welcome`
    /** Default svelte docs page for routes/(docs)/docs/+page.svelte */
    svelteIndexPage = `<script lang="ts">
        import { metaTagsStore } from "kitDocs/lib/stores";
        // set meta data
        metaTagsStore.update(data=>{ data.title="Introduction";data.description="Welcome to kitDocs"; return data })
        import Header from 'kitDocs/components/Header.svelte';
    </script>

    <Header type="h1" id="welcome">
        Welcome
    </Header>`
}