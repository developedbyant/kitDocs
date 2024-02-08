<script lang="ts">
    import { page } from "$app/stores";
    import { appStore } from "src/kitDocs/lib/stores";
    import kitDocsData from "src/kitDocs/app/app.json"
    import SearchBtn from "src/kitDocs/components/nav/SearchBtn.svelte";
    import SocialMedias from "./SocialMedias.svelte";
    import LinksToggle from "./LinksToggle.svelte";
    import ThemeToggle from "src/kitDocs/components/nav/ThemeToggle.svelte";
    import BurgerBtn from "./BurgerBtn.svelte";
    import Logo from "src/kitDocs/app/Logo.svelte";
    const navLinks = kitDocsData.navLinks

    /** close nav when user click link */
    const closeNav = ()=> appStore.update(data=>{ data['navIsOpen']=false ; return data})
</script>

<header class="mainNavHeader">
    <nav class="mainNav">
        <Logo />
        <ul class="links" class:open={$appStore.navIsOpen}>
            <LinksToggle /> <!--mobileOnly-->
            {#each navLinks as link}
            {@const active = (link.href===$page.url.pathname || link.href.split("/")[1]===$page.url.pathname.split("/")[1]) && !link.external }
                <li class="link" class:active>
                    <a href={link.href} target={link.external?"_blank":""} on:click={closeNav}>
                        {link.text}
                    </a>
                </li>
            {/each}
        </ul>
        <SearchBtn />
        <SocialMedias />
        <ThemeToggle on:changeTheme/>
        <BurgerBtn /> <!--mobileOnly-->
    </nav>
</header>

<style>
    .mainNavHeader{
        display: flex;
        align-items: center;
        width: 100%;
        height: var(--nav-height);
        min-height: var(--nav-height);
        max-height: var(--nav-height);
        background: var(--nav-bg);
        position: sticky;
        top: 0;
        left: 0;
        box-shadow: 2px 0 0 1.5px var(--border-color);
        z-index: 1;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    .mainNav{
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .links{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
        list-style: none;
    }
    .link a{
        text-decoration: none;
        color: var(--nav-link-color);
        font-size: 16px;
        font-weight: 500;
    }
    .link.active > a{
        color: var(--main-color);
    }
    /* mobile */
    @media(max-width:700px){
        .mainNav{
            overflow: hidden;
            gap: 10px;
        }
        .links{
            gap: 10px;
            overflow: hidden;
            transition: min-width 0.4s ease-in-out;
            max-width: 30px;
            min-width:30px;
        }
        .links.open{
            min-width: 100%;
            overflow-x: auto;
        }
    }
</style>