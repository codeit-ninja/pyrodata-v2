<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import Dialog from '$lib/components/Dialog.svelte';
    import { onMount } from "svelte";
    import IngredientDropdown from "$lib/components/dropdowns/Ingredient.svelte";
    import type { Prisma } from "@prisma/client";
    import type { Ingredient } from "$prisma/zod";
    import IngredientDialog from "$lib/components/dialogs/IngredientDialog.svelte";
    import CreateCompositionForm from "$lib/components/forms/composition/CreateCompositionForm.svelte";

    let ingredientDialog = $state<HTMLDialogElement>();

    const { data } = $props();
    //const { form, errors, constraints, message, enhance } = superForm(data.form, { dataType: 'json' });

    // const addIngredient = (ingredient: any) => {
    //     $form.ingredients = [...$form.ingredients, ingredient];
    // }

    // const showIngredientDialog = () => {
    //     ingredientDialog?.showModal()
    //}
</script>
<div class="page">
    <div class="page--title d-flex align-items-center">
        <h1>Composition</h1>
    </div>
    <div class="page--content">
        <section>
            <CreateCompositionForm data={data.form.data} />
            <!-- <form class="w-lg-60" method="POST" use:enhance>
                <h3>Submit a composition</h3>
                <div class="mb-5">
                    <label class="form-label" for="name">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Composition name"
                        name="name"
                        id="name"
                        bind:value={$form.name}
                        {...$constraints.name}
                    />
                </div>
                <div class="mb-5 clearfix">
                    <span class="d-block mb-3">Ingredients</span>
                    {#each $form.ingredients as ingredient}
                        <div class="ingredient mb-2">
                            <span class="name">
                                {ingredient.name}
                                {#if ingredient.note}
                                    <span class="text-muted">({ingredient.note})</span>
                                {/if}
                            </span>
                            <span class="amount ms-auto">{ingredient.amount} </span>
                        </div>
                    {/each}
                    <button type="button" class="btn btn-outline-primary" onclick={showIngredientDialog}>Add ingredient</button>
                </div>
                <div class="mb-5">
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" id="description" rows="5"></textarea>
                </div>
            </form> -->
        </section>
    </div>
</div>
<!-- <IngredientDialog bind:element={ingredientDialog!} onadd={addIngredient} /> -->