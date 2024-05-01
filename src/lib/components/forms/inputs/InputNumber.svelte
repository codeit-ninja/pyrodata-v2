<script lang="ts">
    import { uniqueId } from 'lodash-es';
    import type { HTMLAttributes } from 'svelte/elements';

    type Props = {
        label: string;
        name: string;
        value: number | null;
        placeholder?: string;
        error?: string[];
        rest?: any[];
    } & HTMLAttributes<HTMLInputElement>;

    let {
        label,
        name,
        placeholder,
        value = $bindable(),
        error = $bindable(undefined),
        ...rest
    }: Props = $props();

    const id = uniqueId(`${name}_`);
</script>
<label for={id} class="form-label">{label}</label>
<input
    {id}
    {name}
    {placeholder}
    type="number" 
    class="form-control"
    bind:value
    {...rest}
/>
{#if error}
    <div class="invalid-feedback d-block">
        {error}
    </div>
{/if}