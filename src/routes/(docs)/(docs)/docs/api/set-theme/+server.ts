import { json } from "@sveltejs/kit";
import utils from "src/kitDocs/lib/utils.server";
import type { RequestHandler } from "./$types";
import type { Apis } from "src/kitDocs/lib/api";

export const POST:RequestHandler = async(event) => {
    const theme:"dark"|"light" = event.cookies.get("theme") || "dark" as any
    const newTheme = theme==="dark" ? "light" : "dark"
    // set cookie
    utils.cookieSet(event,"theme",newTheme)
    // return response
    const response:Apis['/docs/api/set-theme']['res'] = { data:{ theme:newTheme }}
    return json(response)
}