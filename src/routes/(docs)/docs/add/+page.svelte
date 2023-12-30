<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Add to project";data.description="How to install kitDocs."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Link from 'kitDocs/components/Link.svelte';
</script>

<Header type="h1" id="installation">
    Installation
</Header>
<Text>To install,update or add kitDocs, simply run the following command in your terminal and follow the prompts:</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></Code>
<Text>You will see something like this from your terminal</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></Code>
<Space />
<Header type="h2" id="updating-kitdocs">
    Updating kitDocs
</Header>
<Text>Updating kitDocs is as easy as installing it. Run the following command to ensure you have the latest version:</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitdocs@latest</span></span></code></pre></Code>
<Text>And Select update</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></Code>
<Space />
<Header type="h2" id="add-to-project">
    Add to project
</Header>
<Text>To add kitDocs to a current project run <InlineCode code="npx kitdocs@latest" /> from your project root and select the option Add to project.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">┌</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">Welcome</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">◆</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">What</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">would</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">you</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">like</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">do</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">?</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Create</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">●</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Add</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">to</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">project</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">│</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string)">○</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">Update</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">└</span></span></code></pre></Code>
<Text>You can find a full guide of what to do after adding kitDocs to a project <Link href="/docs/add">
    Adding to project
</Link>.</Text>