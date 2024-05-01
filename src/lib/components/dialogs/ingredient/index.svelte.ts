import type { createIngredientSchema } from '$lib/server/schemas/ingredients/schema';
import IngredientDialog from './component.svelte';

export type ComponentProps = {
    element: HTMLDialogElement;
    onsave?: (ingredient: any) => void;
    oncancel?: () => void;
    value?: createIngredientSchema;
}

export const dialogElement = $state<{ value?: HTMLDialogElement }>({ value: undefined });
export const ingredient = $state<{ value: createIngredientSchema }>({ value: {
    amount: 0,
    name: '',
    note: undefined,
    pageId: undefined
} });

export {
    IngredientDialog
}