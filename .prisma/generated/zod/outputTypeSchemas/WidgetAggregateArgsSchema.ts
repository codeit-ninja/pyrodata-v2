import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetWhereInputSchema } from '../inputTypeSchemas/WidgetWhereInputSchema'
import { WidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/WidgetOrderByWithRelationInputSchema'
import { WidgetWhereUniqueInputSchema } from '../inputTypeSchemas/WidgetWhereUniqueInputSchema'

export const WidgetAggregateArgsSchema: z.ZodType<Prisma.WidgetAggregateArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WidgetAggregateArgsSchema;
