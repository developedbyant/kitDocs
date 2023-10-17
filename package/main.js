#! /usr/bin/env node
import fs from "fs-extra"
import path from "path"
import inquirer from "inquirer"
const CWD = process.cwd()
const DEPENDENCIES = [ "globby","shiki","marked" ]
const PROJECT_SRC = `${CWD}/src`
const PAGES_PATH = `${CWD}/pages`
const PACKAGE_PATH = path.dirname(new URL(import.meta.url).pathname)
const newInstall = fs.existsSync(`${PROJECT_SRC}/app.json`)===false
const kitDocsVersion = fs.readJSONSync(`${PACKAGE_PATH}/app.json`)['version']
/** console log error @param {string} data */
const normalLog = (data)=> console.log(data)
/** console log error @param {string} data */
const okLog = (data)=> {console.log(`\x1b[32m${data}\x1b[0m`)}
const defaultMd = `---
layout: Introduction
title: Introduction
description: Welcome to kitDocs
---\n# Welcome`
// show package path
if(process.argv.find(data=>data.includes("--dev"))) normalLog(PACKAGE_PATH)

// confirm folder overwritten
!newInstall ? okLog("Updating kitDocs") : okLog("Installing kitDocs")
const cofirmed = (await inquirer.prompt({ type:"confirm",name:"data",message:"overWrite src/kitDocs ?"})).data
if(!cofirmed) process.exit(1)

const createPagesDir = ()=>{
    const pagesExists = fs.existsSync(PAGES_PATH)
    if(!pagesExists){ fs.mkdirSync(PAGES_PATH) ; fs.writeFileSync(`${PAGES_PATH}/index.md`,defaultMd) }
}
const copyKitDocs = ()=> fs.copySync(`${PACKAGE_PATH}/kitDocs`,`${PROJECT_SRC}/kitDocs`)
const copyAppJson = ()=> fs.copySync(`${PACKAGE_PATH}/app.json`,`${PROJECT_SRC}/app.json`)

// run new installation
if(newInstall){
    // create pages dir and create default md page
    createPagesDir()
    // copy lasted version of kitDocs
    copyKitDocs()
    // copy app.json file to project src
    copyAppJson()
    // log messages
    okLog(`kitDocs was installed version:${kitDocsVersion}`)
    normalLog(`Install dependencies:\n    run npm install ${DEPENDENCIES.join(" ")}\n    pnpm add ${DEPENDENCIES.join(" ")}`)
    okLog(`visit https://kitdocs.dev/docs to get started`)
}else{
    // copy lasted version of kitDocs
    copyKitDocs()
    // log message
    okLog(`kitDocs was updated version:${kitDocsVersion}`)
    normalLog(`Install dependencies:\n    run npm install ${DEPENDENCIES.join(" ")}\n    pnpm add ${DEPENDENCIES.join(" ")}`)
}