import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionWhereInputSchema } from '../inputTypeSchemas/CompositionWhereInputSchema'
import { CompositionOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionOrderByWithRelationInputSchema'
import { CompositionWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionWhereUniqueInputSchema'

export const CompositionAggregateArgsSchema: z.ZodType<Prisma.CompositionAggregateArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionAggregateArgsSchema;
