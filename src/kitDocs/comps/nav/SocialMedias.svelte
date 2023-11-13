<script lang="ts">
    import kitDocsData from "kitDocs/app.json"
    // icons
    import GithubIcon from "kitDocs/icons/Github.svelte";
    import TwitterIcon from "kitDocs/icons/Twitter.svelte";
    const medias = Object.entries(kitDocsData.socialMedias)
</script>

<div class="links">
    {#each medias as [name,link]}
        <a href={link} target="_blank" class="link" aria-label={name}>
            {#if name==="github"}
                <GithubIcon />
            {:else if name==="twitter"}
                <TwitterIcon />
            {:else }
                { name }
            {/if}
        </a>
    {/each}
</div>

<style>
    .links{
        display: flex;
        align-items: center;
        gap: 20px;
        border-left: 1.5px solid var(--border-color);
        padding-left: 20px;
    }
    .link{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        & svg{
            stroke: var(--nav-icon-color);
        }
    }
    .link:hover{
        opacity: 80%;
    }
    /* mobile */
    @media(max-width:700px){
        .link{
            width: 25px;
            height: 25px;
        }
    }
</style>