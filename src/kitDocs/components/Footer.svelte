<script>
    import appData from "src/kitDocs/app/app.json"
    import Logo from "src/kitDocs/app/Logo.svelte";
</script>

<footer>
    <div class="content">
        <div class="footerNav">
            <div class="navLinks">
                {#each appData.footer.links as linkBlock }
                    <div class="navLink">
                        <span class="title">{linkBlock.title}</span>
                        <ul class="links">
                            {#each linkBlock.links as link }
                                <a class="link" href={link.href}>
                                    {link.text}
                                </a>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>         
        </div>
        <Logo />
    </div>
</footer>

<style>
    footer{
        background: var(--footer-bg);
        border-radius: 5px;
        margin-top: 20px;
    }
    .content{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    }
    .navLinks{
        display: flex;
        gap: 40px;
    }
    .navLink{
        display: flex;
        flex-direction: column;
        gap: 10px;
    } 
    .title{
        font-size: 18px;
        font-weight: 400;
        color: var(--header-color);
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .link{
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        color: var(--header-color);
    }
    .link:hover{
        color: var(--nav-link-hover-color);
    }
</style>