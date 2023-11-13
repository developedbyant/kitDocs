#! /usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import utils from "./utils.js"
import * as clack from "@clack/prompts"

// Show package path
if(process.argv.find(data=>data.includes("--dev"))) clack.log.info(path.dirname(new URL(import.meta.url).pathname))

/** Script config @type {{[key:string]:any}} */
const config = { iconsPath:"", iconProvider:"", framework:"" }

// Welcome
clack.intro("Welcome to iconsX")

// Where should we save icons to |||||||||||||||||||||
async function selectIconsPath(){
    config['iconsPath'] = await clack.text({ message:"Where should we save icons ?",defaultValue:"src/icons" })
    // If user cancel script
    if(clack.isCancel(config['iconsPath'])){ clack.cancel("Icons path was not provided") ; process.exit(1) }
    // create folder if it does exists
    if(!fs.existsSync(config['iconsPath'])){
        clack.log.message(`Created path ${config['iconsPath']}`)
        fs.mkdirSync(config['iconsPath'],{ recursive: true })
    }
    config['iconsPath'] = config['iconsPath'].endsWith("/") ? config['iconsPath'] : `${config['iconsPath']}/`
}


// Select icon provider |||||||||||||||||||||
async function selectProvider(){
    config['iconProvider'] = await clack.select({
        message:"Select icons provider",
        options: [
            { label: "Lucide icons",value:"lucide" },
            { label: "Google icons",value:"google" },
            { label: "BootStrap icons",value:"bootstrap" },
            { label: "Font Awesome",value:"fontawesome" },
        ],
    })
    // If user cancel script
    if(clack.isCancel(config['iconProvider'])){ clack.cancel("Icon provider was not provided") ; process.exit(1) }
}


// Select framework |||||||||||||||||||||
async function selectFramework(){
    // Select framework |||||||||||||||||||||
    config['framework'] = await clack.select({
        message:"Choose framework",
        options: [
            { label: "React Js",value:"react" },
            { label: "Svelte",value:"svelte" },
            { label: "Plain svg",value:"svg" },
        ],
    })
    // If user cancel script
    if(clack.isCancel(config['framework'])){ clack.cancel("Framework was not provided") ; process.exit(1) }
}

/** Make changes after saving icon */
async function makeChanges(){
    const action = await clack.select({
        message:"What would you like to",
        options: [
            { label: "Keep downloading icons",value:"continue" },
            { label: "Change svg provider",value:"changeProvider" },
            { label: "Change framework",value:"changeFramework" },
            { label: "Stop script",value:"stop" },
        ],
    })
    // If user cancel script
    if(clack.isCancel(action)){ clack.cancel("Script stopped") ; process.exit(1) }
    // change framework
    if(action==="changeProvider") await selectProvider()
    else if(action==="changeFramework") await selectFramework()
    else if(action==="stop") { clack.cancel("Script stopped") ; process.exit(1) }
}

await selectIconsPath()
await selectProvider()
await selectFramework()

// Run code
while(true){
    /** Component config @type {{[key:string]:any}} */
    const component = { code:"",name:"",capitalizedName:"",urlName:"",path:"",error:false }
    const spinner = clack.spinner()
    // Ask for icon name |||||
    component['name'] = await clack.text({ message:"Icon name ?"})
    // If user cancel script
    if(clack.isCancel(component['name']) || !component['name']){ clack.cancel("Component name is required") ; process.exit(1) }

    // Set component config |||||
    component['capitalizedName'] = utils.componentIconName(component['name'])
    component['urlName'] = utils.iconUrlName(component['name'])

    // run code
    spinner.start()

    const svgText = await utils.svg(config['iconProvider'],component['urlName'],config['framework'])
    // Check if svg exists
    if(svgText){
        const componentData = utils.component(svgText,config['framework'])
        // set component error to false
        component['error'] = false
        // set component code
        component['code'] = componentData.code
        // set component path to be saved to
        component['path'] = config['iconsPath']+component['capitalizedName']+componentData.fileExt
    }
    // if icon was not found
    else{
        component['error'] = true
        clack.log.error(`Icon ${component['name']} was not found in ${config['iconProvider']}`)
    }
    
    // save icon
    if(component['code']) fs.writeFileSync(component['path'],component['code'])
    // stop spinner
    spinner.stop(component['error'] ? "Try another name" : `Icon saved > ${component['path']}`)
    // Ask for changes
    await makeChanges()
}