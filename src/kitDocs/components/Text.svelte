<p class="text">
    <slot />
</p>

<style>
    .text{
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
        gap: 5px;
        margin-bottom: 5px;
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .text {
            font-size: 13px;
        }
    }
</style>