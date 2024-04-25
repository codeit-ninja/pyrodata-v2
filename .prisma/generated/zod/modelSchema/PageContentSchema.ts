import { z } from 'zod';
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import type { WidgetWithRelations } from './WidgetSchema'
import type { WidgetPartialWithRelations } from './WidgetSchema'
import type { WidgetOptionalDefaultsWithRelations } from './WidgetSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'
import { WidgetWithRelationsSchema } from './WidgetSchema'
import { WidgetPartialWithRelationsSchema } from './WidgetSchema'
import { WidgetOptionalDefaultsWithRelationsSchema } from './WidgetSchema'

/////////////////////////////////////////
// PAGE CONTENT SCHEMA
/////////////////////////////////////////

export const PageContentSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  html: z.string(),
  sidebar: z.boolean(),
})

export type PageContent = z.infer<typeof PageContentSchema>

/////////////////////////////////////////
// PAGE CONTENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PageContentPartialSchema = PageContentSchema.partial()

export type PageContentPartial = z.infer<typeof PageContentPartialSchema>

/////////////////////////////////////////
// PAGE CONTENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PageContentOptionalDefaultsSchema = PageContentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
}))

export type PageContentOptionalDefaults = z.infer<typeof PageContentOptionalDefaultsSchema>

/////////////////////////////////////////
// PAGE CONTENT RELATION SCHEMA
/////////////////////////////////////////

export type PageContentRelations = {
  page: PageWithRelations[];
  widgets: WidgetWithRelations[];
};

export type PageContentWithRelations = z.infer<typeof PageContentSchema> & PageContentRelations

export const PageContentWithRelationsSchema: z.ZodType<PageContentWithRelations> = PageContentSchema.merge(z.object({
  page: z.lazy(() => PageWithRelationsSchema).array(),
  widgets: z.lazy(() => WidgetWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PAGE CONTENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PageContentOptionalDefaultsRelations = {
  page: PageOptionalDefaultsWithRelations[];
  widgets: WidgetOptionalDefaultsWithRelations[];
};

export type PageContentOptionalDefaultsWithRelations = z.infer<typeof PageContentOptionalDefaultsSchema> & PageContentOptionalDefaultsRelations

export const PageContentOptionalDefaultsWithRelationsSchema: z.ZodType<PageContentOptionalDefaultsWithRelations> = PageContentOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).array(),
  widgets: z.lazy(() => WidgetOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PAGE CONTENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PageContentPartialRelations = {
  page?: PagePartialWithRelations[];
  widgets?: WidgetPartialWithRelations[];
};

export type PageContentPartialWithRelations = z.infer<typeof PageContentPartialSchema> & PageContentPartialRelations

export const PageContentPartialWithRelationsSchema: z.ZodType<PageContentPartialWithRelations> = PageContentPartialSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema).array(),
})).partial()

export type PageContentOptionalDefaultsWithPartialRelations = z.infer<typeof PageContentOptionalDefaultsSchema> & PageContentPartialRelations

export const PageContentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PageContentOptionalDefaultsWithPartialRelations> = PageContentOptionalDefaultsSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema).array(),
}).partial())

export type PageContentWithPartialRelations = z.infer<typeof PageContentSchema> & PageContentPartialRelations

export const PageContentWithPartialRelationsSchema: z.ZodType<PageContentWithPartialRelations> = PageContentSchema.merge(z.object({
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema).array(),
}).partial())

export default PageContentSchema;
