export default {
    defaults:{
        /** Default data for src/kitDocs/app.json */
        appData:{
            "navLinks": [ { "text": "Home", "href": "/", "external": false } ],
            "socialMedias": {
                "twitter": "https://twitter.com/svelteCMS",
                "github": "https://github.com/svelteCMS"
            },
            "kitDocs": {}
        },
        indexPage:`---\nlayout: Introduction\ntitle: Introduction\ndescription: Welcome to kitDocs\n---\n# Welcome`,
        apiSetTheme:`import { json } from "@sveltejs/kit";
        import utils from "kitDocs/lib/utils.server";
        import type { Apis } from "kitDocs/lib/api";
        import type { RequestHandler } from "./$types";
        
        export const POST:RequestHandler = async(event) => {
            const theme = event.cookies.get("theme") || "light" as "light"|"dark"
            const newTheme = theme==="dark" ? "light" : "dark"
            // set cookie
            utils.cookieSet(event,"theme",newTheme)
            // return response
            const response:Apis['/api/setTheme']['res'] = { data:{ theme:newTheme }}
            return json(response)
        }`
    }
}