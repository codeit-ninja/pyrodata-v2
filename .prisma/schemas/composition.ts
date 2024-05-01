import { UserSchema } from './user';
import { FileSchema } from './file';
import { CompositionIngredientSchema } from './compositionIngredient';
import { CategoryCompositionSchema } from './compositionCategory';
import vine from '@vinejs/vine'
import type { Infer } from '@vinejs/vine/types'

export const CompositionSchema = vine.object({
    name: vine.string().minLength(5),
    description: vine.string().optional(),
    video: FileSchema.clone(),
    submittedBy: UserSchema.clone()
})

export const CompositionSchemaDefaults: Partial<Infer<typeof CompositionSchema>> = {
    description: undefined,
    name: undefined,
    video: undefined,
    submittedBy: undefined
}

export type CompositionSchema = Infer<typeof CompositionSchema>;

// export const CompositionBadgesSchema = z.enum(['VERIFIED','DANGEROUS','EXPERT','FAVORITE','BEGINNER_FRIENDLY']);

// export const CompositionSchema = z.object({
//     name: z.string().min(1),
//     description: z.string().optional(),
//     video: z.union([
//         FileSchema,
//         FileSchema.pick({ location: true })
//     ]),
//     submittedBy: z.lazy(() => UserSchema).optional(),
// })

// export const CompositionWithRelationsSchema = CompositionSchema.merge(z.object({
//     ingredients: z.lazy(() => CompositionIngredientSchema).array(),
//     categories: z.lazy(() => CategoryCompositionSchema).array().default([]),
//     badges: CompositionBadgesSchema.array().default([]),
// }))

// export type CompositionSchema = z.infer<typeof CompositionSchema>;
// export type CompositionWithRelationsSchema = z.infer<typeof CompositionWithRelationsSchema>;