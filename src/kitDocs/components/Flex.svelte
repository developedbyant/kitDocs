<script lang="ts">
    export let direction:"column"|"row" = "column"
    export let gap:`${string}px` = "5px"
</script>

<div class="flex" style="flex-direction: {direction};gap: {gap};">
    <slot />
</div>

<style>
    .flex{
        display: flex;
        flex-wrap: wrap;
        background-color: var(--app-fb,red);
    }
</style>