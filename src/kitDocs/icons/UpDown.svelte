<script lang="ts">
    export let size:string|undefined = "100%"
    export let color:string|undefined = "currentColor"
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color?color:"currentColor"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m7 15 5 5 5-5" />
    <path d="m7 9 5-5 5 5" />
</svg>