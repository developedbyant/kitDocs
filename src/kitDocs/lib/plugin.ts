import mdToSvelte from "md-to-svelte"
import type { Options } from "md-to-svelte"
import fs from "fs"

/** Convert markdown file to svelte
 * @param outPutDir - Directory to save converted markdown  */
export default function viteMdToSvelte(outPutDir: `src/routes/${string}`, options:Options){
    return {
        name: 'md-to-svelte',
        async handleHotUpdate(data:any) {
            const run = (data.file.endsWith(".md") && data.server.config.mode === "development");
            if(run){
				const pages = await mdToSvelte(outPutDir,options);
                const appJsonPath = "src/kitDocs/app/app.json"
				const appJsonData = JSON.parse(fs.readFileSync(appJsonPath).toString())
                appJsonData['kitDocs'] = pages
                fs.writeFileSync(appJsonPath,JSON.stringify(appJsonData,null,4))
			}  
        },
    };
}