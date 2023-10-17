import fs from "fs"
import path from "path";
import { globby } from "globby"
import { marked } from 'marked';
import { getHighlighter } from "shiki"
import type { Token } from "marked"

const highlighter = await getHighlighter({ theme:"css-variables" })
type MetaData = { [key:string]:string }
type AppData = { kitDocs:{[key:string]:{href:string,title:string}[]} }

export default class MdToSvelte{

    constructor(private markdownsDir:string,private outPutDir:string){
        this.outPutDir = markdownsDir.endsWith("/") ? markdownsDir : markdownsDir+"/"
        this.outPutDir = outPutDir.endsWith("/") ? outPutDir : outPutDir+"/"
    }

    // start
    async run(){
        const mds = await globby(this.markdownsDir,{expandDirectories:{files: ['*.md']}})
        const oldMds = await globby(this.outPutDir,{onlyDirectories:true})
        const appData:AppData = { kitDocs:{} }
        // delete all directories
        for(const oldMd of oldMds){ fs.rmSync(oldMd, { recursive: true, force: true }) }
        // loop all markdown files
        for(const md of mds){
            const cleanMd = md.replace(/\[\d+\]/g, '') // remove [...] from md path
            const tokens = marked.lexer(fs.readFileSync(md).toString())
            let metaData:MetaData = {}
            let pageCode:string = "" // svelte page code
            let jsCode:string = "" // code to be added after component imports
            let components:string[] = [] // components needed for page to work
            // loop md tokens
            for(const token of tokens){
                const tokenRes = this.handleToken(token,components)
                // update components
                components = tokenRes.components
                // add mete data for markdown
                if(Object.keys(tokenRes.metaData).length>0) metaData=tokenRes.metaData
                // add page code
                pageCode+=tokenRes.pageCode
                // add js code
                jsCode+=tokenRes.jsCode
            }  
            // skip page if not metadata were found
            if(!metaData["layout"]  || !metaData["title"]) continue
            // make page
            const scriptCode = this.scriptTag(metaData,components,jsCode)
            pageCode = `${scriptCode}\n\n${pageCode.trim()}`
            const { name:mdPageName } = path.parse(cleanMd.slice(5).trim())
            const routeMdDir = this.outPutDir+(mdPageName==="index"?"":`${mdPageName}/`)
            const routeMdPath = routeMdDir+"+page.svelte"
            const mdHref = routeMdPath.replace("src/routes","").replace("/+page.svelte","")
            // add data to app.json
            const layoutName = this.capitalize(metaData.layout)
            if(!appData['kitDocs'][layoutName]) appData['kitDocs'][layoutName] = []
            appData['kitDocs'][layoutName].push({ title:metaData.title,href:mdHref })
            // Ensure the directory exists, then write the file
            fs.mkdirSync(routeMdDir, { recursive: true });
            fs.writeFileSync(routeMdPath,pageCode)
        }
        // update app.json
        const appDataPath = "src/app.json"
        const currentAppData = JSON.parse(fs.readFileSync(appDataPath).toString())
        currentAppData['kitDocs'] = appData.kitDocs
        fs.writeFileSync("src/app.json",JSON.stringify(currentAppData,null,4))
    }

    /** Handle md token and return metadata and code */
    private handleToken(token:Token,components:string[]){
        let pageCode:string = ""
        let jsCode:string = ""
        const metaData:MetaData = {}
        // meta data
        if(token.type==="heading" && token.depth===2 && token.text.includes(":") && Object.keys(metaData).length===0){
            for(const data of token.text.split("\n")){
                const [key,value] = data.split(":") as [string,string]
                metaData[key.trim()] = value.trim()
            }
        }
        // text
        else if(token.type==="paragraph"){
            let code = token.text
            if(token.tokens){
                for(const inToken of token.tokens){
                    // handle link in text
                    if(inToken.type==="link"){
                        if(!components.includes("Link")) components.push("Link") // add Comp needed
                        code = code.replaceAll(inToken.raw,`<Link href="${inToken.href}">${inToken.text}</Link>`)
                    }
                    // handle code in text
                    else if(inToken.type==="codespan"){
                        if(!components.includes("InlineCode")) components.push("InlineCode") // add Comp needed
                        code = code.replaceAll(inToken.raw,`<InlineCode code="${inToken.text}"/>`)
                    }
                }
            }
            if(!components.includes("Text")) components.push("Text") // add Comp needed
            pageCode+= `<Text>${code}</Text>\n`
        }
        // space
        else if(token.type==="space"){     
            if(!components.includes("Space")) components.push("Space") // add Comp needed
            pageCode+= `<Space />\n`
        }
        // header
        else if(token.type==="heading"){      
            if(!components.includes("Header")) components.push("Header") // add Comp needed
            pageCode+= `<Header type="h${token.depth}" text="${token.text}" />\n`
        }
        // handle code
        else if(token.type==="code"){
            const lang = token.lang.toLowerCase().trim()
            // warning
            if(lang==="[warning]"){      
                if(!components.includes("Warning")) components.push("Warning") // add Comp needed
                pageCode+= `<Warning>${token.text}</Warning>\n`
            }
            // add js and ts code to script tag
            else if((lang==="js [code]"||lang==="ts [code]"||lang==="javascript [code]"||lang==="typescript [code]")){
                jsCode=token.text
            }
            // add svelte code to page
            else if(lang==="svelte [add]"){
                pageCode+= `${token.text}\n`
            }
            // add svelte code to page and show code
            else if(lang==="svelte [all]"){
                if(!components.includes("Code")) components.push("Code") // add Comp needed
                pageCode+= `<Code>${this.codeHighLighter(token.text,"svelte")}</Code>\n`
                pageCode+= `${token.text}\n`
            }
            // show code
            else{
                if(!components.includes("Code")) components.push("Code") // add Comp needed
                pageCode+= `<Code>${this.codeHighLighter(token.text,lang)}</Code>\n`
            }
        }
        // convert md code to html and add to page
        else if(token.type!=="hr"){
            pageCode+= marked.parse(token.raw)
        }
        // RETURN RESPONSE
        return { metaData,pageCode,components,jsCode }
    }

    /** Create page script tag */
    private scriptTag(metaData:MetaData,components:string[],jsCode:string){
        // set page metaData
        let meta = '    import { metaTagsStore } from "kitDocs/stores";\n    // set meta data\n'
        meta+=`    metaTagsStore.update(data=>{ data.title="${metaData.title}";data.description="${metaData.description}"; return data })\n`
        // create page components imports
        const comps = components.map(component=>`    import ${component} from 'kitDocs/components/${component}.svelte';`).join("\n")
        // add code to script tag
        jsCode = `    // custom code\n${jsCode}`
        return`<script lang="ts">\n${meta}${comps}\n${jsCode}\n</script>`
    }

    /** reverse string */
    private reverseString = (data:string)=>data.split('').reverse().join('')

    /** highlight code */
    private codeHighLighter(code:string,lang:string="svelte"){
        let htmlCode = highlighter.codeToHtml(code,lang)
        const result = this.lineHighlight(this.lineHighlight(htmlCode,"//[H]"),"//[R]")
        return result
    }

    /** highlight code line */
    private lineHighlight(htmlCode:string,specialTag:"//[H]"|"//[R]"){
        specialTag = specialTag.toUpperCase() as any // covert tag to upperCase
        const highlightCode = htmlCode.indexOf(specialTag)
        if(highlightCode>0){
            let loopNum = 0
            const dataToReplace = `<span class="line">${this.reverseString(this.reverseString(htmlCode.slice(0,highlightCode+5)).split(this.reverseString('<span class="line">'))[0])}`
            const dataToReplaceWith = `<span class="line ${specialTag==="//[H]"?"added":"removed"}">${this.reverseString(this.reverseString(htmlCode.slice(0,highlightCode+5)).split(this.reverseString('<span class="line">'))[0])}`
            htmlCode = htmlCode.replace(dataToReplace,dataToReplaceWith).replace(specialTag,"")
            while(true){
                const nextIndex = htmlCode.indexOf(specialTag)
                // break out of the loop
                if(nextIndex<0) break
                // highlight line
                const dataToReplace = `<span class="line">${this.reverseString(this.reverseString(htmlCode.slice(0,nextIndex+5)).split(this.reverseString('<span class="line">'))[0])}`
                const dataToReplaceWith = `<span class="line ${specialTag==="//[H]"?"added":"removed"}">${this.reverseString(this.reverseString(htmlCode.slice(0,nextIndex+5)).split(this.reverseString('<span class="line">'))[0])}`
                htmlCode = htmlCode.replace(dataToReplace,dataToReplaceWith).replace(specialTag,"")
                loopNum++
            }
        }
        return htmlCode.replace('tabindex="0"','tabindex="-1"').replace(/{/g,"&#123;")
    }

    /** Format code to be passed as param */
    private formatCodeString = (data:string)=>{
        // .replace(/<\//gi, '<\\/')
        return data.replaceAll("`","\\`").replace(/<script/ig,"<\\script")
    }

    /** Capitalize string */
    private capitalize = (data:string) => data.charAt(0).toUpperCase()+data.slice(1)

}

export async function mdToSveltePlugin() {
	return {
		name: 'mdToSvelte',
		handleHotUpdate(data:{ file:string,server:any }) {
			if(data.file.endsWith(".md") && data.server.config.mode==="development") new MdToSvelte("pages","src/routes/docs").run()
		},
	}
}