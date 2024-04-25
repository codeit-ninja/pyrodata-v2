import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryWhereInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereInputSchema'
import { CompositionCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CompositionCategoryOrderByWithAggregationInputSchema'
import { CompositionCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionCategoryScalarFieldEnumSchema'
import { CompositionCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CompositionCategoryScalarWhereWithAggregatesInputSchema'

export const CompositionCategoryGroupByArgsSchema: z.ZodType<Prisma.CompositionCategoryGroupByArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithAggregationInputSchema.array(),CompositionCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CompositionCategoryScalarFieldEnumSchema.array(),
  having: CompositionCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CompositionCategoryGroupByArgsSchema;
