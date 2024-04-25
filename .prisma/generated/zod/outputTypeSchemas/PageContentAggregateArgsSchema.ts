import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereInputSchema } from '../inputTypeSchemas/PageContentWhereInputSchema'
import { PageContentOrderByWithRelationInputSchema } from '../inputTypeSchemas/PageContentOrderByWithRelationInputSchema'
import { PageContentWhereUniqueInputSchema } from '../inputTypeSchemas/PageContentWhereUniqueInputSchema'

export const PageContentAggregateArgsSchema: z.ZodType<Prisma.PageContentAggregateArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PageContentAggregateArgsSchema;
