<script lang="ts">
    import { uniqueId } from 'lodash-es';
    import type { HTMLInputAttributes } from 'svelte/elements';
    
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

    const id = uniqueId(`${name}_`);
</script>
<label class="form-check" for={id}>
    <input 
        class="form-check-input" 
        type="checkbox"  
        {id}
        {value}
        {name}
    >
    <label class="form-check-label" for={id}>
        {label}
    </label>
</label>
<style>
    .form-check {
        display: flex;
        border: 1px solid var(--bs-border-color);
        border-radius: var(--bs-border-radius);
        padding: 1rem;
        gap: .5rem;

        .form-check-input {
            margin-left: 0;

            &:checked {
                background-color: transparent;
            }
        }

        &:has(:checked) {
            border-color: var(--bs-primary);
        }
    }
</style>