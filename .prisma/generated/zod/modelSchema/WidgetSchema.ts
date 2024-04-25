import { z } from 'zod';
import type { PageContentWithRelations } from './PageContentSchema'
import type { PageContentPartialWithRelations } from './PageContentSchema'
import type { PageContentOptionalDefaultsWithRelations } from './PageContentSchema'
import type { ImageWidgetWithRelations } from './ImageWidgetSchema'
import type { ImageWidgetPartialWithRelations } from './ImageWidgetSchema'
import type { ImageWidgetOptionalDefaultsWithRelations } from './ImageWidgetSchema'
import { PageContentWithRelationsSchema } from './PageContentSchema'
import { PageContentPartialWithRelationsSchema } from './PageContentSchema'
import { PageContentOptionalDefaultsWithRelationsSchema } from './PageContentSchema'
import { ImageWidgetWithRelationsSchema } from './ImageWidgetSchema'
import { ImageWidgetPartialWithRelationsSchema } from './ImageWidgetSchema'
import { ImageWidgetOptionalDefaultsWithRelationsSchema } from './ImageWidgetSchema'

/////////////////////////////////////////
// WIDGET SCHEMA
/////////////////////////////////////////

export const WidgetSchema = z.object({
  id: z.string().cuid(),
  pageContentId: z.string(),
})

export type Widget = z.infer<typeof WidgetSchema>

/////////////////////////////////////////
// WIDGET PARTIAL SCHEMA
/////////////////////////////////////////

export const WidgetPartialSchema = WidgetSchema.partial()

export type WidgetPartial = z.infer<typeof WidgetPartialSchema>

/////////////////////////////////////////
// WIDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WidgetOptionalDefaultsSchema = WidgetSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type WidgetOptionalDefaults = z.infer<typeof WidgetOptionalDefaultsSchema>

/////////////////////////////////////////
// WIDGET RELATION SCHEMA
/////////////////////////////////////////

export type WidgetRelations = {
  pageContent: PageContentWithRelations;
  imageWidget?: ImageWidgetWithRelations | null;
};

export type WidgetWithRelations = z.infer<typeof WidgetSchema> & WidgetRelations

export const WidgetWithRelationsSchema: z.ZodType<WidgetWithRelations> = WidgetSchema.merge(z.object({
  pageContent: z.lazy(() => PageContentWithRelationsSchema),
  imageWidget: z.lazy(() => ImageWidgetWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// WIDGET OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type WidgetOptionalDefaultsRelations = {
  pageContent: PageContentOptionalDefaultsWithRelations;
  imageWidget?: ImageWidgetOptionalDefaultsWithRelations | null;
};

export type WidgetOptionalDefaultsWithRelations = z.infer<typeof WidgetOptionalDefaultsSchema> & WidgetOptionalDefaultsRelations

export const WidgetOptionalDefaultsWithRelationsSchema: z.ZodType<WidgetOptionalDefaultsWithRelations> = WidgetOptionalDefaultsSchema.merge(z.object({
  pageContent: z.lazy(() => PageContentOptionalDefaultsWithRelationsSchema),
  imageWidget: z.lazy(() => ImageWidgetOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// WIDGET PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type WidgetPartialRelations = {
  pageContent?: PageContentPartialWithRelations;
  imageWidget?: ImageWidgetPartialWithRelations | null;
};

export type WidgetPartialWithRelations = z.infer<typeof WidgetPartialSchema> & WidgetPartialRelations

export const WidgetPartialWithRelationsSchema: z.ZodType<WidgetPartialWithRelations> = WidgetPartialSchema.merge(z.object({
  pageContent: z.lazy(() => PageContentPartialWithRelationsSchema),
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).nullable(),
})).partial()

export type WidgetOptionalDefaultsWithPartialRelations = z.infer<typeof WidgetOptionalDefaultsSchema> & WidgetPartialRelations

export const WidgetOptionalDefaultsWithPartialRelationsSchema: z.ZodType<WidgetOptionalDefaultsWithPartialRelations> = WidgetOptionalDefaultsSchema.merge(z.object({
  pageContent: z.lazy(() => PageContentPartialWithRelationsSchema),
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).nullable(),
}).partial())

export type WidgetWithPartialRelations = z.infer<typeof WidgetSchema> & WidgetPartialRelations

export const WidgetWithPartialRelationsSchema: z.ZodType<WidgetWithPartialRelations> = WidgetSchema.merge(z.object({
  pageContent: z.lazy(() => PageContentPartialWithRelationsSchema),
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).nullable(),
}).partial())

export default WidgetSchema;
