import { z } from 'zod';
import type { CompositionWithRelations } from './CompositionSchema'
import type { CompositionPartialWithRelations } from './CompositionSchema'
import type { CompositionOptionalDefaultsWithRelations } from './CompositionSchema'
import { CompositionWithRelationsSchema } from './CompositionSchema'
import { CompositionPartialWithRelationsSchema } from './CompositionSchema'
import { CompositionOptionalDefaultsWithRelationsSchema } from './CompositionSchema'

/////////////////////////////////////////
// COMPOSITION CATEGORY SCHEMA
/////////////////////////////////////////

export const CompositionCategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  slug: z.string(),
})

export type CompositionCategory = z.infer<typeof CompositionCategorySchema>

/////////////////////////////////////////
// COMPOSITION CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const CompositionCategoryPartialSchema = CompositionCategorySchema.partial()

export type CompositionCategoryPartial = z.infer<typeof CompositionCategoryPartialSchema>

/////////////////////////////////////////
// COMPOSITION CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CompositionCategoryOptionalDefaultsSchema = CompositionCategorySchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type CompositionCategoryOptionalDefaults = z.infer<typeof CompositionCategoryOptionalDefaultsSchema>

/////////////////////////////////////////
// COMPOSITION CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type CompositionCategoryRelations = {
  compositions: CompositionWithRelations[];
};

export type CompositionCategoryWithRelations = z.infer<typeof CompositionCategorySchema> & CompositionCategoryRelations

export const CompositionCategoryWithRelationsSchema: z.ZodType<CompositionCategoryWithRelations> = CompositionCategorySchema.merge(z.object({
  compositions: z.lazy(() => CompositionWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COMPOSITION CATEGORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CompositionCategoryOptionalDefaultsRelations = {
  compositions: CompositionOptionalDefaultsWithRelations[];
};

export type CompositionCategoryOptionalDefaultsWithRelations = z.infer<typeof CompositionCategoryOptionalDefaultsSchema> & CompositionCategoryOptionalDefaultsRelations

export const CompositionCategoryOptionalDefaultsWithRelationsSchema: z.ZodType<CompositionCategoryOptionalDefaultsWithRelations> = CompositionCategoryOptionalDefaultsSchema.merge(z.object({
  compositions: z.lazy(() => CompositionOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COMPOSITION CATEGORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CompositionCategoryPartialRelations = {
  compositions?: CompositionPartialWithRelations[];
};

export type CompositionCategoryPartialWithRelations = z.infer<typeof CompositionCategoryPartialSchema> & CompositionCategoryPartialRelations

export const CompositionCategoryPartialWithRelationsSchema: z.ZodType<CompositionCategoryPartialWithRelations> = CompositionCategoryPartialSchema.merge(z.object({
  compositions: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
})).partial()

export type CompositionCategoryOptionalDefaultsWithPartialRelations = z.infer<typeof CompositionCategoryOptionalDefaultsSchema> & CompositionCategoryPartialRelations

export const CompositionCategoryOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CompositionCategoryOptionalDefaultsWithPartialRelations> = CompositionCategoryOptionalDefaultsSchema.merge(z.object({
  compositions: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
}).partial())

export type CompositionCategoryWithPartialRelations = z.infer<typeof CompositionCategorySchema> & CompositionCategoryPartialRelations

export const CompositionCategoryWithPartialRelationsSchema: z.ZodType<CompositionCategoryWithPartialRelations> = CompositionCategorySchema.merge(z.object({
  compositions: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
}).partial())

export default CompositionCategorySchema;
