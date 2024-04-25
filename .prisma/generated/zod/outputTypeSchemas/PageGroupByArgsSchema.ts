import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'
import { PageOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PageOrderByWithAggregationInputSchema'
import { PageScalarFieldEnumSchema } from '../inputTypeSchemas/PageScalarFieldEnumSchema'
import { PageScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PageScalarWhereWithAggregatesInputSchema'

export const PageGroupByArgsSchema: z.ZodType<Prisma.PageGroupByArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithAggregationInputSchema.array(),PageOrderByWithAggregationInputSchema ]).optional(),
  by: PageScalarFieldEnumSchema.array(),
  having: PageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PageGroupByArgsSchema;
