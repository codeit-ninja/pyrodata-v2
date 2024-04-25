import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereInputSchema } from '../inputTypeSchemas/EditorWidgetWhereInputSchema'
import { EditorWidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/EditorWidgetOrderByWithRelationInputSchema'
import { EditorWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/EditorWidgetWhereUniqueInputSchema'

export const EditorWidgetAggregateArgsSchema: z.ZodType<Prisma.EditorWidgetAggregateArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EditorWidgetAggregateArgsSchema;
