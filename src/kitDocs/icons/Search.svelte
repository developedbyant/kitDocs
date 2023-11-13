<script lang="ts">
    export let size:string|undefined = "100%"
    export let color:string|undefined = "currentColor"
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color?color:"currentColor"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
</svg>