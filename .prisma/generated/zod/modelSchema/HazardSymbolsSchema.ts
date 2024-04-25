import { z } from 'zod';
import type { ChemicalWithRelations } from './ChemicalSchema'
import type { ChemicalPartialWithRelations } from './ChemicalSchema'
import type { ChemicalOptionalDefaultsWithRelations } from './ChemicalSchema'
import { ChemicalWithRelationsSchema } from './ChemicalSchema'
import { ChemicalPartialWithRelationsSchema } from './ChemicalSchema'
import { ChemicalOptionalDefaultsWithRelationsSchema } from './ChemicalSchema'

/////////////////////////////////////////
// HAZARD SYMBOLS SCHEMA
/////////////////////////////////////////

export const HazardSymbolsSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  symbol: z.string(),
})

export type HazardSymbols = z.infer<typeof HazardSymbolsSchema>

/////////////////////////////////////////
// HAZARD SYMBOLS PARTIAL SCHEMA
/////////////////////////////////////////

export const HazardSymbolsPartialSchema = HazardSymbolsSchema.partial()

export type HazardSymbolsPartial = z.infer<typeof HazardSymbolsPartialSchema>

/////////////////////////////////////////
// HAZARD SYMBOLS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HazardSymbolsOptionalDefaultsSchema = HazardSymbolsSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type HazardSymbolsOptionalDefaults = z.infer<typeof HazardSymbolsOptionalDefaultsSchema>

/////////////////////////////////////////
// HAZARD SYMBOLS RELATION SCHEMA
/////////////////////////////////////////

export type HazardSymbolsRelations = {
  chemicals: ChemicalWithRelations[];
};

export type HazardSymbolsWithRelations = z.infer<typeof HazardSymbolsSchema> & HazardSymbolsRelations

export const HazardSymbolsWithRelationsSchema: z.ZodType<HazardSymbolsWithRelations> = HazardSymbolsSchema.merge(z.object({
  chemicals: z.lazy(() => ChemicalWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// HAZARD SYMBOLS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type HazardSymbolsOptionalDefaultsRelations = {
  chemicals: ChemicalOptionalDefaultsWithRelations[];
};

export type HazardSymbolsOptionalDefaultsWithRelations = z.infer<typeof HazardSymbolsOptionalDefaultsSchema> & HazardSymbolsOptionalDefaultsRelations

export const HazardSymbolsOptionalDefaultsWithRelationsSchema: z.ZodType<HazardSymbolsOptionalDefaultsWithRelations> = HazardSymbolsOptionalDefaultsSchema.merge(z.object({
  chemicals: z.lazy(() => ChemicalOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// HAZARD SYMBOLS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type HazardSymbolsPartialRelations = {
  chemicals?: ChemicalPartialWithRelations[];
};

export type HazardSymbolsPartialWithRelations = z.infer<typeof HazardSymbolsPartialSchema> & HazardSymbolsPartialRelations

export const HazardSymbolsPartialWithRelationsSchema: z.ZodType<HazardSymbolsPartialWithRelations> = HazardSymbolsPartialSchema.merge(z.object({
  chemicals: z.lazy(() => ChemicalPartialWithRelationsSchema).array(),
})).partial()

export type HazardSymbolsOptionalDefaultsWithPartialRelations = z.infer<typeof HazardSymbolsOptionalDefaultsSchema> & HazardSymbolsPartialRelations

export const HazardSymbolsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<HazardSymbolsOptionalDefaultsWithPartialRelations> = HazardSymbolsOptionalDefaultsSchema.merge(z.object({
  chemicals: z.lazy(() => ChemicalPartialWithRelationsSchema).array(),
}).partial())

export type HazardSymbolsWithPartialRelations = z.infer<typeof HazardSymbolsSchema> & HazardSymbolsPartialRelations

export const HazardSymbolsWithPartialRelationsSchema: z.ZodType<HazardSymbolsWithPartialRelations> = HazardSymbolsSchema.merge(z.object({
  chemicals: z.lazy(() => ChemicalPartialWithRelationsSchema).array(),
}).partial())

export default HazardSymbolsSchema;
