#! /usr/bin/env node
// @ts-check
import * as clack from "@clack/prompts"
import { create as createSvelte } from 'create-svelte';
import fs from "fs-extra"
import path from "path";
// const SCRIPT = { projectDir:`${process.cwd()}/test`,packageAssetsDir:`${process.cwd()}/package/assets` }
const SCRIPT = { projectDir:`${process.cwd()}`,packageAssetsDir: `${path.dirname(new URL(import.meta.url).pathname)}/assets` }

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
        vitest: false
    });
    fs.copySync(`${SCRIPT.packageAssetsDir}/kitDocs`,`${SCRIPT.projectDir}/${projectDir}/src/kitDocs`)
    // remove routes folder and copy the one from assets
    fs.rmSync(`${SCRIPT.projectDir}/${projectDir}/src/routes`,{ recursive:true })
    fs.copySync(`${SCRIPT.packageAssetsDir}/routes`,`${SCRIPT.projectDir}/${projectDir}/src/routes`)
    clack.log.info(`cd ${projectDir} && pnpm add globby shiki@0.14.7 marked`)
    clack.log.info(`cd ${projectDir} && npm i globby shiki@0.14.7 marked`)
    clack.log.success("Learn more at: https://kitdocs.dev/docs/guide")
}
else if (actionToDo==="update"){
    /** @type { any } */
    const projectKitDocsDir = `${SCRIPT.projectDir}/src/kitDocs`
    // make a copy of kitDocs/app,delete kitDocs folder, move copy back to kitDocs and delete temp folder
    if(fs.existsSync(projectKitDocsDir)){
        const tempFolderDir = `${SCRIPT.projectDir}/src/.appTemp`
        // make a temp copy of app folder
        fs.copySync(`${projectKitDocsDir}/app`,tempFolderDir)
        // remove kitDocs folder
        fs.rmSync(projectKitDocsDir,{ recursive:true })
        // copy a fresh copy
        fs.copySync(`${SCRIPT.packageAssetsDir}/kitDocs`,projectKitDocsDir)
        // move temp app folder back and delete temp folder
        fs.copySync(tempFolderDir,`${projectKitDocsDir}/app`)
        fs.rmSync(tempFolderDir,{ recursive:true })
    }
}