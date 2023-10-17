/** Build package */
import fs from "fs-extra"
const CWD = process.cwd()
const localKitDocsPath = `${CWD}/src/kitDocs`
const kitDocsPath = `${CWD}/package/kitDocs`
const packageJsonPath = `${CWD}/package/package.json`
const appJsonPath = `${CWD}/package/app.json`
const appData = fs.readJsonSync(`${CWD}/src/app.json`)

// delete kitDocs folder and make a new copy from src/kitDocs
if(fs.existsSync(kitDocsPath)) fs.removeSync(kitDocsPath) // delete kitDocs
fs.copySync(localKitDocsPath,kitDocsPath) // copy kitDocs

// update package.json
const packageJsonData = fs.readJsonSync(packageJsonPath)
packageJsonData['version'] = appData['version']
// save package.json
fs.writeFileSync(packageJsonPath,JSON.stringify(packageJsonData,null,4))

// update app.json
const appJsonData = fs.readJsonSync(appJsonPath)
appJsonData['version'] = appData['version']
// save app.json
fs.writeFileSync(appJsonPath,JSON.stringify(appJsonData,null,4))