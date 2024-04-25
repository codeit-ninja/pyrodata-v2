import { z } from 'zod';
import type { CompositionWithRelations } from './CompositionSchema'
import type { CompositionPartialWithRelations } from './CompositionSchema'
import type { CompositionOptionalDefaultsWithRelations } from './CompositionSchema'
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import { CompositionWithRelationsSchema } from './CompositionSchema'
import { CompositionPartialWithRelationsSchema } from './CompositionSchema'
import { CompositionOptionalDefaultsWithRelationsSchema } from './CompositionSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'

/////////////////////////////////////////
// INGREDIENT SCHEMA
/////////////////////////////////////////

export const IngredientSchema = z.object({
  id: z.string().cuid(),
  amount: z.number(),
  name: z.string(),
  note: z.string().nullable(),
  compositionId: z.string(),
  pageId: z.string().nullable(),
})

export type Ingredient = z.infer<typeof IngredientSchema>

/////////////////////////////////////////
// INGREDIENT PARTIAL SCHEMA
/////////////////////////////////////////

export const IngredientPartialSchema = IngredientSchema.partial()

export type IngredientPartial = z.infer<typeof IngredientPartialSchema>

/////////////////////////////////////////
// INGREDIENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IngredientOptionalDefaultsSchema = IngredientSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type IngredientOptionalDefaults = z.infer<typeof IngredientOptionalDefaultsSchema>

/////////////////////////////////////////
// INGREDIENT RELATION SCHEMA
/////////////////////////////////////////

export type IngredientRelations = {
  composition: CompositionWithRelations;
  page?: PageWithRelations | null;
};

export type IngredientWithRelations = z.infer<typeof IngredientSchema> & IngredientRelations

export const IngredientWithRelationsSchema: z.ZodType<IngredientWithRelations> = IngredientSchema.merge(z.object({
  composition: z.lazy(() => CompositionWithRelationsSchema),
  page: z.lazy(() => PageWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// INGREDIENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type IngredientOptionalDefaultsRelations = {
  composition: CompositionOptionalDefaultsWithRelations;
  page?: PageOptionalDefaultsWithRelations | null;
};

export type IngredientOptionalDefaultsWithRelations = z.infer<typeof IngredientOptionalDefaultsSchema> & IngredientOptionalDefaultsRelations

export const IngredientOptionalDefaultsWithRelationsSchema: z.ZodType<IngredientOptionalDefaultsWithRelations> = IngredientOptionalDefaultsSchema.merge(z.object({
  composition: z.lazy(() => CompositionOptionalDefaultsWithRelationsSchema),
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// INGREDIENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type IngredientPartialRelations = {
  composition?: CompositionPartialWithRelations;
  page?: PagePartialWithRelations | null;
};

export type IngredientPartialWithRelations = z.infer<typeof IngredientPartialSchema> & IngredientPartialRelations

export const IngredientPartialWithRelationsSchema: z.ZodType<IngredientPartialWithRelations> = IngredientPartialSchema.merge(z.object({
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
})).partial()

export type IngredientOptionalDefaultsWithPartialRelations = z.infer<typeof IngredientOptionalDefaultsSchema> & IngredientPartialRelations

export const IngredientOptionalDefaultsWithPartialRelationsSchema: z.ZodType<IngredientOptionalDefaultsWithPartialRelations> = IngredientOptionalDefaultsSchema.merge(z.object({
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
}).partial())

export type IngredientWithPartialRelations = z.infer<typeof IngredientSchema> & IngredientPartialRelations

export const IngredientWithPartialRelationsSchema: z.ZodType<IngredientWithPartialRelations> = IngredientSchema.merge(z.object({
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
}).partial())

export default IngredientSchema;
