import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'
import { PageOrderByWithRelationInputSchema } from '../inputTypeSchemas/PageOrderByWithRelationInputSchema'
import { PageWhereUniqueInputSchema } from '../inputTypeSchemas/PageWhereUniqueInputSchema'

export const PageAggregateArgsSchema: z.ZodType<Prisma.PageAggregateArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PageAggregateArgsSchema;
