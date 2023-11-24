export type Apis = {
    "/docs/api/setTheme": ApiData<null, { theme: "dark" | "light" }>;
};

/** Make api request */
export default async function apiRequest<K extends keyof Apis>(apiUrl: K,apiLoad: Apis[K]["load"] | FormData) {
    const isAFile = apiLoad instanceof FormData;
    const requestHeaders = isAFile ? {} : { "Content-Type": "application/json" } as any;
    const requestBody = isAFile ? apiLoad : JSON.stringify(apiLoad);
    const request = await fetch(apiUrl, {
        method: "POST",
        headers: requestHeaders,
        body: requestBody,
    });
    const responseData = await request.json() as Apis[K]["res"]
    return responseData;
}

type ApiData<LoadData, ResData> = { load:LoadData,res: {error?:string,data:ResData} }