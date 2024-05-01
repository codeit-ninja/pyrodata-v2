import vine from '@vinejs/vine'
import { IngredientSchema } from './Ingredient';
import type { Infer } from '@vinejs/vine/types';

export const CompositionSchema = vine.object({
    name: vine.string().minLength(5),
    description: vine.string().optional(),
    videoId: vine.string(),
    ingredients: vine.array(IngredientSchema.clone()).notEmpty()
})

export type CompositionSchema = Infer<typeof CompositionSchema>;

export const validator = vine.compile(CompositionSchema);
export const defaults: Partial<CompositionSchema> = {
    name: undefined,
    description: undefined,
    videoId: undefined,
    ingredients: []
}