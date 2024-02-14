#! /usr/bin/env node
// @ts-check
import * as clack from "@clack/prompts"
import { create as createSvelte } from 'create-svelte';
import fs from "fs-extra"
import path from "path";
const SCRIPT = { projectDir:`${process.cwd()}/test`,packageAssetsDir:`${process.cwd()}/package/assets` }
// const SCRIPT = { projectDir:`${process.cwd()}`,packageAssetsDir: `${path.dirname(new URL(import.meta.url).pathname)}/assets` }

// show package path
if(process.argv.find(data=>data.includes("--dev"))) clack.log.info(path.dirname(new URL(import.meta.url).pathname))

// Welcome
clack.intro("Welcome to kitDocs")

/** Cancel script @param { any } action*/
function isCancel(action){
    if(clack.isCancel(action)){
        clack.cancel("Script stopped")
        process.exit(1)
    }
}

/** @ts-ignore Ask action to run @type { "create"|"add"|"update" } */
const actionToDo = await clack.select({
    message:"What would you like to do ?",
    options:[
        { label:"Create new project",value:"create" },
        { label:"Update",value:"update" },
    ]
})
isCancel(actionToDo)


if(actionToDo==="create"){
    /** @type { any } */
    const projectDir = await clack.text({ message:"Where should we create your project?" })
    isCancel(projectDir)
    await createSvelte(`${SCRIPT.projectDir}/${projectDir}`, {
        name: projectDir,
        template: 'skeleton',
        types: 'typescript',
        prettier: false,
        eslint: false,
        playwright: false,
        vitest: false,
        svelte5: true,
    });
    // copy kitDocs folder
    fs.copySync(`${SCRIPT.packageAssetsDir}/kitDocs`,`${SCRIPT.projectDir}/${projectDir}/src/kitDocs`)
    // remove routes folder and copy the one from assets
    fs.rmSync(`${SCRIPT.projectDir}/${projectDir}/src/routes`,{ recursive:true })
    fs.copySync(`${SCRIPT.packageAssetsDir}/routes`,`${SCRIPT.projectDir}/${projectDir}/src/routes`)
    // copy default pages example
    fs.copySync(`${SCRIPT.packageAssetsDir}/pages`,`${SCRIPT.projectDir}/${projectDir}/pages`)
    clack.log.success("KitDocs was installed")
    clack.log.warning(`Action required, cd to ${projectDir} and install dependencies by running:\n  pnpm add md-to-svelte\n  or\n  npm i md-to-svelte`)
    clack.log.warning("Follow the get started guide at: https://kitdocs.dev/docs/getting-started")
}
else if (actionToDo==="update"){
    const rmKitDocsFolder = await clack.confirm({ message:"Would you like to update src/kitDocs/ folder ?" })
    /** @type { any } */
    const projectKitDocsDir = `${SCRIPT.projectDir}/src/kitDocs`
    // make a copy of kitDocs/app,delete kitDocs folder, move copy back to kitDocs and delete temp folder
    if(fs.existsSync(projectKitDocsDir)){
        const tempFolderDir = `${SCRIPT.projectDir}/src/.appTemp`
        // make a temp copy of app folder
        if(!rmKitDocsFolder) fs.copySync(`${projectKitDocsDir}/app`,tempFolderDir)
        // remove kitDocs folder
        fs.rmSync(projectKitDocsDir,{ recursive:true })
        // copy a fresh copy
        fs.copySync(`${SCRIPT.packageAssetsDir}/kitDocs`,projectKitDocsDir)
        // move temp app folder back and delete temp folder
        if(!rmKitDocsFolder) fs.copySync(tempFolderDir,`${projectKitDocsDir}/app`)
        if(fs.existsSync(tempFolderDir)) fs.rmSync(tempFolderDir,{ recursive:true })
    }
}