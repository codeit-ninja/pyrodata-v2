<script lang="ts" generics="T">
    import { type ComponentProps, ingredient } from "$lib/components/dialogs/ingredient/index.svelte";

    import InputText from "$lib/components/forms/inputs/InputText.svelte";
    import InputNumber from "$lib/components/forms/inputs/InputNumber.svelte";
    import Dialog from "$lib/components/Dialog.svelte";
    import IngredientDropdown from "$lib/components/dropdowns/Ingredient.svelte";

    let { 
        oncancel, 
        onsave,
        element = $bindable(),
        value = $bindable()
    }: ComponentProps = $props();

    const save = () => {
        if (onsave) {
            onsave(ingredient);
        }
        
        element?.close();
    }

    const cancel = () => {
        if (oncancel) {
            oncancel();
        }

        element?.close();
    }

    $effect(() => {
        value = {...ingredient.value}
    })
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
                bind:value={ingredient.value.amount}
            />
        </div>
        <div class="mb-4">
            <IngredientDropdown bind:value={ingredient.value.name} onselect={(page) => {
                ingredient.value.name = page.title;
                ingredient.value.pageId = page.id;
            }} />
        </div>
        <div class="mb-4">
            <InputText
                label="Note"
                name="note"
                placeholder="Eg: 100 - 300 mesh"
                bind:value={ingredient.value.note}
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