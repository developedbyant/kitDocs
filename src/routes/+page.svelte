<pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.css&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.code.css&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Layout </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/layout/Layout.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>
    
    
    
    
    <pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.css&quot;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.code.css&quot;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// Import Layout</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Layout </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/layout/Layout.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// Only show if we are viewing /docs</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    $</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> showSides </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> $</span><span style="color: var(--shiki-token-constant)">page</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">url</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">pathname</span><span style="color: var(--shiki-token-function)">.startsWith</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;/docs&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;</span><span style="color: var(--shiki-color-text)">data</span><span style="color: var(--shiki-token-function)">}</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;</span><span style="color: var(--shiki-color-text)">showSides</span><span style="color: var(--shiki-token-function)">}</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-keyword)">slot</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>
    
    
    
    
    <pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.css&quot;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/assets/style.code.css&quot;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Layout </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/layout/Layout.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-keyword)">slot</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
    <span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre>


<div class="block">
    <h2>Welcome</h2>
</div>

<style>
    .block {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        border: 1.5px solid var(--border-color);
        border-radius: 15px;
        margin-top: 20px;
    }
    h2 {
        color: var(--text-color);
    }
</style>
