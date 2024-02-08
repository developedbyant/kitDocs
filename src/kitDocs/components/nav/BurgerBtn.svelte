<script lang="ts">
    import { appStore } from "src/kitDocs/lib/stores";
    $: open = $appStore.sideNavIsOpen
    /** Open or close nav on click */
    function toggleNav(){
        appStore.update(data=>{ data['sideNavIsOpen'] = !data['sideNavIsOpen'] ; return data })
    }
</script>

<button class="burger" class:open on:click={toggleNav}>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
</button>

<style>
    .burger{
        all: unset;
        min-width: 35px;
        width: 35px;
        height: 25px;
        cursor: pointer;
        display: none;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
    }
    .one,.two,.three{
        width: 100%;
        height: 4px;
        border-radius: 20px;
        background-color: var(--nav-icon-color);
        transition: transform 0.2s ease-in-out;
    }

    .burger.open .two{
        transform: translateX(100%);
    }
    .burger.open .one{
        transform: rotate(40deg) translate(6px, 9px);
    }
    .burger.open .three{
        transform: rotate(-40deg) translate(6px, -9px);
    }
    /* mobile */
    @media(max-width:700px){
        .burger{ display: flex; }
    }
</style>