#! /usr/bin/env node
import fs from "fs-extra"
import path from "path"
import { exec } from "child_process"
import * as clack from "@clack/prompts"
import { create } from 'create-svelte';
import utils from "./utils.js"

// Scrip info
const SCRIPT = {
    isNewInstall: fs.existsSync(`${process.cwd()}/src/kitDocs`)===false,
    packageManager:"",
    projectName: "",
    dependencies:[ "globby","shiki","marked" ],
    paths:{
        project: process.cwd(),
        package: path.dirname(new URL(import.meta.url).pathname),
    }
}

// show package path
if(process.argv.find(data=>data.includes("--dev"))) clack.log.info(SCRIPT.paths.package)

// Welcome
clack.intro("Welcome")
const loader = clack.spinner()


/** Cancel script @param { any } action @param { boolean } force */
function isCancel(action,force=false){
    if(clack.isCancel(action) || force){
        clack.cancel("Script stopped")
        process.exit(1)
    }
}

/** Select project name */
async function askProjectName(){
    const action = await clack.text({ message:"What is your project name? Example: testApp"})
    isCancel(action, !action)
    // @ts-ignore set project name and path
    SCRIPT.projectName = action
    SCRIPT['paths']['project'] = `${SCRIPT.paths.project}/${SCRIPT.projectName}`
    // check if it's new install
    SCRIPT['isNewInstall'] = ! fs.existsSync(SCRIPT.paths.project)
}

/** Select node package manager */
async function selectPackageManager(){
    const action = await clack.select({
        message:"What package manager are you using?",
        options: [
            { label: "PNPM",value:"pnpm" },
            { label: "NPM",value:"npm" },
            { label: "BUN",value:"bun" },
        ]
    })
    // If user cancel script
    isCancel(action)
    // set data
    SCRIPT['packageManager'] = action
}

/** Make sure user confirm kitDocs folder will be overwritten */
async function confirmOverwritten(){
    clack.log.warning("These folders will be overwritten:\n  src/kitDocs\n  src/routes/(docs)/")
    const action = await clack.confirm({ message:"Continue?" })
    // If user cancel script
    isCancel(action,action===false)
}

/** Handle temp folder and files @param {boolean} stepTwo delete temp folder only*/
async function handleTempFiles(stepTwo=false){
    const tempFolderPath = `${SCRIPT.paths.project}/kitDocsTemp/`
    const projectStylePath = `${SCRIPT.paths.project}/src/kitDocs/style.css`
    const projectAppJsonPath = `${SCRIPT.paths.project}/src/kitDocs/app.json`
    const projectLogoPath = `${SCRIPT.paths.project}/src/kitDocs/Logo.svelte`
    // delete temp folder only and stop function
    if(stepTwo){
        // copy copies back
        fs.copyFileSync(`${tempFolderPath}/style.css`,projectStylePath)
        fs.copyFileSync(`${tempFolderPath}/app.json`,projectAppJsonPath)
        fs.copyFileSync(`${tempFolderPath}/Logo.svelte`,projectLogoPath)
        // delete temp folder
        if(fs.existsSync(tempFolderPath)) fs.rmSync(tempFolderPath,{ recursive: true })
        return
    }
    // make temp folder
    if(!fs.existsSync(tempFolderPath)) fs.mkdirSync(tempFolderPath)
    // make copies
    fs.copyFileSync(projectStylePath,`${tempFolderPath}/style.css`)
    fs.copyFileSync(projectAppJsonPath,`${tempFolderPath}/app.json`)
    fs.copyFileSync(projectLogoPath,`${tempFolderPath}/Logo.svelte`)
}

/** Delete and make a new copy of kitDocs */
async function handleKitDocsFolder(){
    const projectKitDocsPath = `${SCRIPT.paths.project}/src/kitDocs`
    const packageKitDocsPath = `${SCRIPT.paths.package}/assets/kitDocs`
    // delete old kitDocs (src/kitDocs) folder and copy a new one
    if(fs.existsSync(projectKitDocsPath)) fs.rmSync(projectKitDocsPath,{ recursive: true })
    fs.copySync(packageKitDocsPath,projectKitDocsPath)
}

/** Handle routes folder */
async function handleRoutesFolder(){
    const projectRoutesPath = `${SCRIPT.paths.project}/src/routes`
    const packageRoutesPath = `${SCRIPT.paths.package}/assets/routes`
    const projectDocsPath = `${SCRIPT.paths.project}/src/routes/(docs)`
    const packageDocsPath = `${SCRIPT.paths.package}/assets/routes/(docs)`
    // delete routes folder and copy routes folder from assets
    if(SCRIPT.isNewInstall) {
        if(fs.existsSync(projectRoutesPath)) fs.rmSync(projectRoutesPath,{ recursive: true })
        fs.copySync(packageRoutesPath,projectRoutesPath)
    }
    // else just remove src/routes/(docs) and copy a new copy
    else{
        if(fs.existsSync(`${projectDocsPath}/+layout.server.ts`)) fs.removeSync(`${projectDocsPath}/+layout.server.ts`)
        if(fs.existsSync(`${projectDocsPath}/+layout@.svelte`)) fs.removeSync(`${projectDocsPath}/+layout@.svelte`)
        if(fs.existsSync(`${projectDocsPath}/docs/api/`)) fs.rmSync(`${projectDocsPath}/docs/api/`,{ recursive: true })
        // copy new ones
        fs.copyFileSync(`${packageDocsPath}/+layout.server.ts`,`${projectDocsPath}/+layout.server.ts`)
        fs.copyFileSync(`${packageDocsPath}/+layout@.svelte`,`${projectDocsPath}/+layout@.svelte`)
        fs.copySync(`${packageDocsPath}/docs/api/`,`${projectDocsPath}/docs/api/`)
    }
}

/** Install needed dependencies */
async function handleDependencies(){
    const command = `${SCRIPT.packageManager} ${SCRIPT.packageManager==="pnpm" ? "add" : "install"} ${SCRIPT.dependencies.join(" ")}`
    // run command
    loader.start("Installing dependencies")
    return new Promise(resolve=>{
        exec(`cd ${SCRIPT.paths.project} && ${command}`).addListener("close",()=>{
            loader.stop("Dependencies installed")
            resolve(true)
            // bye message
            if(SCRIPT.isNewInstall){
                clack.log.success("KitDocs installed")
                clack.log.info(`cd ${SCRIPT.paths.project}`)
                clack.log.info("Follow the installing guide at: https://kitdocs.dev/docs/installation")
            }else{
                clack.log.success("KitDocs updated")
            }
        })
    })
}

/** Create default folder and files */
async function createDefaults(){
    const pagesPath = `${SCRIPT.paths.project}/pages`
    // create pages folder and index.md file
    if(!fs.existsSync(pagesPath)){
        fs.mkdirSync(pagesPath)
        fs.writeFileSync(`${pagesPath}/[1]index.md`,utils.defaults.indexPage)
    }
}

/** Update vite and svelte config files */
async function updateConfigFiles(){
    const SVELTE_CONFIG_PATH = `${SCRIPT.paths.project}/svelte.config.js`
    const VITE_CONFIG_PATH = `${SCRIPT.paths.project}/vite.config.ts`
    let svelteConfigData = fs.readFileSync(SVELTE_CONFIG_PATH).toString()
    let viteConfigData = fs.readFileSync(VITE_CONFIG_PATH).toString()
    // update files
    svelteConfigData = svelteConfigData.replace('adapter()','adapter(),\n		alias:{ kitDocs:"src/kitDocs/*" }')
    viteConfigData = "import MdPlugin from './src/kitDocs/lib/plugin';\n"+viteConfigData.replace('[sveltekit()]','[sveltekit(),MdPlugin()]')
    // save files
    fs.writeFileSync(SVELTE_CONFIG_PATH,svelteConfigData)
    fs.writeFileSync(VITE_CONFIG_PATH,viteConfigData)
}

// RUN =======================================
if(SCRIPT.isNewInstall===false){
    clack.log.warn("Looks like you already have kitDocs installed")
    const action = await clack.confirm({ message:"Run update?"})
    isCancel(action)
    // if user picked no, ask for project name
    if(!action) await askProjectName()
}
else await askProjectName()
await selectPackageManager()
// console.log(SCRIPT)

// new install
if(SCRIPT.isNewInstall){
    clack.intro("Installing")
    // create svelte kit project
    await create(SCRIPT.paths.project, {
        name: SCRIPT.projectName,
        template: 'skeleton',
        types: 'typescript',
        prettier: false,
        eslint: false,
        playwright: false,
        vitest: false
    });
    // update config files
    await updateConfigFiles()
    // copy kitDocs folder
    await handleKitDocsFolder()
    // copy routes folder
    await handleRoutesFolder()
    // create default pages folder
    await createDefaults()
    // handle dependencies
    await handleDependencies()
}

// update
else{
    clack.intro("Updating")
    await confirmOverwritten()
    // make temp folder and copies
    await handleTempFiles()
    // copy kitDocs folder
    await handleKitDocsFolder()
    // remove temp folder and copies
    await handleTempFiles(true)
    // copy routes folder
    await handleRoutesFolder()
    // handle dependencies
    await handleDependencies()
}