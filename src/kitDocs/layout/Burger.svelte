<script lang="ts">
    import { appStore } from "kitDocs/stores";
    $: open = $appStore.navIsOpen
    /** Open or close nav on click */
    function toggleNav(){
        appStore.update(data=>{ data['navIsOpen'] = !data['navIsOpen'] ; return data })
    }
</script>

<button class="burger" class:open on:click={toggleNav}>
    <div class="burgerChild"></div>
</button>

<style>
    .burger{
        all: unset;
        width: 40px;
        height: 30px;
        position: relative;
        cursor: pointer;
        /* hide on large screen */
        display: none;
    }
    .burgerChild{
        width: 100%;
        height: 7px;
        background-color: var(--search-bg);
        border: 1px solid var(--border-color);
        border-radius: 2px;
        transition: all ease-in-out 0.2s;
    }
    .burgerChild::after,.burgerChild::before{
        content: "";
        position: absolute;
        left: 0;
        border-radius: 2px;
        width: 97%;
        height: 4px;
        background-color: var(--search-bg);
        border: 1px solid var(--border-color);
        transition: transform ease-in-out 0.3s;
    }
    .burgerChild::after{ bottom: 0; }
    .burgerChild::before{ top: 0; }
    /* when open */
    .burger.open > .burgerChild{
        border: 0px solid var(--border-color);
        background-color: transparent;
    }
    .burger.open > .burgerChild::after{
        /* background-color: red; */
        transform: rotate(45deg) translate(-9px, -8px);
    }
    .burger.open > .burgerChild::before{
        /* background-color: rgb(9, 255, 0); */
        transform: rotate(-45deg) translate(-9px, 8px);
    }
    /* on mobile */
    @media(max-width:700px){
        .burger{
            display: block;
        }
    }
</style>