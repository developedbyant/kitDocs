/** Copy src/kitDocs to package/kitDocs */
import fs from "fs-extra"
import utils from "./utils.js"
const CWD = process.cwd()
const PACKAGE_PATH = `${CWD}/package`
const APP_DATA = fs.readJsonSync(`${CWD}/src/kitDocs/app.json`)


function copyKitDocs(){
    if(fs.existsSync(`${PACKAGE_PATH}/kitDocs`)) fs.removeSync(`${PACKAGE_PATH}/kitDocs`) // delete kitDocs
    fs.copySync(`${CWD}/src/kitDocs`,`${PACKAGE_PATH}/kitDocs`) // copy kitDocs
}

function updatePackageJson(){
    const packageJsonData = fs.readJsonSync(`${PACKAGE_PATH}/package.json`)
    packageJsonData['version'] = APP_DATA['version']
    // save package.json
    fs.writeFileSync(`${PACKAGE_PATH}/package.json`,JSON.stringify(packageJsonData,null,4))
}

function createAppJson(){
    fs.writeFile(`${PACKAGE_PATH}/kitDocs/app.json`,JSON.stringify(utils.defaults.appData,null,4))
}

copyKitDocs()
updatePackageJson()
createAppJson()