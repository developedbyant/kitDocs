<script lang="ts">
    export let href:string
</script>

<a class="link" href={href}>
    <slot />
</a>

<style>
    .link{
        text-decoration: none;
        font-size: 15px;
        font-weight: 600;
        color: var(--main-color);
    }
</style>