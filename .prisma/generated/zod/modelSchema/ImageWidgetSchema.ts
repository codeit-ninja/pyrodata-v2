import { z } from 'zod';
import type { WidgetWithRelations } from './WidgetSchema'
import type { WidgetPartialWithRelations } from './WidgetSchema'
import type { WidgetOptionalDefaultsWithRelations } from './WidgetSchema'
import type { FileWithRelations } from './FileSchema'
import type { FilePartialWithRelations } from './FileSchema'
import type { FileOptionalDefaultsWithRelations } from './FileSchema'
import { WidgetWithRelationsSchema } from './WidgetSchema'
import { WidgetPartialWithRelationsSchema } from './WidgetSchema'
import { WidgetOptionalDefaultsWithRelationsSchema } from './WidgetSchema'
import { FileWithRelationsSchema } from './FileSchema'
import { FilePartialWithRelationsSchema } from './FileSchema'
import { FileOptionalDefaultsWithRelationsSchema } from './FileSchema'

/////////////////////////////////////////
// IMAGE WIDGET SCHEMA
/////////////////////////////////////////

export const ImageWidgetSchema = z.object({
  id: z.string().cuid(),
  widgetId: z.string(),
  fileId: z.string(),
})

export type ImageWidget = z.infer<typeof ImageWidgetSchema>

/////////////////////////////////////////
// IMAGE WIDGET PARTIAL SCHEMA
/////////////////////////////////////////

export const ImageWidgetPartialSchema = ImageWidgetSchema.partial()

export type ImageWidgetPartial = z.infer<typeof ImageWidgetPartialSchema>

/////////////////////////////////////////
// IMAGE WIDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ImageWidgetOptionalDefaultsSchema = ImageWidgetSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ImageWidgetOptionalDefaults = z.infer<typeof ImageWidgetOptionalDefaultsSchema>

/////////////////////////////////////////
// IMAGE WIDGET RELATION SCHEMA
/////////////////////////////////////////

export type ImageWidgetRelations = {
  widgets: WidgetWithRelations;
  file: FileWithRelations;
};

export type ImageWidgetWithRelations = z.infer<typeof ImageWidgetSchema> & ImageWidgetRelations

export const ImageWidgetWithRelationsSchema: z.ZodType<ImageWidgetWithRelations> = ImageWidgetSchema.merge(z.object({
  widgets: z.lazy(() => WidgetWithRelationsSchema),
  file: z.lazy(() => FileWithRelationsSchema),
}))

/////////////////////////////////////////
// IMAGE WIDGET OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ImageWidgetOptionalDefaultsRelations = {
  widgets: WidgetOptionalDefaultsWithRelations;
  file: FileOptionalDefaultsWithRelations;
};

export type ImageWidgetOptionalDefaultsWithRelations = z.infer<typeof ImageWidgetOptionalDefaultsSchema> & ImageWidgetOptionalDefaultsRelations

export const ImageWidgetOptionalDefaultsWithRelationsSchema: z.ZodType<ImageWidgetOptionalDefaultsWithRelations> = ImageWidgetOptionalDefaultsSchema.merge(z.object({
  widgets: z.lazy(() => WidgetOptionalDefaultsWithRelationsSchema),
  file: z.lazy(() => FileOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// IMAGE WIDGET PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ImageWidgetPartialRelations = {
  widgets?: WidgetPartialWithRelations;
  file?: FilePartialWithRelations;
};

export type ImageWidgetPartialWithRelations = z.infer<typeof ImageWidgetPartialSchema> & ImageWidgetPartialRelations

export const ImageWidgetPartialWithRelationsSchema: z.ZodType<ImageWidgetPartialWithRelations> = ImageWidgetPartialSchema.merge(z.object({
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema),
  file: z.lazy(() => FilePartialWithRelationsSchema),
})).partial()

export type ImageWidgetOptionalDefaultsWithPartialRelations = z.infer<typeof ImageWidgetOptionalDefaultsSchema> & ImageWidgetPartialRelations

export const ImageWidgetOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ImageWidgetOptionalDefaultsWithPartialRelations> = ImageWidgetOptionalDefaultsSchema.merge(z.object({
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema),
  file: z.lazy(() => FilePartialWithRelationsSchema),
}).partial())

export type ImageWidgetWithPartialRelations = z.infer<typeof ImageWidgetSchema> & ImageWidgetPartialRelations

export const ImageWidgetWithPartialRelationsSchema: z.ZodType<ImageWidgetWithPartialRelations> = ImageWidgetSchema.merge(z.object({
  widgets: z.lazy(() => WidgetPartialWithRelationsSchema),
  file: z.lazy(() => FilePartialWithRelationsSchema),
}).partial())

export default ImageWidgetSchema;
