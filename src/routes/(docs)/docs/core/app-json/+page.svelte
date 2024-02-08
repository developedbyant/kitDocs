<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="AppJson";data.description="A json file that keeps track of important information about your app."; return data })
    // custom code ===================

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

<h1 data-section data-sb="header" id="what-is-the-appjson">
    What is the appJson?
</h1>
<p data-sb="p">The appJson file that keeps track of important information about your app, it can be found at <code data-sb="inline-code">src/kitDocs/app.json</code>, there you will
find information like page links,generated docs links,footer info and more.</p>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="default-data">
    Default data
</h2>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;projectName&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;navLinks&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Home&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Documentation&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/docs&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;socialMedias&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;twitter&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://twitter.com/developedbyant&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;github&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://github.com/developedbyant/kitdocs&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;footer&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;links&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">&quot;title&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Resources&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">&quot;links&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                    &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Home&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                    &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Svelte&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://svelte.dev/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                        </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;kitDocs&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> &#123;}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="projectname">
    ProjectName
</h2>
<p data-sb="p">Just let use know your project name just incase we need it in the future.</p>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="navlinks">
    NavLinks
</h2>
<p data-sb="p">Add your any link to be displayed on your top navigation, by default we display Home and Documentation.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;navLinks&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Home&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Documentation&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/docs&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="socialmedias">
    SocialMedias
</h2>
<p data-sb="p">The socialMedias key it's use to display your social media link on the top navigation next to the search bar.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;socialMedias&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;twitter&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://twitter.com/developedbyant&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;github&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://github.com/developedbyant/kitdocs&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="footer">
    Footer
</h2>
<p data-sb="p">Footer key it's use to show things like footer links,footer text and other thing in the future.</p>
<div data-sb="space"></div>
<h2 data-section data-sb="header" id="kitdocs">
    KitDocs
</h2>
<div data-sb="warning">    Do not edit kitDocs key</div>
<p data-sb="p">The kitDocs key should not be touch by you, it will be auto generated when any change to the <code data-sb="inline-code">pages</code> markdown are made.</p>
<div data-sb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;kitDocs&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> &#123;}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>