<script lang="ts">
    import Dialog from "$lib/components/Dialog.svelte";
    import IngredientDropdown from "$lib/components/dropdowns/Ingredient.svelte";
    
    type Props = {
        onadd?: (ingredient: Ingredient) => void;
        ingredient?: Ingredient;
        element: HTMLDialogElement;
    }

    type Ingredient = {
        amount: number;
        name: string;
        note: string | null;
        pageId?: string;
    }

    let ingredient = $state({
        amount: 15,
        name: 'Potassium per',
        note: 'fine powder',
        pageId: ''
    })

    let { 
        onadd, 
        element = $bindable()
    }: Props = $props();
</script>
<Dialog bind:element type="offcanvas" position="right" closeButton={false}>
    {#snippet header()}
        <h5 class="mb-0">Ingredient</h5>
    {/snippet}
    {#snippet body()}
        <div class="mb-4">
            <span class="form-label d-block">Quantity</span>
            <input type="number" class="form-control" placeholder="Amount" bind:value={ingredient.amount} />
        </div>
        <div class="mb-4">
            <IngredientDropdown bind:value={ingredient.name} onselect={(page) => ingredient.name = page.title} />
        </div>
        <div class="mb-4">
            <span class="form-label d-block">Note</span>
            <input type="text" class="form-control" placeholder="Eg: 100 - 300 mesh" bind:value={ingredient.note} />
            <small class="form-text text-muted">Leave empty if noting to note</small>
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-dark" onclick={() => element.close()}>Cancel</button>
            <button type="button" class="btn btn-primary" onclick={() => onadd && onadd(ingredient)}>Add</button>
        </div>
    {/snippet}
</Dialog>