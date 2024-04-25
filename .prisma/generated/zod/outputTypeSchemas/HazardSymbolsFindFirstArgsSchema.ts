import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsIncludeSchema } from '../inputTypeSchemas/HazardSymbolsIncludeSchema'
import { HazardSymbolsWhereInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereInputSchema'
import { HazardSymbolsOrderByWithRelationInputSchema } from '../inputTypeSchemas/HazardSymbolsOrderByWithRelationInputSchema'
import { HazardSymbolsWhereUniqueInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereUniqueInputSchema'
import { HazardSymbolsScalarFieldEnumSchema } from '../inputTypeSchemas/HazardSymbolsScalarFieldEnumSchema'
import { ChemicalFindManyArgsSchema } from "../outputTypeSchemas/ChemicalFindManyArgsSchema"
import { HazardSymbolsCountOutputTypeArgsSchema } from "../outputTypeSchemas/HazardSymbolsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HazardSymbolsSelectSchema: z.ZodType<Prisma.HazardSymbolsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  symbol: z.boolean().optional(),
  chemicals: z.union([z.boolean(),z.lazy(() => ChemicalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HazardSymbolsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HazardSymbolsFindFirstArgsSchema: z.ZodType<Prisma.HazardSymbolsFindFirstArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HazardSymbolsScalarFieldEnumSchema,HazardSymbolsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default HazardSymbolsFindFirstArgsSchema;
