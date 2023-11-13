<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Installation";data.description="How to install kitDocs."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    import Warning from 'kitDocs/components/Warning.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Link from 'kitDocs/components/Link.svelte';
    // custom code

</script>

<Header type="h1" id="installation">
    Installation
</Header>
<Text>Learn how to install kitDocs step by step.<br />
To get started from your svelte kit root project run <InlineCode code="npx kitdocs@latest" /> to install or update kitDocs.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)"># run this command to install or update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span><span style="color: var(--shiki-color-text)"> </span></span></code></pre></Code>
<Text>The output should look something like this.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">kitDocs</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">was</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">updated</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">version:0.0.6</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">Install</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">dependencies:</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">npm</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">install</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">globby</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">shiki</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">marked</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">pnpm</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">globby</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">shiki</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">marked</span></span></code></pre></Code>
<Warning>don't forget to add <strong>logo-light.png</strong> and <strong>logo-dark.png</strong> to your asset/static folder.</Warning>
<Header type="h2" id="plugin">
    Plugin
</Header>
<Text>To convert your markdown files to svelte pages, import <InlineCode code="mdToSveltePlugin" /> from <InlineCode code="src/kitDocs/plugin" /> and add it to your <InlineCode code="vite.config.ts" />.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)">// vite.config.ts</span></span>
<span class="line added"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; mdToSveltePlugin } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./src/kitDocs/plugin&#39;</span><span style="color: var(--shiki-color-text)">;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; sveltekit } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/kit/vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; defineConfig } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">defineConfig</span><span style="color: var(--shiki-color-text)">(&#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    plugins</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-function)">sveltekit</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)">mdToSveltePlugin</span><span style="color: var(--shiki-color-text)">()]</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span></code></pre></Code>
<Space />
<Header type="h2" id="alias">
    Alias
</Header>
<Text>Add the kitDocs to your <InlineCode code="svelte.config.js" /> file.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    preprocess</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">vitePreprocess</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    kit</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        adapter</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">adapter</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        alias</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            kitDocs</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;src/kitDocs/*&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span></code></pre></Code>
<Space />
<Header type="h2" id="layout-and-style">
    Layout and style
</Header>
<Link href="/docs/custom-style" id="create-custom-style"></Link><Text>Start by adding importing kitDocs style or create your own [Create custom style](/docs/custom-style) from <InlineCode code="kitDocs/style.css" /> and Layout from <InlineCode code="kitDocs/Layout.svelte" /> to your project layout <InlineCode code="src/routes/+layout.svelte" />.<br></Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/style.css&quot;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Layout </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/Layout.svelte&quot;</span><span style="color: var(--shiki-color-text)">; </span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-keyword)">slot</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Space />
<Header type="h2" id="nav-links">
    Nav links
</Header>
<Text>By default we only show the home link on your nav, but you can add internal or external links by editing <InlineCode code="src/app.json" />.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;navLinks&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Home&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></Code>
<Text>Adding a link</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;navLinks&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Home&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">&#123;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Documentation&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;href&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;/docs&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;external&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></Code>
<Link href="/docs/files/app-json" id="appjson"></Link><Text>Learn more about [app.json](/docs/files/app-json)</Text>