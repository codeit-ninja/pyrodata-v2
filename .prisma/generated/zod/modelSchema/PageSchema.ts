import { z } from 'zod';
import type { FileWithRelations } from './FileSchema'
import type { FilePartialWithRelations } from './FileSchema'
import type { FileOptionalDefaultsWithRelations } from './FileSchema'
import type { PageContentWithRelations } from './PageContentSchema'
import type { PageContentPartialWithRelations } from './PageContentSchema'
import type { PageContentOptionalDefaultsWithRelations } from './PageContentSchema'
import type { CategoryWithRelations } from './CategorySchema'
import type { CategoryPartialWithRelations } from './CategorySchema'
import type { CategoryOptionalDefaultsWithRelations } from './CategorySchema'
import type { ChemicalWithRelations } from './ChemicalSchema'
import type { ChemicalPartialWithRelations } from './ChemicalSchema'
import type { ChemicalOptionalDefaultsWithRelations } from './ChemicalSchema'
import type { IngredientWithRelations } from './IngredientSchema'
import type { IngredientPartialWithRelations } from './IngredientSchema'
import type { IngredientOptionalDefaultsWithRelations } from './IngredientSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { FileWithRelationsSchema } from './FileSchema'
import { FilePartialWithRelationsSchema } from './FileSchema'
import { FileOptionalDefaultsWithRelationsSchema } from './FileSchema'
import { PageContentWithRelationsSchema } from './PageContentSchema'
import { PageContentPartialWithRelationsSchema } from './PageContentSchema'
import { PageContentOptionalDefaultsWithRelationsSchema } from './PageContentSchema'
import { CategoryWithRelationsSchema } from './CategorySchema'
import { CategoryPartialWithRelationsSchema } from './CategorySchema'
import { CategoryOptionalDefaultsWithRelationsSchema } from './CategorySchema'
import { ChemicalWithRelationsSchema } from './ChemicalSchema'
import { ChemicalPartialWithRelationsSchema } from './ChemicalSchema'
import { ChemicalOptionalDefaultsWithRelationsSchema } from './ChemicalSchema'
import { IngredientWithRelationsSchema } from './IngredientSchema'
import { IngredientPartialWithRelationsSchema } from './IngredientSchema'
import { IngredientOptionalDefaultsWithRelationsSchema } from './IngredientSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// PAGE SCHEMA
/////////////////////////////////////////

export const PageSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().nullable(),
  userId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Page = z.infer<typeof PageSchema>

/////////////////////////////////////////
// PAGE PARTIAL SCHEMA
/////////////////////////////////////////

export const PagePartialSchema = PageSchema.partial()

export type PagePartial = z.infer<typeof PagePartialSchema>

/////////////////////////////////////////
// PAGE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PageOptionalDefaultsSchema = PageSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PageOptionalDefaults = z.infer<typeof PageOptionalDefaultsSchema>

/////////////////////////////////////////
// PAGE RELATION SCHEMA
/////////////////////////////////////////

export type PageRelations = {
  featuredImage?: FileWithRelations | null;
  content: PageContentWithRelations;
  category?: CategoryWithRelations | null;
  chemical?: ChemicalWithRelations | null;
  ingredients: IngredientWithRelations[];
  user?: UserWithRelations | null;
};

export type PageWithRelations = z.infer<typeof PageSchema> & PageRelations

export const PageWithRelationsSchema: z.ZodType<PageWithRelations> = PageSchema.merge(z.object({
  featuredImage: z.lazy(() => FileWithRelationsSchema).nullable(),
  content: z.lazy(() => PageContentWithRelationsSchema),
  category: z.lazy(() => CategoryWithRelationsSchema).nullable(),
  chemical: z.lazy(() => ChemicalWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientWithRelationsSchema).array(),
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PAGE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PageOptionalDefaultsRelations = {
  featuredImage?: FileOptionalDefaultsWithRelations | null;
  content: PageContentOptionalDefaultsWithRelations;
  category?: CategoryOptionalDefaultsWithRelations | null;
  chemical?: ChemicalOptionalDefaultsWithRelations | null;
  ingredients: IngredientOptionalDefaultsWithRelations[];
  user?: UserOptionalDefaultsWithRelations | null;
};

export type PageOptionalDefaultsWithRelations = z.infer<typeof PageOptionalDefaultsSchema> & PageOptionalDefaultsRelations

export const PageOptionalDefaultsWithRelationsSchema: z.ZodType<PageOptionalDefaultsWithRelations> = PageOptionalDefaultsSchema.merge(z.object({
  featuredImage: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).nullable(),
  content: z.lazy(() => PageContentOptionalDefaultsWithRelationsSchema),
  category: z.lazy(() => CategoryOptionalDefaultsWithRelationsSchema).nullable(),
  chemical: z.lazy(() => ChemicalOptionalDefaultsWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientOptionalDefaultsWithRelationsSchema).array(),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PAGE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PagePartialRelations = {
  featuredImage?: FilePartialWithRelations | null;
  content?: PageContentPartialWithRelations;
  category?: CategoryPartialWithRelations | null;
  chemical?: ChemicalPartialWithRelations | null;
  ingredients?: IngredientPartialWithRelations[];
  user?: UserPartialWithRelations | null;
};

export type PagePartialWithRelations = z.infer<typeof PagePartialSchema> & PagePartialRelations

export const PagePartialWithRelationsSchema: z.ZodType<PagePartialWithRelations> = PagePartialSchema.merge(z.object({
  featuredImage: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  content: z.lazy(() => PageContentPartialWithRelationsSchema),
  category: z.lazy(() => CategoryPartialWithRelationsSchema).nullable(),
  chemical: z.lazy(() => ChemicalPartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
})).partial()

export type PageOptionalDefaultsWithPartialRelations = z.infer<typeof PageOptionalDefaultsSchema> & PagePartialRelations

export const PageOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PageOptionalDefaultsWithPartialRelations> = PageOptionalDefaultsSchema.merge(z.object({
  featuredImage: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  content: z.lazy(() => PageContentPartialWithRelationsSchema),
  category: z.lazy(() => CategoryPartialWithRelationsSchema).nullable(),
  chemical: z.lazy(() => ChemicalPartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
}).partial())

export type PageWithPartialRelations = z.infer<typeof PageSchema> & PagePartialRelations

export const PageWithPartialRelationsSchema: z.ZodType<PageWithPartialRelations> = PageSchema.merge(z.object({
  featuredImage: z.lazy(() => FilePartialWithRelationsSchema).nullable(),
  content: z.lazy(() => PageContentPartialWithRelationsSchema),
  category: z.lazy(() => CategoryPartialWithRelationsSchema).nullable(),
  chemical: z.lazy(() => ChemicalPartialWithRelationsSchema).nullable(),
  ingredients: z.lazy(() => IngredientPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
}).partial())

export default PageSchema;
