import { z } from 'zod';
import type { ImageWidgetWithRelations } from './ImageWidgetSchema'
import type { ImageWidgetPartialWithRelations } from './ImageWidgetSchema'
import type { ImageWidgetOptionalDefaultsWithRelations } from './ImageWidgetSchema'
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import type { CompositionWithRelations } from './CompositionSchema'
import type { CompositionPartialWithRelations } from './CompositionSchema'
import type { CompositionOptionalDefaultsWithRelations } from './CompositionSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { ImageWidgetWithRelationsSchema } from './ImageWidgetSchema'
import { ImageWidgetPartialWithRelationsSchema } from './ImageWidgetSchema'
import { ImageWidgetOptionalDefaultsWithRelationsSchema } from './ImageWidgetSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'
import { CompositionWithRelationsSchema } from './CompositionSchema'
import { CompositionPartialWithRelationsSchema } from './CompositionSchema'
import { CompositionOptionalDefaultsWithRelationsSchema } from './CompositionSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// FILE SCHEMA
/////////////////////////////////////////

export const FileSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  mimeType: z.string().nullable(),
  userId: z.string().nullable(),
})

export type File = z.infer<typeof FileSchema>

/////////////////////////////////////////
// FILE PARTIAL SCHEMA
/////////////////////////////////////////

export const FilePartialSchema = FileSchema.partial()

export type FilePartial = z.infer<typeof FilePartialSchema>

/////////////////////////////////////////
// FILE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FileOptionalDefaultsSchema = FileSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type FileOptionalDefaults = z.infer<typeof FileOptionalDefaultsSchema>

/////////////////////////////////////////
// FILE RELATION SCHEMA
/////////////////////////////////////////

export type FileRelations = {
  imageWidget: ImageWidgetWithRelations[];
  page: PageWithRelations[];
  composition: CompositionWithRelations[];
  user?: UserWithRelations | null;
};

export type FileWithRelations = z.infer<typeof FileSchema> & FileRelations

export const FileWithRelationsSchema: z.ZodType<FileWithRelations> = FileSchema.merge(z.object({
  imageWidget: z.lazy(() => ImageWidgetWithRelationsSchema).array(),
  page: z.lazy(() => PageWithRelationsSchema).array(),
  composition: z.lazy(() => CompositionWithRelationsSchema).array(),
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// FILE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type FileOptionalDefaultsRelations = {
  imageWidget: ImageWidgetOptionalDefaultsWithRelations[];
  page: PageOptionalDefaultsWithRelations[];
  composition: CompositionOptionalDefaultsWithRelations[];
  user?: UserOptionalDefaultsWithRelations | null;
};

export type FileOptionalDefaultsWithRelations = z.infer<typeof FileOptionalDefaultsSchema> & FileOptionalDefaultsRelations

export const FileOptionalDefaultsWithRelationsSchema: z.ZodType<FileOptionalDefaultsWithRelations> = FileOptionalDefaultsSchema.merge(z.object({
  imageWidget: z.lazy(() => ImageWidgetOptionalDefaultsWithRelationsSchema).array(),
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).array(),
  composition: z.lazy(() => CompositionOptionalDefaultsWithRelationsSchema).array(),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// FILE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type FilePartialRelations = {
  imageWidget?: ImageWidgetPartialWithRelations[];
  page?: PagePartialWithRelations[];
  composition?: CompositionPartialWithRelations[];
  user?: UserPartialWithRelations | null;
};

export type FilePartialWithRelations = z.infer<typeof FilePartialSchema> & FilePartialRelations

export const FilePartialWithRelationsSchema: z.ZodType<FilePartialWithRelations> = FilePartialSchema.merge(z.object({
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
})).partial()

export type FileOptionalDefaultsWithPartialRelations = z.infer<typeof FileOptionalDefaultsSchema> & FilePartialRelations

export const FileOptionalDefaultsWithPartialRelationsSchema: z.ZodType<FileOptionalDefaultsWithPartialRelations> = FileOptionalDefaultsSchema.merge(z.object({
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
}).partial())

export type FileWithPartialRelations = z.infer<typeof FileSchema> & FilePartialRelations

export const FileWithPartialRelationsSchema: z.ZodType<FileWithPartialRelations> = FileSchema.merge(z.object({
  imageWidget: z.lazy(() => ImageWidgetPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema).array(),
  composition: z.lazy(() => CompositionPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema).nullable(),
}).partial())

export default FileSchema;
