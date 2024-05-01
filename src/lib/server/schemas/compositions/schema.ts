import { vine } from "$lib/vine";
import type { Infer } from "@vinejs/vine/types"

export const createCompositionSchema = vine.object({
    name: vine.string().minLength(5),
    description: vine.string().optional(),
    videoId: vine.string().minLength(12),
    ingredients: vine.array(vine.object({
        amount: vine.number().min(1).max(100),
        name: vine.string().minLength(2),
        note: vine.string().minLength(2).optional()
    })),
    badges: vine.array(vine.enum(['VERIFIED', 'DANGEROUS', 'EXPERT', 'FAVORITE', 'BEGINNER_FRIENDLY'])).optional()
})

export type createCompositionSchema = Infer<typeof createCompositionSchema>

export const validator = vine.compile(createCompositionSchema);