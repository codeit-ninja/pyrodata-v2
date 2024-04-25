import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereInputSchema'
import { CompositionBadgeOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionBadgeOrderByWithRelationInputSchema'
import { CompositionBadgeWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereUniqueInputSchema'

export const CompositionBadgeAggregateArgsSchema: z.ZodType<Prisma.CompositionBadgeAggregateArgs> = z.object({
  where: CompositionBadgeWhereInputSchema.optional(),
  orderBy: z.union([ CompositionBadgeOrderByWithRelationInputSchema.array(),CompositionBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionBadgeAggregateArgsSchema;
