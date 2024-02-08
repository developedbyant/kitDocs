import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const appStore = writable({
    theme:"light",
    navIsOpen:false,
    sideNavIsOpen:false,
    searchIsOpen:false,
    scrollY:0
})
/** set meta tags */
export const metaTagsStore:Writable<{
    appName:string
    favicon?:string
    url?:string
    title?:string
    description?:string
    image?:string
    ogType?:"website"|"article"
}> = writable({ appName:"KitDocs" })