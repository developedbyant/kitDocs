<script lang="ts">

    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>AppJson | KitDocs</title>
    <meta name="title" content="AppJson | KitDocs" />
    <meta name="description" content="A json file that keeps track of important information about your app." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://kitdocs.dev/docs/core/app-json" />
    <meta property="og:title" content="AppJson | KitDocs" />
    <meta property="og:description" content="A json file that keeps track of important information about your app." />
    <meta property="og:image" content="https://kitdocs.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://kitdocs.dev/docs/core/app-json" />
    <meta property="twitter:title" content="AppJson | KitDocs" />
    <meta property="twitter:description" content="A json file that keeps track of important information about your app." />
    <meta property="twitter:image" content="https://kitdocs.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="what-is-the-appjson">
    What is the appJson?
</h1>
<p data-md="p">The appJson file that keeps track of important information about your app, it can be found at <code data-md="inline-code">src/kitDocs/app.json</code>, there you will
find information like page links,generated docs links,footer info and more.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="default-data">
    Default data
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "projectName"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "kitDocs"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "navLinks"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> [</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Home"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "/"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> false</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Documentation"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "/docs"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">            "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> false</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    ]</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "socialMedias"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        "twitter"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "https://twitter.com/developedbyant"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        "github"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "https://github.com/developedbyant/kitdocs"</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "footer"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        "links"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> [</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">            &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                "title"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Resources"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                "links"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> [</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">                    &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Home"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "/"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> false</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">                    }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">                    &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Svelte"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "https://svelte.dev/"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">                        "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> true</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">                    }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">                ]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">            }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        ]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "kitDocs"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> &#123;}</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="projectname">
    ProjectName
</h2>
<p data-md="p">Just let use know your project name just incase we need it in the future.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="navlinks">
    NavLinks
</h2>
<p data-md="p">Add your any link to be displayed on your top navigation, by default we display Home and Documentation.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "navLinks"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> [</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#123;</span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Home"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "/"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> false</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#123;</span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "text"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "Documentation"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "href"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "/docs"</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">            "external"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-constant)"> false</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    ]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="socialmedias">
    SocialMedias
</h2>
<p data-md="p">The socialMedias key it's use to display your social media link on the top navigation next to the search bar.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "socialMedias"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        "twitter"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "https://twitter.com/developedbyant"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">        "github"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-token-string-expression)"> "https://github.com/developedbyant/kitdocs"</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="footer">
    Footer
</h2>
<p data-md="p">Footer key it's use to show things like footer links,footer text and other thing in the future.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="kitdocs">
    KitDocs
</h2>
<div data-md="warning">    Do not edit kitDocs key</div>
<p data-md="p">The kitDocs key should not be touch by you, it will be auto generated when any change to the <code data-md="inline-code">pages</code> markdown are made.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    "kitDocs"</span><span style="color:var(--shiki-token-punctuation)">:</span><span style="color:var(--shiki-foreground)"> &#123;}</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
