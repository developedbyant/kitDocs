<div class="warning">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16">
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>
    <p><slot/></p>
</div>

<style>
    .warning{
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 300;
        border: 1.5px solid var(--border-color);
        color: var(--error-color);
        background-color: var(--card-bg);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .warning svg{
        min-width: 20px;
        min-height: 20px;
        width: 20px;
        height: 20px;
        fill: var(--error-bg);
    }
    /* Mobile */
    @media(max-width:700px){
        .warning{
            font-size: 13px;
        }
    }
</style>