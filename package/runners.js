import * as clack from "@clack/prompts"
import fs from "fs-extra"
import { create as createSvelte } from 'create-svelte';

import core from "./core.js"
import defaults from "./defaults.js";

export default class Runners{
    /** @param {import("./types").ScriptInfo} scriptInfo */
    constructor(scriptInfo){
        this.scriptInfo = scriptInfo
    }

    /** Create new kitDocs project
     * 1. create svelte kit project
     * 2. copy kitDocs folders
     * 3. create src/kitDocs/app.json file
     * 4. add default values to svelte.config.js and vite.config.ts
     * 5. create default pages dir
     * 6. handle needed dependencies */
    async create(){
        clack.intro("Installing")
        const projectDir = `${this.scriptInfo.paths.cwd}/${this.scriptInfo.projectName}`
        // create svelte kit project
        await createSvelte(projectDir, {
            name: this.scriptInfo.projectName,
            template: 'skeleton',
            types: 'typescript',
            prettier: false,
            eslint: false,
            playwright: false,
            vitest: false
        });
        // remove default +page.svelte create by svelteCreate
        fs.removeSync(`${projectDir}/src/routes/+page.svelte`)

        // Copy kitDocs folders
        const assetsFolder = `${this.scriptInfo.paths.package}/assets`
        // copy kitDocs folder
        fs.copySync(`${assetsFolder}/kitDocs`,`${projectDir}/src/kitDocs`)
        // copy routes folders to src/routes/
        fs.copySync(`${assetsFolder}/routes/(app)`,`${projectDir}/src/routes/(app)`)
        fs.copySync(`${assetsFolder}/routes/(docs)`,`${projectDir}/src/routes/(docs)`)
        

        // create src/kitDocs/app.json
        const appData = defaults.appData
        appData['projectName'] = this.scriptInfo.projectName
        appData['packageManager'] = this.scriptInfo.packageManager
        fs.writeFileSync(`${projectDir}/src/kitDocs/app.json`,JSON.stringify(appData,null,4))

        // add default values to svelte.config.js and vite.config.ts
        const svelteConfigData = fs.readFileSync(`${projectDir}/svelte.config.js`).toString().replace("adapter()",`adapter(),${defaults.alias}`)
        const viteConfigData = defaults.viteConfig
        fs.writeFileSync(`${projectDir}/svelte.config.js`,svelteConfigData)
        fs.writeFileSync(`${projectDir}/vite.config.ts`,viteConfigData)

        // create default pages dir
        const pagesDir = `${projectDir}/pages`
        if(!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir)
        fs.writeFileSync(`${pagesDir}/[1]index.md`,defaults.indexPage)
        // create docs routes
        if(!fs.existsSync(`${projectDir}/src/routes/(docs)/docs/`)) fs.mkdirSync(`${projectDir}/src/routes/(docs)/docs/`)
        fs.writeFileSync(`${projectDir}/src/routes/(docs)/docs/+page.svelte`,defaults.svelteIndexPage)

        // run needed dependencies
        await core.handleDependencies(this.scriptInfo)
    }

    /** Update kitDocs from current project @param {boolean} updateOnly
     * 1. this function run less code when only adding to project
     * 2. if updating make a copy of of style.css,app.json and Logo.svelte and add them back after adding latest kitDocs folder
     * 3. remove old kitDocs folder for the latest one
     * 4. if adding create spp.json with package manager and project name
     * 5. handle dependencies needed */
    async updateInstall(updateOnly=false){
        clack.intro(updateOnly ?"Updating":"Adding")
        const tempFolderDir = `${this.scriptInfo.paths.cwd}/kitDocsTemp`

        // Only run when updating
        if(updateOnly){
            // create temp folder
            if(!fs.existsSync(tempFolderDir)) fs.mkdirSync(tempFolderDir)
            // save a copy of style.css,app.json and Logo.svelte
            fs.copyFileSync(`${this.scriptInfo.paths.cwd}/src/kitDocs/style.css`,`${tempFolderDir}/style.css`)
            fs.copyFileSync(`${this.scriptInfo.paths.cwd}/src/kitDocs/app.json`,`${tempFolderDir}/app.json`)
            fs.copyFileSync(`${this.scriptInfo.paths.cwd}/src/kitDocs/Logo.svelte`,`${tempFolderDir}/Logo.svelte`)
        }

        // Remove folder related to kitDocs and add a new version of them
        // remove kitDocs and (docs) folders
        if(fs.existsSync(`${this.scriptInfo.paths.cwd}/src/kitDocs`)) fs.rmSync(`${this.scriptInfo.paths.cwd}/src/kitDocs`,{ recursive:true })
        // if(fs.existsSync(`${this.scriptInfo.paths.cwd}/src/routes/(docs)`)) fs.rmSync(`${this.scriptInfo.paths.cwd}/src/routes/(docs)`,{ recursive:true })

        const assetsFolder = `${this.scriptInfo.paths.package}/assets`
        // copy kitDocs and src/routes/ folders
        fs.copySync(`${assetsFolder}/kitDocs`,`${this.scriptInfo.paths.cwd}/src/kitDocs`)
        if(!updateOnly) fs.copySync(`${assetsFolder}/routes/(docs)`,`${this.scriptInfo.paths.cwd}/src/routes/(docs)`)

        // Only run when updating
        if(updateOnly){
            // copy files back after adding new version
            fs.copyFileSync(`${tempFolderDir}/style.css`,`${this.scriptInfo.paths.cwd}/src/kitDocs/style.css`)
            fs.copyFileSync(`${tempFolderDir}/app.json`,`${this.scriptInfo.paths.cwd}/src/kitDocs/app.json`)
            fs.copyFileSync(`${tempFolderDir}/Logo.svelte`,`${this.scriptInfo.paths.cwd}/src/kitDocs/Logo.svelte`)
            // remove temp folder
            if(fs.existsSync(tempFolderDir)) fs.rmSync(tempFolderDir,{ recursive:true })
        }

        // create src/kitDocs/app.json
        const appData = defaults.appData
        appData['projectName'] = this.scriptInfo.projectName
        appData['packageManager'] = this.scriptInfo.packageManager
        fs.writeFileSync(`${this.scriptInfo.paths.cwd}/src/kitDocs/app.json`,JSON.stringify(appData,null,4))

        // when adding to project create pages dir
        if(!updateOnly){
            // create default pages dir
            const pagesDir = `${this.scriptInfo.paths.cwd}/pages`
            if(!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir)
            fs.writeFileSync(`${pagesDir}/[1]index.md`,defaults.indexPage)
        }

        // run needed dependencies
        await core.handleDependencies(this.scriptInfo)
    }
}