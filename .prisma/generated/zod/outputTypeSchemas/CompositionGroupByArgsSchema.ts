import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionWhereInputSchema } from '../inputTypeSchemas/CompositionWhereInputSchema'
import { CompositionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CompositionOrderByWithAggregationInputSchema'
import { CompositionScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionScalarFieldEnumSchema'
import { CompositionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CompositionScalarWhereWithAggregatesInputSchema'

export const CompositionGroupByArgsSchema: z.ZodType<Prisma.CompositionGroupByArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithAggregationInputSchema.array(),CompositionOrderByWithAggregationInputSchema ]).optional(),
  by: CompositionScalarFieldEnumSchema.array(),
  having: CompositionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionGroupByArgsSchema;
