import { z } from 'zod';
import { CompositionBadgesSchema } from '../inputTypeSchemas/CompositionBadgesSchema'
import type { FileWithRelations } from './FileSchema'
import type { FilePartialWithRelations } from './FileSchema'
import type { FileOptionalDefaultsWithRelations } from './FileSchema'
import type { IngredientWithRelations } from './IngredientSchema'
import type { IngredientPartialWithRelations } from './IngredientSchema'
import type { IngredientOptionalDefaultsWithRelations } from './IngredientSchema'
import type { CompositionCategoryWithRelations } from './CompositionCategorySchema'
import type { CompositionCategoryPartialWithRelations } from './CompositionCategorySchema'
import type { CompositionCategoryOptionalDefaultsWithRelations } from './CompositionCategorySchema'
import { FileWithRelationsSchema } from './FileSchema'
import { FilePartialWithRelationsSchema } from './FileSchema'
import { FileOptionalDefaultsWithRelationsSchema } from './FileSchema'
import { IngredientWithRelationsSchema } from './IngredientSchema'
import { IngredientPartialWithRelationsSchema } from './IngredientSchema'
import { IngredientOptionalDefaultsWithRelationsSchema } from './IngredientSchema'
import { CompositionCategoryWithRelationsSchema } from './CompositionCategorySchema'
import { CompositionCategoryPartialWithRelationsSchema } from './CompositionCategorySchema'
import { CompositionCategoryOptionalDefaultsWithRelationsSchema } from './CompositionCategorySchema'

/////////////////////////////////////////
// COMPOSITION SCHEMA
/////////////////////////////////////////

export const CompositionSchema = z.object({
  badges: CompositionBadgesSchema.array(),
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  videoId: z.string().nullable(),
})

export type Composition = z.infer<typeof CompositionSchema>

/////////////////////////////////////////
// COMPOSITION PARTIAL SCHEMA
/////////////////////////////////////////

export const CompositionPartialSchema = CompositionSchema.partial()

export type CompositionPartial = z.infer<typeof CompositionPartialSchema>

/////////////////////////////////////////
// COMPOSITION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CompositionOptionalDefaultsSchema = CompositionSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type CompositionOptionalDefaults = z.infer<typeof CompositionOptionalDefaultsSchema>

/////////////////////////////////////////
// COMPOSITION RELATION SCHEMA
/////////////////////////////////////////

export type CompositionRelations = {
  video?: FileWithRelations | null;
  ingredients: IngredientWithRelations[];
  categories: CompositionCategoryWithRelations[];
};

export type CompositionWithRelations = z.infer<typeof CompositionSchema> & CompositionRelations

export const CompositionWithRelationsSchema: z.ZodType<CompositionWithRelations> = CompositionSchema.merge(z.object({
  video: z.lazy(() => FileWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientWithRelationsSchema).array(),
  categories: z.lazy(() => CompositionCategoryWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COMPOSITION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CompositionOptionalDefaultsRelations = {
  video?: FileOptionalDefaultsWithRelations | null;
  ingredients: IngredientOptionalDefaultsWithRelations[];
  categories: CompositionCategoryOptionalDefaultsWithRelations[];
};

export type CompositionOptionalDefaultsWithRelations = z.infer<typeof CompositionOptionalDefaultsSchema> & CompositionOptionalDefaultsRelations

export const CompositionOptionalDefaultsWithRelationsSchema: z.ZodType<CompositionOptionalDefaultsWithRelations> = CompositionOptionalDefaultsSchema.merge(z.object({
  video: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientOptionalDefaultsWithRelationsSchema).array(),
  categories: z.lazy(() => CompositionCategoryOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COMPOSITION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CompositionPartialRelations = {
  video?: FilePartialWithRelations | null;
  ingredients?: IngredientPartialWithRelations[];
  categories?: CompositionCategoryPartialWithRelations[];
};

export type CompositionPartialWithRelations = z.infer<typeof CompositionPartialSchema> & CompositionPartialRelations

export const CompositionPartialWithRelationsSchema: z.ZodType<CompositionPartialWithRelations> = CompositionPartialSchema.merge(z.object({
  video: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  categories: z.lazy(() => CompositionCategoryPartialWithRelationsSchema).array(),
})).partial()

export type CompositionOptionalDefaultsWithPartialRelations = z.infer<typeof CompositionOptionalDefaultsSchema> & CompositionPartialRelations

export const CompositionOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CompositionOptionalDefaultsWithPartialRelations> = CompositionOptionalDefaultsSchema.merge(z.object({
  video: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  categories: z.lazy(() => CompositionCategoryPartialWithRelationsSchema).array(),
}).partial())

export type CompositionWithPartialRelations = z.infer<typeof CompositionSchema> & CompositionPartialRelations

export const CompositionWithPartialRelationsSchema: z.ZodType<CompositionWithPartialRelations> = CompositionSchema.merge(z.object({
  video: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  categories: z.lazy(() => CompositionCategoryPartialWithRelationsSchema).array(),
}).partial())

export default CompositionSchema;
