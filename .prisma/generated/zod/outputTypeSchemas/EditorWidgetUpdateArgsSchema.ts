import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetUpdateInputSchema } from '../inputTypeSchemas/EditorWidgetUpdateInputSchema'
import { EditorWidgetUncheckedUpdateInputSchema } from '../inputTypeSchemas/EditorWidgetUncheckedUpdateInputSchema'
import { EditorWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/EditorWidgetWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const EditorWidgetUpdateArgsSchema: z.ZodType<Prisma.EditorWidgetUpdateArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  data: z.union([ EditorWidgetUpdateInputSchema,EditorWidgetUncheckedUpdateInputSchema ]),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export default EditorWidgetUpdateArgsSchema;
