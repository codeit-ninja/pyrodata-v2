import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalIncludeSchema } from '../inputTypeSchemas/ChemicalIncludeSchema'
import { ChemicalWhereInputSchema } from '../inputTypeSchemas/ChemicalWhereInputSchema'
import { ChemicalOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChemicalOrderByWithRelationInputSchema'
import { ChemicalWhereUniqueInputSchema } from '../inputTypeSchemas/ChemicalWhereUniqueInputSchema'
import { ChemicalScalarFieldEnumSchema } from '../inputTypeSchemas/ChemicalScalarFieldEnumSchema'
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

export const ChemicalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChemicalFindFirstOrThrowArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChemicalScalarFieldEnumSchema,ChemicalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ChemicalFindFirstOrThrowArgsSchema;
