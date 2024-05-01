import Ingredient from "./Ingredient.svelte";

export type IngredientProps = {
    name: string;
    amount: number;
    note?: string;
    pageId?: string;
    page?: Record<string, any>;
}

export {
    Ingredient
}