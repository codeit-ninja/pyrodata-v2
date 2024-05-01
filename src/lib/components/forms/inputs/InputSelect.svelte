<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    type Props = {
        label: string;
        name: string;
        value?: string | null;
        placeholder?: string;
        error?: string[];
        rest?: any[];
    } & HTMLInputAttributes;

    let {
        label,
        name,
        placeholder,
        value = $bindable(),
        error = $bindable(undefined),
        ...rest
    }: Props = $props();
</script>
<div class="select">
    
</div>