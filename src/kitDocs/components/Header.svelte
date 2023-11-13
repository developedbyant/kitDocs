<script lang="ts">
    export let id:string
    export let type:"h1"|"h2"|"h3"|"h4"|"h5" = "h2"
</script>

{#if type==="h1"}
    <h1 class="header" data-section={id} {id}><slot /></h1>
{:else if type==="h2"}
    <h2 class="header" data-section={id} {id}><slot /></h2>
{:else if type==="h3"}
    <h3 class="header" data-section={id} {id}><slot /></h3>
{:else if type==="h4"}
    <h4 class="header" data-section={id} {id}><slot /></h4>
{:else if type==="h5"}
    <h5 class="header" data-section={id} {id}><slot /></h5>
{/if}

<style>
    .header{
        color: var(--header-color);
        margin-bottom: 5px;
    }
    h1{
        font-size: 35px;
        font-weight: 900;
    }
    h2{
        font-size: 25px;
        font-weight: 800;
    }
    h3{
        font-size: 20px;
        font-weight: 400;
    }
    h4,h5{
        font-size: 20px;
        font-weight: 400;
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        h1{ font-size: 30px; }
        h2{ font-size: 25px; }
        h3{ font-size: 18px; }
    }
</style>