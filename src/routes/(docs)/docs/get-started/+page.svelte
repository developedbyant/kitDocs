<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Getting start";data.description="Getting started after creating kitDocs project."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Link from 'kitDocs/components/Link.svelte';
</script>

<Header type="h1" id="getting-started">
    Getting started
</Header>
<Text>After creating a kitDocs project you need to learn how to create a page,page structure,tags and all things needed to create a full documentation website.</Text>
<Space />
<Header type="h2" id="key-notes">
    Key notes
</Header>
<ul>
<li>Structure<ul>
<li>learn how your project structure should look</li>
</ul>
</li>
<li>Create page (route)<ul>
<li>How to create a route using the pages folder</li>
</ul>
</li>
</ul>
<Space />
<Header type="h2" id="project-structure">
    Project structure
</Header>
<Text>Your project structure should look something like this.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ project/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├ src/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ kitDocs/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ Logo.svelte</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ style.css</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ app.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ and more..</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ routes/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ (app) # all your app routes here</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ (docs) # this should not be touched</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└ └   └ kitDocs/</span></span></code></pre></Code>
<Space />
<Header type="h2" id="create-route">
    Create route
</Header>
<Text>To create a page(route), all you need to do is create a markdown file inside the <InlineCode code="pages" /> 
folder with the needed metadata.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">┌ pages/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ sub-folder/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [2]route-slug.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ ├ [2]sub-folder-2/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [2]route-slug.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │ └ [3]route-slug-3.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│ │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├ [1]index.md</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└ [2]installation.md</span></span></code></pre></Code>
<Text>To sort files and folders user the [] follow by the order number inside [1] or [2], example 
[1]index.md will be show before [2]installation.md since [1]index.md start with [1].</Text>
<Space />
<Header type="h2" id="first-page">
    First page
</Header>
<Text>Let's create your first page by adding the metadata tags that are required.<br>
The layout,title and description are required at the top of any markdown file, key new it's 
optional to allow us to add the new chip next to link on side nav.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    layout: Introduction</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title: Add to project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    description: How to install kitDocs.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span></code></pre></Code>
<Text>Add header tag and all tags supported by markdown</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text); font-weight: bold"># This is the page title</span></span></code></pre></Code>
<Text>Here is a simple page</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    layout: Introduction</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title: Installation</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    description: How to install kitDocs.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ---</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # Installation</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    To install,update or add kitDocs, simply run the following command in your terminal and follow the prompts:</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```bash</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    npx kitdocs@latest</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    You will see something like this from your terminal</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```bash</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ┌  Welcome</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ◆  What would you like to do ?</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ● Create new project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ○ Add to project</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    │  ○ Update</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    └</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ```</span></span></code></pre></Code>
<Text>See all super tags you can use inside your markdown files <Link href="/docs/special-tags">
    Special tags
</Link>.</Text>