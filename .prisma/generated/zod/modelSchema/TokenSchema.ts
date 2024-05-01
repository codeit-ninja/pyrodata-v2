import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  id: z.number().int(),
  token: z.string(),
  userId: z.string(),
})

export type Token = z.infer<typeof TokenSchema>

/////////////////////////////////////////
// TOKEN PARTIAL SCHEMA
/////////////////////////////////////////

export const TokenPartialSchema = TokenSchema.partial()

export type TokenPartial = z.infer<typeof TokenPartialSchema>

/////////////////////////////////////////
// TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TokenOptionalDefaultsSchema = TokenSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type TokenOptionalDefaults = z.infer<typeof TokenOptionalDefaultsSchema>

/////////////////////////////////////////
// TOKEN RELATION SCHEMA
/////////////////////////////////////////

export type TokenRelations = {
  user: UserWithRelations;
};

export type TokenWithRelations = z.infer<typeof TokenSchema> & TokenRelations

export const TokenWithRelationsSchema: z.ZodType<TokenWithRelations> = TokenSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// TOKEN OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type TokenOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
};

export type TokenOptionalDefaultsWithRelations = z.infer<typeof TokenOptionalDefaultsSchema> & TokenOptionalDefaultsRelations

export const TokenOptionalDefaultsWithRelationsSchema: z.ZodType<TokenOptionalDefaultsWithRelations> = TokenOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// TOKEN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TokenPartialRelations = {
  user?: UserPartialWithRelations;
};

export type TokenPartialWithRelations = z.infer<typeof TokenPartialSchema> & TokenPartialRelations

export const TokenPartialWithRelationsSchema: z.ZodType<TokenPartialWithRelations> = TokenPartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type TokenOptionalDefaultsWithPartialRelations = z.infer<typeof TokenOptionalDefaultsSchema> & TokenPartialRelations

export const TokenOptionalDefaultsWithPartialRelationsSchema: z.ZodType<TokenOptionalDefaultsWithPartialRelations> = TokenOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export type TokenWithPartialRelations = z.infer<typeof TokenSchema> & TokenPartialRelations

export const TokenWithPartialRelationsSchema: z.ZodType<TokenWithPartialRelations> = TokenSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export default TokenSchema;
