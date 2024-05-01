<script lang="ts" generics="T">
    import type { IngredientSchema } from "$primsa/schemas/Ingredient";

    import InputText from "../forms/inputs/InputText.svelte";

    import Dialog from "$lib/components/Dialog.svelte";
    import IngredientDropdown from "$lib/components/dropdowns/Ingredient.svelte";
    import InputNumber from "../forms/inputs/InputNumber.svelte";
    
    type Props = {
        onsave?: (ingredient: any) => void;
        oncancel?: () => void;
        element?: HTMLDialogElement;
        value: IngredientSchema;
    }

    let { 
        onsave,
        oncancel,
        value = $bindable(),
        element = $bindable<HTMLDialogElement>()
    }: Props = $props();

    const save = () => {
        if (onsave) {
            onsave({...value});
        }
        
        element.close();
    }

    const cancel = () => {
        if (oncancel) {
            oncancel();
        }

        element.close();
    }
</script>
<Dialog bind:element type="offcanvas" position="right" closeButton={false}>
    {#snippet header()}
        <h5 class="mb-0">Ingredient</h5>
    {/snippet}
    {#snippet body()}
        <div class="mb-4">
            <InputNumber 
                label="Amount"
                name="amount"
                bind:value={value.amount}
            />
        </div>
        <div class="mb-4">
            <IngredientDropdown bind:value={value.name} onselect={(page) => {
                value.name = page.title;
                value.pageId = page.id;
            }} />
        </div>
        <div class="mb-4">
            <InputText
                label="Note"
                name="note"
                placeholder="Eg: 100 - 300 mesh"
                bind:value={value.note}
            />
            <small class="form-text text-muted">Leave empty if noting to note</small>
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-dark" onclick={cancel}>Cancel</button>
            <button type="button" class="btn btn-primary" onclick={save}>Save</button>
        </div>
    {/snippet}
</Dialog>