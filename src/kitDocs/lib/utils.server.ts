import type { RequestEvent } from "@sveltejs/kit"

export default new class Utils {
    
        /** Set cookie session */
        cookieSet(event:RequestEvent,cookieName:string,cookieValue:string){
            event.cookies.set(cookieName,cookieValue,{
                path:"/",
                httpOnly:true,
                sameSite:"strict",
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 26 * 30
            })
        }
    
        /** Remove cookie */
        cookieDelete(event:RequestEvent,cookieName:string){
            event.cookies.set(cookieName,"",{
                path:"/",
                expires: new Date(0)
            })
        }
}