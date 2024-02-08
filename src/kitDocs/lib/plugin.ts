/** Breakdown of hpw this file works
 * 1. List all markdown files using globby
 * 2. Loop all the markdown files and handle each one using
 * 3. List all markdown file's tokens using marked.lexer that return all tokens
 * 4. handle each token and add their code,js, and other tag to the class variables
 * 5. reset all class variables after handling each markdown
 * 6. create svelte page
 * 7. save app.json data collected from all markdowns */
import fs from "fs"
import path from "path";
import { globby } from "globby"
import { marked } from 'marked';
import { getHighlighter } from "shiki"
import type { Token } from "marked"

const highlighter = await getHighlighter({ theme:"css-variables" })
type PageLinksData = { id:string,text:string }
type MetaData = { [key:string]:string }
type AppData = {
    kitDocs:{ [key:string]:{ href:string,title:string,description:string,new:boolean,pageLinks?:PageLinksData[] }[] }
}

class Markdown{
    /** If set to true, we will recreate src/routes/docs folder on changes */
    private resetDocs:boolean
    private markdownsDir:string
    private outPutDir:string
    private pageCss:string
    private pageJsCode:string
    private pageCode:string
    private pageMetadata:MetaData
    private pageLinks:PageLinksData[]
    // private metaData:string
    constructor(resetDocs:boolean=true){
        this.resetDocs = resetDocs
        this.markdownsDir = `${process.cwd()}/pages`
        this.outPutDir = `${process.cwd()}/src/routes/(docs)/docs`
        this.pageCss = ""
        this.pageJsCode = ""
        this.pageCode = ""
        this.pageMetadata = {}
        this.pageLinks = []
    }

    // start
    async run(){
        const markdowns = await globby(this.markdownsDir,{expandDirectories:{files: ['*.md']}})
        const appData:AppData = { kitDocs:{} }
        // delete all generated directories in docs folder
        if(this.resetDocs){
            const oldMds = await globby(`${this.outPutDir.replace("(docs)","\\(docs\\)")}/**`,{ onlyDirectories:true })
            for(const oldMd of oldMds){ fs.rmSync(oldMd, { recursive: true, force: true }) }
        }
        // loop all markdown files
        for(const markdownPath of markdowns){
            const cleanMarkdownPath = markdownPath.replace(/\[\d+\]/g, '').replace(process.cwd(),"") // remove [...] from markdownPath path and cwd
            /** Page slug example /docs/installation */
            const pageSlug = `/docs/${cleanMarkdownPath.slice(7).replace("index.md","").replace(".md","")}`
            /** Path to svelte page example src/routes/docs/installation/+page.svelte */
            const sveltePagePath = `${this.outPutDir}/${cleanMarkdownPath.slice(7).replace("index.md","+page.svelte").replace(".md","/+page.svelte")}`
            const markdownTokens = marked.lexer(fs.readFileSync(markdownPath).toString())
            for(const markdownToken of markdownTokens){
                // console.log(markdownToken)
                this.handleToken(markdownToken)
            }
      
            // make sure markdown has layout,title and description metadata
            const canCreatePage = 'layout' in this.pageMetadata && 'title' in this.pageMetadata && 'description' in this.pageMetadata
            if(!canCreatePage){
                const err = `Markdown file:\n  ${markdownPath}\n  Most have a metadata with layout,title and description at the of the file`
                throw new Error(err);
            }

            // add data to app.json
            const layoutName = this.capitalize(this.pageMetadata.layout)
            // if layout not in appData add it to it to avoid error
            if(!appData['kitDocs'][layoutName]) appData['kitDocs'][layoutName] = []
            appData['kitDocs'][layoutName].push({
                title:this.pageMetadata.title,href:pageSlug.endsWith("/") ? pageSlug.slice(0,-1) : pageSlug,description:this.pageMetadata.description,
                new:this.pageMetadata.new && this.pageMetadata.new==="true" ? true : false,
                pageLinks:this.pageLinks
            })
       
            // create page
            const pageCode = this.createPage()
            fs.mkdirSync(path.dirname(sveltePagePath), { recursive: true });
            fs.writeFileSync(sveltePagePath,pageCode)

            // reset all page data
            this.pageCss = ""
            this.pageJsCode = ""
            this.pageCode = ""
            this.pageMetadata = {}
            this.pageLinks = []
        }

        // update app.json
        const appDataPath = "src/kitDocs/app/app.json"
        const currentAppData = JSON.parse(fs.readFileSync(appDataPath).toString())
        currentAppData['kitDocs'] = appData.kitDocs
        fs.writeFileSync(appDataPath,JSON.stringify(currentAppData,null,4))
    }

    /** Handle md token and return metadata and code */
    private handleToken(token:Token){
        // meta data
        if(token.type==="heading" && token.depth===2 && token.text.includes(":") && Object.keys(this.pageMetadata).length===0){
            for(const data of token.text.split("\n")){
                const [key,value] = data.split(":") as [string,string]
                this.pageMetadata[key.trim()] = value.trim()
            }
        }
        // header
        else if(token.type==="heading"){
            const id = this.slug(token.text)
            if(!this.pageLinks.find(data=>data.id===id)) this.pageLinks.push({ id,text:token.text })
            // add code
            this.pageCode+= `<h${token.depth} data-section data-sb="header" id="${id}">\n    ${token.text}\n</h${token.depth}>\n`
        }
        // add spaces
        // else if(token.type==="code" && token.lang==="space"){
        //     console.log(token)
        //     // this.pageCode+= `<div data-sb="added-space"></div>\n`
        // }
        // text
        else if(token.type==="paragraph"){
            let code = token.text
            if(token.tokens){
                for(const inToken of token.tokens){
                    // handle link in text
                    if(inToken.type==="link"){
                        // add code
                        code = code.replace(inToken.raw,`<a data-sb="a" href="${inToken.href}">\n    ${inToken.text}\n</a>`)
                    }
                    // handle code in text
                    else if(inToken.type==="codespan"){
                        // add copy text function to script tag
                        if(!this.pageJsCode.includes('copyText(e:MouseEvent)')) this.pageJsCode+=this.copyTextFunc()
                        // add code
                        code = code.replaceAll(inToken.raw,`<code data-sb="inline-code">${inToken.text}</code>`)
                    }
                }
            }
            // add code
            this.pageCode+= `<p data-sb="p">${code}</p>\n`
        }
        // space
        else if(token.type==="space"){     
            this.pageCode+= `<div data-sb="space"></div>\n`
        }
        // handle code
        else if(token.type==="code"){
            const lang = token.lang.toLowerCase().trim()
            // warning
            if(lang==="[warning]"){      
                this.pageCode+= `<div data-sb="warning">${token.text}</div>\n`
            }
            // add js and ts code to script tag
            else if((lang==="js [code]"||lang==="ts [code]"||lang==="javascript [code]"||lang==="typescript [code]")){
                this.pageJsCode=token.text
            }
            // add style
            else if(lang==="css [code]"){
                this.pageCss= `${token.text}\n`
            }
            // add svelte code to page
            else if(lang==="svelte [add]"){
                this.pageCode+= `${token.text}\n`
            }
            // add svelte code to page and show code
            else if(lang==="svelte [all]"){
                // add copy text function to script tag
                if(!this.pageJsCode.includes('copyText(e:MouseEvent)')) this.pageJsCode+=this.copyTextFunc()
                // add code to page
                this.pageCode+= `${token.text}\n`
            }
            // show code
            else{
                // add copy text function to script tag
                if(!this.pageJsCode.includes('copyText(e:MouseEvent)')) this.pageJsCode+=this.copyTextFunc()
                // add page code
                this.pageCode+= `<div data-sb="code"><button on:click={copyText}>Copy</button>${this.codeHighLighter(token.text,lang)}</div>\n`
            }
        }
        // list items
        else if(token.type==="list"){
            let code = ""
            for(const item of token.items){
                let itemText = item.text
                // TODO: handle sub list
                // loop all list items
                for(const itemToken of item.tokens){
                    // handle token in text
                    if(itemToken.type==="text"){
                        for(const textToken of itemToken.tokens){
                            // handle code in item
                            if(textToken.type==="codespan"){
                                // add code
                                itemText = itemText.replaceAll(textToken.raw,`<code data-sb="inline-code">${textToken.text}</code>`)
                            }
                        }
                    }
                }
                // create list
                code+= item.type==="list_item" ? `    <li>${itemText}</li>\n` : `    <li>${itemText}</li>\n`
            }
            // add code to page code
            code = !token.ordered ? `<ul data-sb="list">\n${code}</ul>\n` : `<ol data-sb="list-ordered">\n${code}</ol>\n`
            this.pageCode+= code
        }
        // convert md code to html and add to page
        else if(token.type!=="hr"){
            this.pageCode+= marked.parse(token.raw)
        }
    }

    /** Create page tags */
    private createPage(){
        // set page metaData
        let meta = '    import { metaTagsStore } from "src/kitDocs/lib/stores";\n    // set meta data ===================\n'
        meta+=`    metaTagsStore.update(data=>{ data.title="${this.pageMetadata.title}";data.description="${this.pageMetadata.description}"; return data })\n`
        // add code to script tag
        if(this.pageJsCode.trim()!=="") this.pageJsCode = `    // custom code ===================\n${this.pageJsCode}`
        // add css to page
        if(this.pageCss.trim()!=="") this.pageCss = `<style>\n${this.pageCss}</style>`
        // return page data
        return`<script lang="ts">\n${meta}${this.pageJsCode}\n</script>\n\n${this.pageCode}\n${this.pageCss}`.trimEnd()
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

    /** Convert string to url slug */
    private slug(data:string){
        // replace multiple spaces to a single space
        data = data.replace(/\s+/g, ' ')
        // remove any character or number from text, make text lower case and trim it
        data = data.replace(/[^\w\s]/g, '').toLowerCase().trim().replace(/\s+/g, '-')
        return data
    }

    /** Capitalize string */
    private capitalize = (data:string) => data.charAt(0).toUpperCase()+data.slice(1)

    /** Return copy text function */
    private copyTextFunc(){
    return `\n    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }`
    }
}

export default async function() {
	return {
		name: 'markdown2svelte',
		handleHotUpdate(data:{ file:string,server:any }) {
            const run = ( data.file.endsWith("plugin.ts") || data.file.endsWith(".md") || data.file.endsWith(".mjs") ) && data.server.config.mode==="development"
			if(run) new Markdown().run()
		},
	}
}