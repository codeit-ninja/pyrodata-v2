<script lang="ts">
    import type { File } from "@prisma/client";
    import { onMount } from "svelte";

    type Props = {
        image: File | string | null;
    }

    const { image }: Props = $props();
    let ready = $state(false);
    let src = $state('');

    onMount(() => {
        if (typeof image === 'object' && image?.name) {
            ready = true;
            src = image.name;
        }

        if (typeof image === 'string') {
            src = image;
        }
    })
</script>
<picture>
    <img src={`/api/images/${src}`} alt={src} class="img-fluid" />
</picture>