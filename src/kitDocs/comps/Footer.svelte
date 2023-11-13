<script>
    const copyRightText = `© ${new Date().getFullYear()}`
</script>

<footer>
    <div class="content">
        <p class="copyRight">{copyRightText}</p>
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
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }
    .copyRight{
        font-size: 15px;
        font-weight: 400;
        color: var(--footer-text-color);
    }
</style>