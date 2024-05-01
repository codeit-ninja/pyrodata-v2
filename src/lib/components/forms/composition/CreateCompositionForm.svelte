<script lang="ts">
    import type { ActionData } from '../../../../routes/compositions/create/$types';
    import type { File } from '@prisma/client';
    import type { IngredientSchema } from '$primsa/schemas/Ingredient';
    
    import SuperDebug from 'sveltekit-superforms';
    import { enhance } from '$app/forms';
    import InputText from "$lib/components/forms/inputs/InputText.svelte";
    import InputRichText from "$lib/components/forms/inputs/richtext/InputRichText.svelte";
    import InputSelect from '$lib/components/forms/inputs/InputSelect.svelte';
    import InputFile from "$lib/components/forms/inputs/InputFile.svelte";
    import { Ingredient } from '$lib/components/composition/Ingredient';
    import Icon from '$lib/components/Icon.svelte';
    import { IngredientDialog, dialogElement, ingredient } from '$lib/components/dialogs/ingredient/index.svelte';
    import type { createIngredientSchema } from '$lib/server/schemas/ingredients/schema';
    import { normalizeValue } from '$lib/utils';
    
    type Props = {
        data: ActionData;
    }

    let ingredients = $state<IngredientSchema[]>([]);
    let video = $state<File>();
    let videoId = $derived(video?.id);

    const { data }: Props = $props();

    const addIngredient = () => {
        const index = ingredients.push({...ingredient.value});

        ingredient.value = ingredients[index - 1];
        dialogElement.value!.showModal();
    }

    const saveIngredient = () => {
        ingredient.value = {
            amount: 0,
            name: '',
            note: undefined,
            pageId: undefined
        }
    }

    const editIngredient = (data: createIngredientSchema) => {
        ingredient.value = data;
        dialogElement.value!.showModal();
    }

    const deleteIngredient = (i: number) => {
        ingredients.splice(i, 1);
    }
</script>
<form 
    method="POST" 
    enctype="multipart/form-data" 
    use:enhance={({ formData }) => {
        formData.append('ingredients', JSON.stringify(ingredients))
    }}
>
    <h3>New composition</h3>
    <div class="mb-3">
        <InputSelect
            label="Category"
            name="category"
            error={data?.error?.category?.message}
        />
    </div>
    <div class="mb-3">
        <InputText
            label="Name"
            name="name"
            error={data?.error?.name?.message}
        />
    </div>
    <div class="mb-3">
        <InputFile 
            label="Video"
            name="video"
            accept="video/*"
            preview="video"
            placeholder="Drop your awesome video of art here"
            bind:value={video}
            error={data?.error?.videoId?.message}
        />
        <input type="hidden" value={videoId} name="videoId" />
    </div>
    <div class="mb-3">
        <span class="form-label d-block">Ingredients</span>
        <div class="ingredients mb-3">
            {#each ingredients as ingredient, i}
                <div class="ingredient">
                    <Ingredient
                        amount={ingredient.amount}
                        name={ingredient.name}
                        pageId={ingredient.pageId}
                        note={ingredient.note}
                    />
                    <button class="edit ms-auto" type="button" onclick={() => editIngredient(ingredient)}>
                        <Icon icon="edit" size="sm" />
                    </button>
                    <button class="delete text-danger" type="button" onclick={() => deleteIngredient(i)}>
                        <Icon icon="delete" />
                    </button>
                </div>
                <span class="invalid-feedback d-block w-100">{data?.error[`ingredients.${i}.name`]?.message}</span>
            {/each}
        </div>
        <button type="button" class="btn btn-outline-primary" onclick={addIngredient}>Add ingredient</button>
    </div>
    <div class="mb-3">
        <InputRichText 
            label="Description"
            name="description"
            error={data?.error?.description?.message}
        />
    </div>
    <div class="mb-3">
        
    </div>
    <div class="d-flex justify-content-end">
        <button class="btn btn-primary">Submit</button>
    </div>
    <SuperDebug data={data} />
</form>

<IngredientDialog
    bind:element={dialogElement.value!}
    value={ingredient.value}
    onsave={saveIngredient}
/>

<style>
    .ingredient {
        display: flex;
        border: 1px solid var(--bs-border-color);
        border-radius: var(--bs-border-radius);
        padding: .45rem 1rem;
        align-items: center;

        button {
            display: flex;
            padding: 0;
        }
    }
</style>