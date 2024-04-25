import { z } from 'zod';
import type { HazardSymbolsWithRelations } from './HazardSymbolsSchema'
import type { HazardSymbolsPartialWithRelations } from './HazardSymbolsSchema'
import type { HazardSymbolsOptionalDefaultsWithRelations } from './HazardSymbolsSchema'
import type { PageWithRelations } from './PageSchema'
import type { PagePartialWithRelations } from './PageSchema'
import type { PageOptionalDefaultsWithRelations } from './PageSchema'
import { HazardSymbolsWithRelationsSchema } from './HazardSymbolsSchema'
import { HazardSymbolsPartialWithRelationsSchema } from './HazardSymbolsSchema'
import { HazardSymbolsOptionalDefaultsWithRelationsSchema } from './HazardSymbolsSchema'
import { PageWithRelationsSchema } from './PageSchema'
import { PagePartialWithRelationsSchema } from './PageSchema'
import { PageOptionalDefaultsWithRelationsSchema } from './PageSchema'

/////////////////////////////////////////
// CHEMICAL SCHEMA
/////////////////////////////////////////

export const ChemicalSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  formula: z.string().nullable(),
  pageId: z.string(),
})

export type Chemical = z.infer<typeof ChemicalSchema>

/////////////////////////////////////////
// CHEMICAL PARTIAL SCHEMA
/////////////////////////////////////////

export const ChemicalPartialSchema = ChemicalSchema.partial()

export type ChemicalPartial = z.infer<typeof ChemicalPartialSchema>

/////////////////////////////////////////
// CHEMICAL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ChemicalOptionalDefaultsSchema = ChemicalSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ChemicalOptionalDefaults = z.infer<typeof ChemicalOptionalDefaultsSchema>

/////////////////////////////////////////
// CHEMICAL RELATION SCHEMA
/////////////////////////////////////////

export type ChemicalRelations = {
  hazards: HazardSymbolsWithRelations[];
  page: PageWithRelations;
};

export type ChemicalWithRelations = z.infer<typeof ChemicalSchema> & ChemicalRelations

export const ChemicalWithRelationsSchema: z.ZodType<ChemicalWithRelations> = ChemicalSchema.merge(z.object({
  hazards: z.lazy(() => HazardSymbolsWithRelationsSchema).array(),
  page: z.lazy(() => PageWithRelationsSchema),
}))

/////////////////////////////////////////
// CHEMICAL OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ChemicalOptionalDefaultsRelations = {
  hazards: HazardSymbolsOptionalDefaultsWithRelations[];
  page: PageOptionalDefaultsWithRelations;
};

export type ChemicalOptionalDefaultsWithRelations = z.infer<typeof ChemicalOptionalDefaultsSchema> & ChemicalOptionalDefaultsRelations

export const ChemicalOptionalDefaultsWithRelationsSchema: z.ZodType<ChemicalOptionalDefaultsWithRelations> = ChemicalOptionalDefaultsSchema.merge(z.object({
  hazards: z.lazy(() => HazardSymbolsOptionalDefaultsWithRelationsSchema).array(),
  page: z.lazy(() => PageOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CHEMICAL PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ChemicalPartialRelations = {
  hazards?: HazardSymbolsPartialWithRelations[];
  page?: PagePartialWithRelations;
};

export type ChemicalPartialWithRelations = z.infer<typeof ChemicalPartialSchema> & ChemicalPartialRelations

export const ChemicalPartialWithRelationsSchema: z.ZodType<ChemicalPartialWithRelations> = ChemicalPartialSchema.merge(z.object({
  hazards: z.lazy(() => HazardSymbolsPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema),
})).partial()

export type ChemicalOptionalDefaultsWithPartialRelations = z.infer<typeof ChemicalOptionalDefaultsSchema> & ChemicalPartialRelations

export const ChemicalOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ChemicalOptionalDefaultsWithPartialRelations> = ChemicalOptionalDefaultsSchema.merge(z.object({
  hazards: z.lazy(() => HazardSymbolsPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema),
}).partial())

export type ChemicalWithPartialRelations = z.infer<typeof ChemicalSchema> & ChemicalPartialRelations

export const ChemicalWithPartialRelationsSchema: z.ZodType<ChemicalWithPartialRelations> = ChemicalSchema.merge(z.object({
  hazards: z.lazy(() => HazardSymbolsPartialWithRelationsSchema).array(),
  page: z.lazy(() => PagePartialWithRelationsSchema),
}).partial())

export default ChemicalSchema;
