<script lang="ts">
    import type { FormErrors } from '$app/types';
    import Icon from '$lib/components/Icon.svelte';
    import type { createCompositionSchema } from "$lib/server/schemas/compositions";
    import type { File } from '@prisma/client';
    import Checkbox from '../inputs/Checkbox.svelte';
    import InputText from '../inputs/InputText.svelte';
    import InputRichText from '../inputs/richtext/InputRichText.svelte';
    import FileInput from '../inputs/File.svelte';
    import { enhance } from '$app/forms';
    import { IngredientDialog, dialogElement, ingredient } from '$lib/components/dialogs/ingredient/index.svelte';
    import type { createIngredientSchema } from '$lib/server/schemas/ingredients/schema';

    type Props = {
        composition?: createCompositionSchema;
        errors?: FormErrors<createCompositionSchema>
    }

    let {
        errors,
        composition = $bindable()
    }: Props = $props();

    let video = $state<File>();
    let videoId = $derived(() => {
        if (composition && video) {
            composition.videoId = video?.id;
        }

        return video?.id;
    });
    let ingredients = $state<createIngredientSchema[]>([]);

    const loadCategories = async () => {
        const response = await fetch('/api/compositions/categories');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return data;
    }

    const addIngredient = () => {
        const index = ingredients.push({...ingredient.value})
        dialogElement.value!.showModal();

        ingredient.value = ingredients[index -1];
    }

    const saveIngredient = () => {
        ingredient.value = {
            amount: 0,
            name: '',
            note: undefined,
            pageId: undefined
        }
    }

    const cancelIngredient = () => {
        ingredients.splice(ingredients.length -1, 1);
    }
</script>
<form
    method="post"
    enctype="multipart/form-data"
    use:enhance
>
    <h3>New composition</h3>

    <div class="mb-4">
        <InputText
            label="Name"
            name="name"
            error={errors?.name?.message}
            value={composition?.name}
        />
    </div>
    <div class="mb-4">
        <FileInput 
            label="Video"
            name="video"
            accept="video/mp4"
            placeholder="Drop video here"
            multiple={false}
            uploadOnDrop={true}
            maxSize={52428800}
            showPreview={true}
            error={errors?.videoId?.message}
            bind:value={video}
        />
        <input type="hidden" value={videoId()} name="videoId" />
    </div>
    <div class="mb-4">
        <span class="form-label d-block">Ingredients</span>
        {#each ingredients as ingredient}
            <div class="border border-1 rounded d-flex px-5 py-3 mb-2">
                <span class="w-lg-5 w-sm-10 w-15">{ingredient.amount}</span>
                <span>
                    {ingredient.name}
                    {#if ingredient.note}
                        ({ingredient.note})
                    {/if}
                </span>
            </div>
        {/each}
        <button type="button" onclick={addIngredient} class="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center gap-2">
            <Icon icon="add" />
            Add ingredient
        </button>
        <input type="hidden" class="form-control" name="ingredients" value={JSON.stringify(ingredients)} />
        {#if errors?.ingredients?.message}
            {errors.ingredients.message}
        {/if}
    </div>
    <div class="mb-4">
        <InputRichText 
            label="Description"
            name="description"
            error={errors?.description?.message}
        />
    </div>
    <div class="mb-4">
        {#await loadCategories()}
            Loading ...
        {:then categories}
            <span class="form-label d-block">Select categories</span>
            <div class="row g-2">
                {#each categories as category}
                    <div class="col-12 col-md-4 col-lg-3">
                        <Checkbox 
                            label={category.name}
                            name="categories[]"
                            value={category.slug}
                        />
                    </div>
                {/each}
            </div>
        {/await}
    </div>
    <div class="mb-4 clearfix">
        <button class="btn btn-primary float-end">Submit composition</button>
    </div>
</form>

<IngredientDialog 
    bind:element={dialogElement.value!}
    onsave={saveIngredient}
    oncancel={cancelIngredient}
/>