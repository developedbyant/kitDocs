/** Build npm package */
import fs from "fs-extra"
import utils from "./utils.js"
const CWD = process.cwd()
const PACKAGE_PATH = `${CWD}/package`
const APP_DATA = fs.readJsonSync(`${CWD}/src/kitDocs/app.json`)

/** Copy src/kitDocs folder */
function copyKitDocs(){
    if(fs.existsSync(`${PACKAGE_PATH}/assets/kitDocs`)) fs.removeSync(`${PACKAGE_PATH}/assets/kitDocs`) // delete kitDocs
    fs.copySync(`${CWD}/src/kitDocs`,`${PACKAGE_PATH}/assets/kitDocs`) // copy kitDocs
}

/** Copy src/routes folder */
function copyRoutes(){
    if(fs.existsSync(`${PACKAGE_PATH}/assets/routes`)) fs.removeSync(`${PACKAGE_PATH}/assets/routes`) // delete routes
    fs.copySync(`${CWD}/src/routes`,`${PACKAGE_PATH}/assets/routes`) // copy routes
    // clean docs folder
    const docsPath = `${PACKAGE_PATH}/assets/routes/(app)/(docs)/docs`
    const routesFolders = fs.readdirSync(docsPath)
    for(let path of routesFolders){
        path = `${PACKAGE_PATH}/assets/routes/(app)/(docs)/docs/${path}`
        // delete all folders, only keep api folder
        if(!path.endsWith("/api")) fs.rmSync(path,{ recursive:true })
    }
    // remove +page.server.ts
    fs.removeSync(`${PACKAGE_PATH}/assets/routes/(app)/+page.server.ts`)
}

/** Update package version */
function updatePackageJson(){
    const packageJsonData = fs.readJsonSync(`${PACKAGE_PATH}/package.json`)
    packageJsonData['version'] = APP_DATA['version']
    // save package.json
    fs.writeFileSync(`${PACKAGE_PATH}/package.json`,JSON.stringify(packageJsonData,null,4))
}

/** Create default app.json file */
function createAppJson(){
    fs.writeFile(`${PACKAGE_PATH}/assets/kitDocs/app.json`,JSON.stringify(utils.defaults.appData,null,4))
}

copyKitDocs()
copyRoutes()
updatePackageJson()
createAppJson()