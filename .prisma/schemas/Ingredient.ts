import type { Infer } from '@vinejs/vine/types';
import vine from '@vinejs/vine';

export const IngredientSchema = vine.object({
    amount: vine.number().min(1).max(100),
    name: vine.string(),
    note: vine.string().optional(),
    pageId: vine.string().optional()
})

export type IngredientSchema = Infer<typeof IngredientSchema>;

export const validator = vine.compile(IngredientSchema);
export const defaults: Partial<IngredientSchema> = {
    amount: undefined,
    name: undefined,
    note: undefined,
    pageId: undefined
}