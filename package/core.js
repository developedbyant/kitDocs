import fs from "fs-extra"
import * as clack from "@clack/prompts"
import { exec } from "child_process"
import defaults from "./defaults.js"

export default new class {

    /** Cancel script @param { any } action @param { boolean } force */
    isCancel(action,force=false){
        if(clack.isCancel(action) || force){
            clack.cancel("Script stopped")
            process.exit(1)
        }
    }

    /** Util function to wait for given time @param { number } time - time to wait */
    async sleep(time){ return new Promise(r=>setTimeout(r,time))}

    /** @param {import("./types").ScriptInfo} SCRIPT  Ask what to do */
    async askActionToRun(SCRIPT){
        const action = await clack.select({
            message:"What would you like to do ?",
            options:[
                { label:"Create new project",value:"create" },
                { label:"Add to project",value:"add" },
                { label:"Update",value:"update" },
            ]
        })
        this.isCancel(action, !action)
        SCRIPT['action'] = action
        // set cwd to test/kitDocsApp when testing
        if(defaults.TESTING && SCRIPT.action!=="create") SCRIPT['paths']['cwd'] = SCRIPT['paths']['cwd']+"/kitDocsApp"

        // when updating get project name from app.json
        if(SCRIPT.action==="update"){
            const appData = fs.readJSONSync(`${SCRIPT.paths.cwd}/src/kitDocs/app.json`)
            SCRIPT['projectName'] = appData.projectName
            SCRIPT['packageManager'] = appData.packageManager
        }
    }

    /** @param {import("./types").ScriptInfo} SCRIPT  Ask for project name */
    async askProjectName(SCRIPT){
        const action = await clack.text({ message:"Please give your project a name Example:kitDocsApp",defaultValue:"kitDocsApp"})
        this.isCancel(action, !action)
        // @ts-ignore set project name and path
        SCRIPT.projectName = action
        // check if it's new install
        SCRIPT['isNewInstall'] = ! fs.existsSync(`${SCRIPT.paths.cwd}/src/kitDocs`)
    }

    /** @param {import("./types").ScriptInfo} SCRIPT  Select node package manager */
    async askPackageManager(SCRIPT){
        const action = await clack.select({
            message:"What package manager are you using?",
            options: [
                { label: "PNPM",value:"pnpm" },
                { label: "NPM",value:"npm" },
                { label: "BUN",value:"bun" },
            ]
        })
        // If user cancel script
        this.isCancel(action)
        // set data
        SCRIPT['packageManager'] = action
    }

    /** @param {import("./types").ScriptInfo} SCRIPT  Install needed dependencies */
    async handleDependencies(SCRIPT){
        const loader = clack.spinner()
        const command = `${SCRIPT.packageManager} ${SCRIPT.packageManager==="pnpm" ? "add" : "install"} ${SCRIPT.dependencies.join(" ")}`
        clack.log.info(`Running: ${command}`)
        
        // run command
        loader.start("Installing dependencies")

        // wait 2 seconds for user experience only
        await this.sleep(2000)

        return new Promise(resolve=>{
            exec(`cd ${SCRIPT.paths.cwd} && ${command}`).addListener("close",()=>{
                loader.stop("Dependencies installed")
                resolve(true)
                // bye message
                if(SCRIPT.action==="create"){
                    clack.log.success("KitDocs project created")
                    clack.log.info("Learn more at: https://kitdocs.dev/docs/installation")
                }
                if(SCRIPT.action==="add"){
                    clack.log.success("KitDocs added to project")
                    clack.log.info("Learn more at: https://kitdocs.dev/docs/add")
                }
                if(SCRIPT.action==="update"){
                    clack.log.success("KitDocs updated")
                    clack.log.info("Learn more at: https://kitdocs.dev/docs/update")
                }
            })
        })
    }

}