import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalWhereInputSchema } from '../inputTypeSchemas/ChemicalWhereInputSchema'
import { ChemicalOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChemicalOrderByWithRelationInputSchema'
import { ChemicalWhereUniqueInputSchema } from '../inputTypeSchemas/ChemicalWhereUniqueInputSchema'

export const ChemicalAggregateArgsSchema: z.ZodType<Prisma.ChemicalAggregateArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ChemicalAggregateArgsSchema;
