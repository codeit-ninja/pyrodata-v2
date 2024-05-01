import { z } from 'zod';
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import type { CompositionWithRelations } from './CompositionSchema'
import type { CompositionPartialWithRelations } from './CompositionSchema'
import type { CompositionOptionalDefaultsWithRelations } from './CompositionSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'
import { CompositionWithRelationsSchema } from './CompositionSchema'
import { CompositionPartialWithRelationsSchema } from './CompositionSchema'
import { CompositionOptionalDefaultsWithRelationsSchema } from './CompositionSchema'

/////////////////////////////////////////
// INGREDIENT SCHEMA
/////////////////////////////////////////

export const IngredientSchema = z.object({
  id: z.string().cuid(),
  amount: z.number(),
  name: z.string(),
  note: z.string().nullable(),
  pageId: z.string().nullable(),
  compositionId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type IngredientOptionalDefaults = z.infer<typeof IngredientOptionalDefaultsSchema>

/////////////////////////////////////////
// INGREDIENT RELATION SCHEMA
/////////////////////////////////////////

export type IngredientRelations = {
  page?: PageWithRelations | null;
  composition: CompositionWithRelations;
};

export type IngredientWithRelations = z.infer<typeof IngredientSchema> & IngredientRelations

export const IngredientWithRelationsSchema: z.ZodType<IngredientWithRelations> = IngredientSchema.merge(z.object({
  page: z.lazy(() => PageWithRelationsSchema).nullable(),
  composition: z.lazy(() => CompositionWithRelationsSchema),
}))

/////////////////////////////////////////
// INGREDIENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type IngredientOptionalDefaultsRelations = {
  page?: PageOptionalDefaultsWithRelations | null;
  composition: CompositionOptionalDefaultsWithRelations;
};

export type IngredientOptionalDefaultsWithRelations = z.infer<typeof IngredientOptionalDefaultsSchema> & IngredientOptionalDefaultsRelations

export const IngredientOptionalDefaultsWithRelationsSchema: z.ZodType<IngredientOptionalDefaultsWithRelations> = IngredientOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).nullable(),
  composition: z.lazy(() => CompositionOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// INGREDIENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type IngredientPartialRelations = {
  page?: PagePartialWithRelations | null;
  composition?: CompositionPartialWithRelations;
};

export type IngredientPartialWithRelations = z.infer<typeof IngredientPartialSchema> & IngredientPartialRelations

export const IngredientPartialWithRelationsSchema: z.ZodType<IngredientPartialWithRelations> = IngredientPartialSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
})).partial()

export type IngredientOptionalDefaultsWithPartialRelations = z.infer<typeof IngredientOptionalDefaultsSchema> & IngredientPartialRelations

export const IngredientOptionalDefaultsWithPartialRelationsSchema: z.ZodType<IngredientOptionalDefaultsWithPartialRelations> = IngredientOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
}).partial())

export type IngredientWithPartialRelations = z.infer<typeof IngredientSchema> & IngredientPartialRelations

export const IngredientWithPartialRelationsSchema: z.ZodType<IngredientWithPartialRelations> = IngredientSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).nullable(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema),
}).partial())

export default IngredientSchema;
