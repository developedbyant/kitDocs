export default {
    defaults:{
        /** Default data for src/kitDocs/app.json */
        appData:{
            "navLinks": [ { "text": "Home", "href": "/", "external": false },{ "text": "Documentation", "href": "/docs", "external": false } ],
            "socialMedias": {
                "twitter": "https://twitter.com/developedbyant",
                "github": "https://github.com/developedbyant/kitdocs"
            },
            "kitDocs": {}
        },
        indexPage:`---\nlayout: Introduction\ntitle: Introduction\ndescription: Welcome to kitDocs\n---\n# Welcome`
    }
}