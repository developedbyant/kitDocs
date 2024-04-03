import type { LayoutServerLoad } from "./$types"

export const load:LayoutServerLoad = async(event)=>{
    const theme = event.cookies.get("theme") || "dark" as "dark"|"light"
    return { theme }
}