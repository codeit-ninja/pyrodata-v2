import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereInputSchema'
import { CompositionBadgeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CompositionBadgeOrderByWithAggregationInputSchema'
import { CompositionBadgeScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionBadgeScalarFieldEnumSchema'
import { CompositionBadgeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CompositionBadgeScalarWhereWithAggregatesInputSchema'

export const CompositionBadgeGroupByArgsSchema: z.ZodType<Prisma.CompositionBadgeGroupByArgs> = z.object({
  where: CompositionBadgeWhereInputSchema.optional(),
  orderBy: z.union([ CompositionBadgeOrderByWithAggregationInputSchema.array(),CompositionBadgeOrderByWithAggregationInputSchema ]).optional(),
  by: CompositionBadgeScalarFieldEnumSchema.array(),
  having: CompositionBadgeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionBadgeGroupByArgsSchema;
