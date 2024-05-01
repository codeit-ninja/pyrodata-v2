import { vine } from "$lib/vine";
import type { Infer } from "@vinejs/vine/types"

export const createIngredientSchema = vine.object({
    amount: vine.number().min(0.1).max(100),
    name: vine.string().minLength(2),
    note: vine.string().optional(),
    pageId: vine.string().optional()
})

export type createIngredientSchema = Infer<typeof createIngredientSchema>

export const validator = vine.compile(createIngredientSchema);