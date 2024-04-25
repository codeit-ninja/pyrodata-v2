import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalIncludeSchema } from '../inputTypeSchemas/ChemicalIncludeSchema'
import { ChemicalUpdateInputSchema } from '../inputTypeSchemas/ChemicalUpdateInputSchema'
import { ChemicalUncheckedUpdateInputSchema } from '../inputTypeSchemas/ChemicalUncheckedUpdateInputSchema'
import { ChemicalWhereUniqueInputSchema } from '../inputTypeSchemas/ChemicalWhereUniqueInputSchema'
import { HazardSymbolsFindManyArgsSchema } from "../outputTypeSchemas/HazardSymbolsFindManyArgsSchema"
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
import { ChemicalCountOutputTypeArgsSchema } from "../outputTypeSchemas/ChemicalCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChemicalSelectSchema: z.ZodType<Prisma.ChemicalSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  formula: z.boolean().optional(),
  pageId: z.boolean().optional(),
  hazards: z.union([z.boolean(),z.lazy(() => HazardSymbolsFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChemicalCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ChemicalUpdateArgsSchema: z.ZodType<Prisma.ChemicalUpdateArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  data: z.union([ ChemicalUpdateInputSchema,ChemicalUncheckedUpdateInputSchema ]),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export default ChemicalUpdateArgsSchema;
