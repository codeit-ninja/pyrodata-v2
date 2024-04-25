import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsIncludeSchema } from '../inputTypeSchemas/HazardSymbolsIncludeSchema'
import { HazardSymbolsCreateInputSchema } from '../inputTypeSchemas/HazardSymbolsCreateInputSchema'
import { HazardSymbolsUncheckedCreateInputSchema } from '../inputTypeSchemas/HazardSymbolsUncheckedCreateInputSchema'
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

export const HazardSymbolsCreateArgsSchema: z.ZodType<Prisma.HazardSymbolsCreateArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  data: z.union([ HazardSymbolsCreateInputSchema,HazardSymbolsUncheckedCreateInputSchema ]),
}).strict() ;

export default HazardSymbolsCreateArgsSchema;
