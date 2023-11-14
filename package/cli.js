#! /usr/bin/env node
import fs from "fs-extra"
import path from "path"
import { execSync } from "child_process"
import * as clack from "@clack/prompts"
import utils from "./utils.js"

const CWD = process.cwd()
const DEPENDENCIES = [ "globby","shiki","marked" ]
const PROJECT_SRC = `${CWD}/test`
const PACKAGE_PATH = path.dirname(new URL(import.meta.url).pathname)
const NEW_INSTALL = fs.existsSync(`${PROJECT_SRC}/kitDocs/app.json`)===false
const SCRIPT = { packageManager:"" }

// show package path
if(process.argv.find(data=>data.includes("--dev"))) clack.log.info(PACKAGE_PATH)

// Welcome
clack.intro("Welcome to iconsX")
const loader = clack.spinner()

/** Cancel script @param { any } action @param { boolean } force */
function isCancel(action,force=false){
    if(clack.isCancel(action) || force){
        clack.cancel("Script stopped")
        process.exit(1)
    }
}

/** Select node package manager */
async function selectPackageManager(){
    const action = await clack.select({
        message:"What package manager are you using ?",
        options: [
            { label: "Pnpm",value:"pnpm" },
            { label: "Npm",value:"npm" },
            { label: "Bun",value:"bun" },
        ]
    })
    // If user cancel script
    isCancel(action)
    // set data
    SCRIPT['packageManager'] = action
}

/** Make sure user confirm kitDocs folder will be overwritten */
async function confirmOverwritten(){
    const action = await clack.confirm({ message:"Folder src/kitDocs will be overwritten, continue ?" })
    // If user cancel script
    isCancel(action,action===false)
}

/** Update kitDocs */
async function update(){
    const tempFolderPath = `${CWD}/test/kitDocsTemp`
    // make a copy of app.json,variables.css,globals.css and Logo.svelte
    if(!fs.existsSync(tempFolderPath)) fs.mkdirSync(tempFolderPath)
    fs.copyFileSync(`${PROJECT_SRC}/kitDocs/app.json`,`${tempFolderPath}/app.json`)
    fs.copyFileSync(`${PROJECT_SRC}/kitDocs/variables.css`,`${tempFolderPath}/variables.css`)
    fs.copyFileSync(`${PROJECT_SRC}/kitDocs/globals.css`,`${tempFolderPath}/globals.css`)
    fs.copyFileSync(`${PROJECT_SRC}/kitDocs/Logo.svelte`,`${tempFolderPath}/Logo.svelte`)
    // remove old kitDocs and copy a new copy
    fs.rmSync(`${PROJECT_SRC}/kitDocs`,{ recursive:true })
    await new Promise(r=>setTimeout(r,500))
    fs.copySync(`${PACKAGE_PATH}/kitDocs`,`${PROJECT_SRC}/kitDocs`)
    // copy copies app.json,variables.css,globals.css and Logo.svelte
    fs.copyFileSync(`${tempFolderPath}/app.json`,`${PROJECT_SRC}/kitDocs/app.json`)
    fs.copyFileSync(`${tempFolderPath}/variables.css`,`${PROJECT_SRC}/kitDocs/variables.css`)
    fs.copyFileSync(`${tempFolderPath}/globals.css`,`${PROJECT_SRC}/kitDocs/globals.css`)
    fs.copyFileSync(`${tempFolderPath}/Logo.svelte`,`${PROJECT_SRC}/kitDocs/Logo.svelte`)
    await new Promise(r=>setTimeout(r,500))
    // remove temp folder
    fs.rmSync(tempFolderPath,{ recursive:true })
}

/** Install kitDocs */
async function install(){
    // copy kitDocs folder
    fs.copySync(`${PACKAGE_PATH}/kitDocs`,`${PROJECT_SRC}/kitDocs`)
    // create pages folder
    fs.mkdirSync(`${CWD}/pages`)
    clack.log.success("Created ./pages directory")
    fs.writeFileSync(`${CWD}/pages/[1]index.md`,utils.defaults.indexPage)
    clack.log.success("Created ./pages/[1]index.md file")
    // create api to set theme
    fs.writeFileSync(`${PROJECT_SRC}/routes/api/setTheme/+server.ts`,utils.defaults.apiSetTheme)
    clack.log.success("Created ./src/routes/api/setTheme/+server.ts file")
}

await selectPackageManager()
// Update
if(!NEW_INSTALL){
    await confirmOverwritten()
    // update kitdocs
    loader.start("Updating KitDocs")
    await update()
    loader.stop("KitDocs was updated")
    // install dependencies
    const command = `${SCRIPT.packageManager} install ${DEPENDENCIES.join(" ")}`
    loader.start(`Running ${command}`)
    execSync(command)
    await new Promise(r=>setTimeout(r,500))
    loader.stop("Dependencies installed")
}
// install
else{
    loader.start("Installing KitDocs")
    install()
    loader.stop("KitDocs was installed")
    clack.log.info("Follow installing at https://kitdocs.dev")
}