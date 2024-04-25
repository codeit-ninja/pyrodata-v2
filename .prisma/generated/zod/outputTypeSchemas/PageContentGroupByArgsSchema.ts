import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereInputSchema } from '../inputTypeSchemas/PageContentWhereInputSchema'
import { PageContentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PageContentOrderByWithAggregationInputSchema'
import { PageContentScalarFieldEnumSchema } from '../inputTypeSchemas/PageContentScalarFieldEnumSchema'
import { PageContentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PageContentScalarWhereWithAggregatesInputSchema'

export const PageContentGroupByArgsSchema: z.ZodType<Prisma.PageContentGroupByArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithAggregationInputSchema.array(),PageContentOrderByWithAggregationInputSchema ]).optional(),
  by: PageContentScalarFieldEnumSchema.array(),
  having: PageContentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PageContentGroupByArgsSchema;
