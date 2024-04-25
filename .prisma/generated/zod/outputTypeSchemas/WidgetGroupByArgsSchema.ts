import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetWhereInputSchema } from '../inputTypeSchemas/WidgetWhereInputSchema'
import { WidgetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WidgetOrderByWithAggregationInputSchema'
import { WidgetScalarFieldEnumSchema } from '../inputTypeSchemas/WidgetScalarFieldEnumSchema'
import { WidgetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WidgetScalarWhereWithAggregatesInputSchema'

export const WidgetGroupByArgsSchema: z.ZodType<Prisma.WidgetGroupByArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithAggregationInputSchema.array(),WidgetOrderByWithAggregationInputSchema ]).optional(),
  by: WidgetScalarFieldEnumSchema.array(),
  having: WidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WidgetGroupByArgsSchema;
