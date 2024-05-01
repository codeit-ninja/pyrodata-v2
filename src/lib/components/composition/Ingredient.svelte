<script lang="ts">
    import type { IngredientProps } from "$lib/components/composition/Ingredient";

    let {
        amount,
        name,
        note,
        page,
        pageId
    }: IngredientProps = $props();
</script>
<div class="ingredient">
    <span class="ingredient--amount">{amount}</span>
    {#if page}
        <a href={``}>{ page.title }</a>
    {:else}
        { name }
    {/if}
    {#if note}
        <span class="ingredient--note">({ note })</span>
    {/if}
</div>
<style>
    .ingredient {
        display: flex;
        gap: 1rem;

        .ingredient--amount {
            width: 30px;
        }

        .ingredient--note {
            color: var(--bs-gray-200);
        }
    }
</style>