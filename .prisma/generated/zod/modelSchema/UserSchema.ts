import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { SessionPartialWithRelations } from './SessionSchema'
import type { SessionOptionalDefaultsWithRelations } from './SessionSchema'
import type { FileWithRelations } from './FileSchema'
import type { FilePartialWithRelations } from './FileSchema'
import type { FileOptionalDefaultsWithRelations } from './FileSchema'
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { SessionPartialWithRelationsSchema } from './SessionSchema'
import { SessionOptionalDefaultsWithRelationsSchema } from './SessionSchema'
import { FileWithRelationsSchema } from './FileSchema'
import { FilePartialWithRelationsSchema } from './FileSchema'
import { FileOptionalDefaultsWithRelationsSchema } from './FileSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().cuid(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  role: RoleSchema.optional(),
  id: z.string().cuid().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  session?: SessionWithRelations | null;
  files: FileWithRelations[];
  pages: PageWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  session: z.lazy(() => SessionWithRelationsSchema).nullable(),
  files: z.lazy(() => FileWithRelationsSchema).array(),
  pages: z.lazy(() => PageWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
  session?: SessionOptionalDefaultsWithRelations | null;
  files: FileOptionalDefaultsWithRelations[];
  pages: PageOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  session: z.lazy(() => SessionOptionalDefaultsWithRelationsSchema).nullable(),
  files: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).array(),
  pages: z.lazy(() => PageOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  session?: SessionPartialWithRelations | null;
  files?: FilePartialWithRelations[];
  pages?: PagePartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  session: z.lazy(() => SessionPartialWithRelationsSchema).nullable(),
  files: z.lazy(() => FilePartialWithRelationsSchema).array(),
  pages: z.lazy(() => PagePartialWithRelationsSchema).array(),
})).partial()

export type UserOptionalDefaultsWithPartialRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserPartialRelations

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> = UserOptionalDefaultsSchema.merge(z.object({
  session: z.lazy(() => SessionPartialWithRelationsSchema).nullable(),
  files: z.lazy(() => FilePartialWithRelationsSchema).array(),
  pages: z.lazy(() => PagePartialWithRelationsSchema).array(),
}).partial())

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  session: z.lazy(() => SessionPartialWithRelationsSchema).nullable(),
  files: z.lazy(() => FilePartialWithRelationsSchema).array(),
  pages: z.lazy(() => PagePartialWithRelationsSchema).array(),
}).partial())

export default UserSchema;
