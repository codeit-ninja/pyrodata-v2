import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereInputSchema } from '../inputTypeSchemas/EditorWidgetWhereInputSchema'
import { EditorWidgetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EditorWidgetOrderByWithAggregationInputSchema'
import { EditorWidgetScalarFieldEnumSchema } from '../inputTypeSchemas/EditorWidgetScalarFieldEnumSchema'
import { EditorWidgetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EditorWidgetScalarWhereWithAggregatesInputSchema'

export const EditorWidgetGroupByArgsSchema: z.ZodType<Prisma.EditorWidgetGroupByArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithAggregationInputSchema.array(),EditorWidgetOrderByWithAggregationInputSchema ]).optional(),
  by: EditorWidgetScalarFieldEnumSchema.array(),
  having: EditorWidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EditorWidgetGroupByArgsSchema;
