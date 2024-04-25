import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryWhereInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereInputSchema'
import { CompositionCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionCategoryOrderByWithRelationInputSchema'
import { CompositionCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereUniqueInputSchema'

export const CompositionCategoryAggregateArgsSchema: z.ZodType<Prisma.CompositionCategoryAggregateArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionCategoryAggregateArgsSchema;
