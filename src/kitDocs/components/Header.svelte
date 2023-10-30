<script lang="ts">
    export let text:string
    export let id:string = text
    export let type:"h1"|"h2"|"h3"|"h4"|"h5" = "h2"
    id = id.toLowerCase().trim()
</script>

{#if type==="h1"}
    <h1 class="header" {id}>{text}</h1>
{:else if type==="h2"}
    <h2 class="header" {id}>{text}</h2>
{:else if type==="h3"}
    <h3 class="header" {id}>{text}</h3>
{:else if type==="h4"}
    <h4 class="header" {id}>{text}</h4>
{:else if type==="h5"}
    <h5 class="header" {id}>{text}</h5>
{/if}

<style>
    .header{
        color: var(--header-color);
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