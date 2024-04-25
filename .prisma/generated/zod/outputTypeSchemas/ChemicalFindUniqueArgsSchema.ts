import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalIncludeSchema } from '../inputTypeSchemas/ChemicalIncludeSchema'
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

export const ChemicalFindUniqueArgsSchema: z.ZodType<Prisma.ChemicalFindUniqueArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export default ChemicalFindUniqueArgsSchema;
