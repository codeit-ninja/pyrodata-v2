<script lang="ts">
    import { uniqueId } from 'lodash-es';
    import type { HTMLInputAttributes } from 'svelte/elements';

    type Props = {
        label: string;
        name: string;
        value?: string | null;
        placeholder?: string;
        error?: string;
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

    const id = uniqueId(`${name}_`);
</script>
<label for={id} class="form-label">{label}</label>
<input
    {id}
    {name}
    {placeholder}
    type="text" 
    class="form-control"
    bind:value
    {...rest}
/>
{#if error}
    <div class="invalid-feedback d-block">
        {error}
    </div>
{/if}