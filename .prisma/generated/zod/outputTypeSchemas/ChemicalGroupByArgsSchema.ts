import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalWhereInputSchema } from '../inputTypeSchemas/ChemicalWhereInputSchema'
import { ChemicalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ChemicalOrderByWithAggregationInputSchema'
import { ChemicalScalarFieldEnumSchema } from '../inputTypeSchemas/ChemicalScalarFieldEnumSchema'
import { ChemicalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ChemicalScalarWhereWithAggregatesInputSchema'

export const ChemicalGroupByArgsSchema: z.ZodType<Prisma.ChemicalGroupByArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithAggregationInputSchema.array(),ChemicalOrderByWithAggregationInputSchema ]).optional(),
  by: ChemicalScalarFieldEnumSchema.array(),
  having: ChemicalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ChemicalGroupByArgsSchema;
