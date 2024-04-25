import { z } from 'zod';
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  title: z.string(),
  slug: z.string(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const CategoryPartialSchema = CategorySchema.partial()

export type CategoryPartial = z.infer<typeof CategoryPartialSchema>

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CategoryOptionalDefaultsSchema = CategorySchema.merge(z.object({
}))

export type CategoryOptionalDefaults = z.infer<typeof CategoryOptionalDefaultsSchema>

/////////////////////////////////////////
// CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type CategoryRelations = {
  page: PageWithRelations[];
};

export type CategoryWithRelations = z.infer<typeof CategorySchema> & CategoryRelations

export const CategoryWithRelationsSchema: z.ZodType<CategoryWithRelations> = CategorySchema.merge(z.object({
  page: z.lazy(() => PageWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CategoryOptionalDefaultsRelations = {
  page: PageOptionalDefaultsWithRelations[];
};

export type CategoryOptionalDefaultsWithRelations = z.infer<typeof CategoryOptionalDefaultsSchema> & CategoryOptionalDefaultsRelations

export const CategoryOptionalDefaultsWithRelationsSchema: z.ZodType<CategoryOptionalDefaultsWithRelations> = CategoryOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CATEGORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CategoryPartialRelations = {
  page?: PagePartialWithRelations[];
};

export type CategoryPartialWithRelations = z.infer<typeof CategoryPartialSchema> & CategoryPartialRelations

export const CategoryPartialWithRelationsSchema: z.ZodType<CategoryPartialWithRelations> = CategoryPartialSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
})).partial()

export type CategoryOptionalDefaultsWithPartialRelations = z.infer<typeof CategoryOptionalDefaultsSchema> & CategoryPartialRelations

export const CategoryOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CategoryOptionalDefaultsWithPartialRelations> = CategoryOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
}).partial())

export type CategoryWithPartialRelations = z.infer<typeof CategorySchema> & CategoryPartialRelations

export const CategoryWithPartialRelationsSchema: z.ZodType<CategoryWithPartialRelations> = CategorySchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
}).partial())

export default CategorySchema;
