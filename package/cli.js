#! /usr/bin/env node
import * as clack from "@clack/prompts"
import core from "./core.js";
import defaults from "./defaults.js";
import Runners from "./runners.js";

// show package path
if(process.argv.find(data=>data.includes("--dev"))) clack.log.info(defaults.scriptInfo.paths.package)


// Welcome
clack.intro("Welcome")

// Ask action to run
await core.askActionToRun(defaults.scriptInfo)

// console.log(defaults)

const runners = new Runners(defaults.scriptInfo)
// Update kitDocs from current project
if(defaults.scriptInfo.action==="update"){
    await runners.updateInstall(true)
}
else if(defaults.scriptInfo.action==="add"){
    await core.askProjectName(defaults.scriptInfo)
    await core.askPackageManager(defaults.scriptInfo)
    await runners.updateInstall(false)
}
// Create new kitDocs project
else{
    await core.askProjectName(defaults.scriptInfo)
    await core.askPackageManager(defaults.scriptInfo)
    await runners.create()
}