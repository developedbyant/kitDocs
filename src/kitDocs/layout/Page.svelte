<script lang="ts">
    export let title:string
</script>

<div class="page">
    <div class="content">
        <h1 class="pageTitle">{title}</h1>
        <div class="pageContent">
            <slot />
        </div>
    </div>
</div>

<style>
    .page{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .pageTitle{
        color: var(--header-color);
        font-size: 60px;
        font-weight: 800;
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .pageTitle{ font-size: 30px; }
    }
</style>