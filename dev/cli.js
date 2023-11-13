#! /usr/bin/env node
import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import * as clack from "@clack/prompts"

const CWD = process.cwd()
const DEPENDENCIES = [ "globby","shiki","marked" ]
const PROJECT_SRC = `${CWD}/src`
const PAGES_PATH = `${CWD}/pages`
const PACKAGE_PATH = path.dirname(new URL(import.meta.url).pathname)
const newInstall = fs.existsSync(`${PROJECT_SRC}/kitDocs/app.json`)===false
const SCRIPT = {
    packageManager:""
}

/** Break down of how the script works
 * step 1 - Welcome message
 * step 2 - Ask your what package manager are they using
 * step 3 - Make sure user know src/kitDocs will be overwritten
 */

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

async function selectPackageManager(){
    const action = await clack.select({
        message:"What package manager are you using ?",
        options: [
            { label: "Npm",value:"npm" },
            { label: "Pnpm",value:"pnpm" }
        ]
    })
    // If user cancel script
    isCancel(action)
    // set data
    SCRIPT['packageManager'] = action
}

async function confirmOverwritten(){
    const action = await clack.confirm({ message:"Folder src/kitDocs will be overwritten, continue ?" })
    // If user cancel script
    isCancel(action,action===false)
}

await selectPackageManager()
await confirmOverwritten()
// Update
if(!newInstall){
    const command = `${SCRIPT.packageManager} install ${DEPENDENCIES.join(" ")}`
    loader.start(`Running ${command}`)
    execSync(command)
    await new Promise(r=>setTimeout(r,2000))
    loader.stop("Dependencies installed")
}
console.log(SCRIPT)